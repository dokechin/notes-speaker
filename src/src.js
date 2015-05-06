/**
 * Handles opening of and synchronization with the reveal.js
 * notes talker.
 *
 */
var RevealNotesTalker = (function() {

  Reveal.addEventListener( 'ready', talkNotes );
  Reveal.addEventListener( 'slidechanged', talkNotes );
  var config = Reveal.getConfig();

  var mespeak = require("../node_modules/mespeak");

  mespeak.loadConfig(require("../node_modules/mespeak/src/mespeak_config.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/es.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/de.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/fr.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/pt.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/zh.json"));
  mespeak.loadVoice(require("../node_modules/mespeak/voices/en/en-us.json"));

  function talkNotes( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var notes = event.currentSlide.querySelector(".notes");
    if(notes) {
      if (config.notesLang){
        mespeak.speak(notes.innerHTML,{"voice": config.notesLang});
      }
      else{
        mespeak.speak(notes.innerHTML);
      }
    }
  }


})();
