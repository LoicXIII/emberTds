import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    let {project_id}=this.paramsFor('project');
    return RSVP.hash({
      pro:project_id,
      stories: this.store.query('story',{filter: {project:project_id}}),
      project:this.store.findAll('project'),
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
