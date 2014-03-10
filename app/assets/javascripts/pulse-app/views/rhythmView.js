var pulse = pulse || {};

// Our overall **AppView** is the top-level piece of UI.
pulse.RhythmView = Backbone.View.extend({

  el: '#controls',

  initialize: function() {
    this.$play = this.$('#play');
    this.$bpm = this.$('#bpm');
    this.$bpm.val(this.model.get('bpm'));
  },

  events: {
    'click #play': 'togglePlay',
    'change #bpm': 'updateBpm'
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

  updateBpm: function () {
    this.togglePlay();
    this.model.set('bpm', this.$bpm.val());
    this.togglePlay();
  },

  play: function() {
    var noteGroupViews = this.model.get('noteGroupViews');
    var tempo = (1000/(this.model.get('bpm')/60))/4;
    var i = 0;
    var intervId = setInterval(function() {
      notes = noteGroupViews[i];
      notes.playAudio();
      i += 1;
      // Reset counter at the end of the phrase
      i = i > 15 ? 0 : i;
    }, tempo);
    return intervId;
  }

});

