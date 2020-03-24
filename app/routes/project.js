import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      stories: this.store.findAll('story'),
      project:this.store.findAll('project')
    });
  }
});

// export default Route.extend({
//   model() {
//     return EmberObject.create(
//       {
//         projectObject:EmberObject.create(),
//         sto:this.get('store').findAll('story'),
//       }
//     );
//     //
//     //
//     //   return {pro:this.get('store').findAll('story')};
//     // },
//
//
//
//
//   }
// });
