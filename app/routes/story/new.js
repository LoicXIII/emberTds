import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({

  model(params) {
    let {project_id}=params.project_id;
    return EmberObject.create({
      newproject:this.get('store').findRecord('project', project_id)
      developer:this.get('store').findAll('developer')

    /*
    let {project_id}=params.project_id;
    return RSVP.hash({
      projectObject: this.get('store').findRecord('project', project_id),
      developers:this.get('store').findAll('developer'),
      stories: this.store.query('story',{filter: {project:project_id}}),
      project:this.store.findAll('project'),*/
    });
  },
  actions:{
    save:function(identite){
      let store=this.get('store');
      let identit=store.createRecord('story',
        identite
      );
      identit.save().then(()=>this.transitionTo('project/'));

    }
  }
});
