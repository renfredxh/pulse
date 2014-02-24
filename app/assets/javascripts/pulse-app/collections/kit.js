var pulse = pulse || {};

// A kit is a collection of instruments
var Kit = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: pulse.Instrument,

});

// Global instrument collection
pulse.Kit = new Kit();
