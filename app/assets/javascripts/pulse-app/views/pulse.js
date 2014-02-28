var pulse = pulse || {};

// Our overall **AppView** is the top-level piece of UI.
pulse.AppView = Backbone.View.extend({

  el: '#pulse-view',

  initialize: function() {
    this.listenTo(pulse.Kit, 'add', this.addOne);
    this.listenTo(pulse.Kit, 'reset', this.addAll);
  },

  events: {
    'click #play': 'play'
  },

  addOne: function(instrument) {
    var view = new pulse.InstrumentView({ model: instrument });
    $('#kit').append( view.render().el );
  },

  // Add all instruments in the Kit collection at once.
  addAll: function() {
    $('#kit').html('');
    pulse.Kit.each(this.addOne, this);
  },

  play: function() {
    notes = pulse.noteGroupViews[0];
    notes.playAudio();
  }

});
