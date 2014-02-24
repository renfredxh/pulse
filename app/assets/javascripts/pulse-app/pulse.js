$(document).ready(function() {
  var kit;
  $.getJSON("/kits/1.json", function(data){
    kit = data;
  }).done(function() {
    pulse.Kit.reset(kit.instruments);
  });

  $(function() {
    // Kick things off by creating the **App**.
    new pulse.AppView();
  });

});
