var pulse = pulse || {};

pulse.NoteGroupView = Backbone.View.extend({

  initialize: function() {
    this.addAll();
    this.generateAudio();
  },

  addOne: function(note) {
    var view = new pulse.NoteView({ model: note });
    var row_id = note.get('row');
    $('#instrument-'+row_id+' .notes').append( view.render().el );
  },

  addAll: function() {
    console.log("called");
    this.collection.each(this.addOne, this);
  },

  generateAudio: function () {
    var samples = [];
    this.collection.forEach(function(note) {
      if ( !note.active && note.get('sample') ) {
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
  }

});
