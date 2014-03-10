function loadRhythm() {
  pulse.Rhythm.set('id', 2);
  pulse.Rhythm.fetch({
    success: function(rhythm) {
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
      new pulse.RhythmView({model: rhythm});
    }
  });
}

(function() {
  var kit;
  $.getJSON("/kits/1.json", function(data){
    kit = data;
  }).done(function() {
    pulse.Kit.reset(kit.instruments);
    loadRhythm();
  });
})();

$(document).ready(function() {

  $(function() {
    new pulse.AppView();
  });

});
