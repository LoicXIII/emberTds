import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
  model() {
    return {pro:this.get('store').findAll('story')};
  },

});
