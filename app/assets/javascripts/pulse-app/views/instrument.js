var pulse = pulse || {};

// The DOM element for a todo item...
pulse.InstrumentView = Backbone.View.extend({

  className: '.instrument-row',

  // Cache the template function for a single item.
  template: _.template( $('#instrument-template').html() ),

  events: {
    'click .instrument': 'play'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.audio = new buzz.sound(this.model.get('sample'), {
      formats: [ "ogg", "mp3", "wav" ]
    });
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

  // Play the instrument's sample
  play: function() {
    this.audio.play();
  },

});
