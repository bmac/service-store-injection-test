export default {
  name: 'inject-store',
  after: 'ember-data',
  initialize: function(instance) {
    var registry = instance.registry;
    registry.injection('component', 'store', 'service:store');
  }
};
