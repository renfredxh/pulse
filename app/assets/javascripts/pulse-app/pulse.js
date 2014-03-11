function loadRhythm(id) {
  pulse.rhythm = new pulse.Rhythm({id: id});
  pulse.rhythm.fetch({
    success: function(rhythm) {
      pulse.Kit.trigger('removeNotes');
      var noteGroupViews = [];
      $.each(rhythm.get('columns'), function(idx, column) {
        // Initialize a new noteGroup. The noteGroup is reset after the view is created
        // so that the view's reset callback can be fired, preventing asyncronyous issues
        // with rendering.
        var noteGroup = new pulse.NoteGroup();
        noteGroupViews.push(new pulse.NoteGroupView({collection: noteGroup}));
        noteGroup.reset(column.notes);
      });
      rhythm.set('noteGroupViews', noteGroupViews);
      if (pulse.rhythmView) {
        pulse.rhythmView.pause();
        // Clear existing rhythm views
        pulse.rhythmView.remove();
      }
      $('#controls').prepend('<div id="rhythm-controls"></div>');
      pulse.rhythmView = new pulse.RhythmView({model: rhythm});
    }
  });
}

function loadKit(id, options) {
  var kit;
  $.getJSON("/kits/" + id + ".json", function(data) {
    kit = data;
  }).done(function() {
    pulse.Kit.reset(kit.instruments);
    loadRhythm(options.rhythmId || pulse.rhythm.get('id'));
  });
}

// Load an initial kit and rhythm
loadKit(1, {rhythmId: 2});

$(document).ready(function() {

  $(function() {
    new pulse.AppView();
  });

  $('#rhythm-select').change(function() {
    loadRhythm($(this).val());
  });

  $('#kit-select').change(function() {
    loadKit($(this).val(), pulse.rhythm.get('id'));
  });

});
