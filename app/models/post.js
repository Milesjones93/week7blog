import DS from 'ember-data';

export default DS.Model.extend({
  isEditing: DS.attr( 'boolean' ),
  createdAt: DS.attr( 'string'),
  title: DS.attr('string'),
  body: DS.attr('string')
});
