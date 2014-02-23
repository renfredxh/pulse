var pulse = pulse || {};

var InstrumentSet = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: pulse.Instrument,

});

// Global instrument collection
pulse.Instruments = new InstrumentSet();
pulse.InstrumentSet = InstrumentSet;
