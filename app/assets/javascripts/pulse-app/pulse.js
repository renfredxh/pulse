function loadRhythm() {
  pulse.noteGroupViews = [];
  $.getJSON("/rhythms/2.json").done(function(data) {
    $.each(data.columns, function(idx, column) {
      // Initialize a new noteGroup. The noteGroup is reset after the view is created
      // so that the view's reset callback can be fired, preventing asyncronyous issues
      // with rendering.
      var noteGroup = new pulse.NoteGroup();
      pulse.noteGroupViews.push(new pulse.NoteGroupView({collection: noteGroup}));
      noteGroup.reset(column.notes);
    });
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
