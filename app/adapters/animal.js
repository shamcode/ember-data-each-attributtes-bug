import Ember from 'ember';
import DS from 'ember-data';

const { RSVP } = Ember;

export default DS.JSONAPIAdapter.extend({
  findRecord() {
    return RSVP.resolve({
      data: {
        id: 1,
        type: 'animal',
        attributes: {
          name: 'Tomster'
        }
      }
    })
  }
});
