$(document).ready(function() {
  var kit;
  $.getJSON("/kits/1.json", function(data){
    kit = data;
  }).done(function() {
    pulse.Kit.reset(kit.instruments);
  });

  pulse.noteGroupViews = [];
  $.getJSON("/rhythms/2.json").done(function(data) {
    $.each(data.columns, function(idx, column) {
      var noteGroup = new pulse.NoteGroup(column.notes);
      pulse.noteGroupViews.push(new pulse.NoteGroupView({collection: noteGroup}));
    });
  });

  $(function() {
    new pulse.AppView();
  });

});
