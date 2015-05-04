/**
 * Handles opening of and synchronization with the reveal.js
 * notes talker.
 *
 */
var RevealNotesTalker = (function() {

  Reveal.addEventListener( 'ready', talkNotes );
  Reveal.addEventListener( 'slidechanged', talkNotes );

  var mespeak = require("../node_modules/mespeak");

  mespeak.loadConfig(require("../node_modules/mespeak/src/mespeak_config.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/en/en-us.json"));

  function talkNotes( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var notes = event.currentSlide.querySelector(".notes");
    if(notes) {
      mespeak.speak(notes.innerHTML);
    }
  }


})();
