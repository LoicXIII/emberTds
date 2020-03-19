import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code:DS.attr('string'),
  descriptif:DS.attr('string'),
  developer:DS.belongsTo('developer'),
  project:DS.belongsTo('project'),
  tags:DS.hasMany('tag')
});
