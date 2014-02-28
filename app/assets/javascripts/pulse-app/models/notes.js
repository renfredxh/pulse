var pulse = pulse || {}

pulse.Note = Backbone.Model.extend({

  defaults: {
    sample: '',
    volume: 80
  },

  initialize: function() {
    // Store the sample of the corresponding instrument
    // locally in this model
    var instrument = pulse.Kit.get(this.get('row'));
    if (instrument) {
      var sample = instrument.get('sample');
      this.set('sample', sample);
    }
  },
});
