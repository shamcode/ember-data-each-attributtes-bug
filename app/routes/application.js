import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord( 'animal', 1 )
      .then( () => this.store.unloadAll( 'animal' ) )
      .then( () => this.store.findRecord( 'animal', 1 ) ) ;
  }
});
