var pulse = pulse || {};

// View represeting the controls section of the pulse app. This view's
// element contains elements responsible for controling the playing/pausing
// of the current rhythm, as well as changing the BPM.
pulse.RhythmView = Backbone.View.extend({

  el: '#rhythm-controls',

  template: _.template($('#rhythm-template').html()),

  initialize: function() {
    this.render();
    this.$bpm = this.$('#bpm');
    this.$play = this.$('#play');
  },

  events: {
    'click #play': 'togglePlay',
    'change #bpm': 'updateBpm'
  },

  render: function() {
    this.$el.html('');
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },

  togglePlay: function() {
    if (this.model.get('playing')) {
      this.pause();
    } else {
      this.play();
    }
  },

  play: function() {
    this.model.set('playId', this.loopRhythm());
    this.model.set('playing', true);
    this.$play.html('<i class="fa fa-pause"></i>');
  },

  pause: function() {
    clearInterval(this.model.get('playId'));
    this.model.set('playing', false);
    this.$play.html('<i class="fa fa-play"></i>');
  },

  updateBpm: function () {
    this.togglePlay();
    this.model.set('bpm', this.$bpm.val());
    this.togglePlay();
  },

  // Set an interval to play a each note group in a rhythm at it's
  // given bpm. Return the interval id.
  loopRhythm: function() {
    var noteGroupViews = this.model.get('noteGroupViews');
    // Tempo is equivalent to a sixteenth note represented in milliseconds.
    // (1000ms / (quarter notes per minute)/(60 seconds)) / 4
    var tempo = (1000/(this.model.get('bpm')/60))/4;
    var i = 0;
    var intervId = setInterval(function() {
      notes = noteGroupViews[i];
      notes.playAudio();
      i += 1;
      // Reset counter at the end of the 16 note phrase
      i = i > 15 ? 0 : i;
    }, tempo);
    return intervId;
  },

});

