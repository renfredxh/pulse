var pulse = pulse || {};

// Our overall **AppView** is the top-level piece of UI.
pulse.RhythmView = Backbone.View.extend({

  el: '#controls',

  initialize: function() {
    this.$play = this.$('#play');
  },

  events: {
    'click #play': 'togglePlay'
  },

  togglePlay: function() {
    if (this.model.get('playing')) {
      clearInterval(this.model.get('playId'));
      this.model.set('playing', false);
      this.$play.html('<i class="fa fa-play"></i>');
    } else {
      this.model.set('playId', this.play());
      this.model.set('playing', true);
      this.$play.html('<i class="fa fa-pause"></i>');
    }
  },

  play: function() {
    var i = 0;
    var noteGroupViews = this.model.get('noteGroupViews');
    var intervId = setInterval(function() {
      notes = noteGroupViews[i];
      notes.playAudio();
      i += 1;
      // Reset counter at the end of the phrase
      i = i > 15 ? 0 : i;
    }, 200);
    return intervId;
  }

});

