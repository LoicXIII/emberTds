import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create(
      {
        projectObject:EmberObject.create(),
        developers:this.get('store').findAll('developer'),
      }
    );  },
  actions:{
    save:function(identite){
      let store=this.get('store');
      let identit=store.createRecord('story',
        identite
      );
      identit.save().then(()=>this.transitionTo('stories'));

    }
  }
});
