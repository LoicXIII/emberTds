import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save:function(identite){
  let store=this.get('store');
  let identit=store.createRecord('developer',
    identite
  );
  identit.save().then(()=>this.transitionTo('developers'));

  }
  }
});
