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
        // Clear existing rhythm views
        pulse.rhythmView.remove();
      }
      $('#controls').prepend('<div id="rhythm-controls"></div>');
      pulse.rhythmView = new pulse.RhythmView({model: rhythm});
    }
  });
}

(function() {
  var kit;
  $.getJSON("/kits/1.json", function(data){
    kit = data;
  }).done(function() {
    pulse.Kit.reset(kit.instruments);
    loadRhythm(2);
  });
})();

$(document).ready(function() {

  $(function() {
    new pulse.AppView();
  });

  $('#rhythm-select').change(function() {
    loadRhythm($(this).val());
  });

});
