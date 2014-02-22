function playAudio(element) {
  if (element.sample === undefined) {
    var sample = new Audio(element.dataset.audio);
    element.sample = sample
  }
  element.sample.play();
}

$(document).ready(function() {
    $('.trigger-pad').click(function() {
    playAudio(this);
  });
});
