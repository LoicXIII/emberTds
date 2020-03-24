import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  // model() {
  //   return EmberObject.create(
  //     {
  //       projectObject:EmberObject.create(),
  //       developers:this.get('store').findAll('developer'),
  //       project:this.get('store').findAll('project')
  //     }
  //   );  },
  model() {
    let {project_id}=this.paramsFor('project');
    return RSVP.hash({
      stories: this.store.query('story',{filter: {project:project_id}}),
      project:this.store.findAll('project'),
    });
  },
  actions:{
    save:function(identite){
      let store=this.get('store');
      let identit=store.createRecord('story',
        identite
      );
      identit.save().then(()=>this.transitionTo('story'));

    }
  }
});
