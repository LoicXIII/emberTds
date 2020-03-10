import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
  model() {
    return {devs:this.get('store').findAll('developer')};
  },
  actions:{
    avantDelete:function(model,dev){
      set(model,'devActif',dev);
    },
    delete:function(model,dev){
      dev.deleteRecord();
      dev.save();
      set(model,'devActif','');
    },
    annuler:function(model){
      set(model,'devActif','');

    }
  }
});
