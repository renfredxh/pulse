function playAudio(element) {
  if (element.sample === undefined) {
    var newSample = new buzz.sound(element.dataset.audio, {
          formats: [ "ogg", "mp3", "wav" ]
    });
    element.sample = newSample;
  }
  element.sample.play();
}

$(document).ready(function() {
    $('.trigger-pad').click(function() {
    playAudio(this);
  });
});
