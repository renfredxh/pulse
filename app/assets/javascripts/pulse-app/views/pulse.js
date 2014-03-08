var pulse = pulse || {};

// Our overall **AppView** is the top-level piece of UI.
pulse.AppView = Backbone.View.extend({

  el: '#pulse-view',

  initialize: function() {
    this.listenTo(pulse.Kit, 'add', this.addOne);
    this.listenTo(pulse.Kit, 'reset', this.addAll);
    this.$play = this.$('#play');
  },

  events: {
    'click #play': 'togglePlay'
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

  togglePlay: function() {
    if (pulse.playing) {
      clearInterval(pulse.playId);
      pulse.playing = false;
      this.$play.html('<i class="fa fa-play"></i>');
    } else {
      pulse.playId = this.play();
      pulse.playing = true;
      this.$play.html('<i class="fa fa-pause"></i>');
    }
  },

  play: function() {
    var i = 0;
    var intervId = setInterval(function() {
      notes = pulse.noteGroupViews[i];
      notes.playAudio();
      i += 1;
      // Reset counter at the end of the phrase
      i = i > 15 ? 0 : i;
    }, 200);
    return intervId;
  }

});
