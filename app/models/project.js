import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name:DS.attr('string'),
  descriptif:DS.attr('string'),
  startDate:DS.attr('string'),
  dueDate:DS.attr('string'),
});
