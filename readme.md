# reveal.js notes-speaker plugin

## Background

* Slide presentation time is often over.
* I want to enjoy the learning using the slide.

## Speak slide automatically

Reveal.js plugin called 'Note' is the remarks function that do not appear on the slide.
So, With this plugin Note contents will be spoken when slide changed.
Talk feature is implemented using the mespeak library. http://www.masswerk.at/mespeak/

## how to build

```
npm install  --no-bin-links
./build.sh
```

## Change the voice and variant

Initialize parameter with voice and variant.

```
   Reveal.initialize({
       voice: "es",
       variant : "f1"
   });
```

