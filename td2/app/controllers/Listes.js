import Controller from '@ember/controller';

export default Controller.extend({
  actions: {

    addTo(source,destination,items){
      //foreach
      console.log(items);
      destination.concat(items);

    }
  }
});
