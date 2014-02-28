var pulse = pulse || {}

pulse.Rhythm = Backbone.Model.extend({

  initialize: function() {
    var notes = pulse.NoteGroup(this.get('notes'))
    this.set('notes', notes);
    this.set('sample', sample);
  }

});
