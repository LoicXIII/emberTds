import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
  model() {
    return {pro:this.get('store').findAll('project')};
  },
  actions:{
    avantDelete:function(model,pro){
      set(model,'proActif',pro);
    },
    delete:function(model,pro){
      this.get('store').findRecord('project', pro.id, {reload: true}).then((pro) => {
        pro.destroyRecord().then(() => {
          this.transitionTo('projects');
        })
      })
    },
    annuler:function(model){
      set(model,'proActif','');

    }
  }
});

