var pulse = pulse || {};

pulse.NoteGroupView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('change', this.generateAudio, this);
    this.collection.on('reset', this.addAll, this);
    this.generateAudio();
  },

  addOne: function(note) {
    var view = new pulse.NoteView({ model: note });
    var row_id = note.get('row');
    $('#instrument-'+row_id+' .notes').append( view.render().el );
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
  },

  generateAudio: function () {
    var samples = [];
    this.collection.forEach(function(note) {
      if ( note.get('active') && note.get('sample') ) {
        var sound = new buzz.sound(note.get('sample'), {
          formats: [ "ogg", "mp3", "wav" ]
        });
        sound.setVolume(note.get('volume'));
        samples.push(sound);
      }
    });
    this.audio = new buzz.group(samples);
  },

  playAudio: function() {
    this.audio.play();
    this.collection.forEach(function(note) {
      note.trigger('play');
    });
  }

});
