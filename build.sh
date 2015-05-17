#/bin/bash

mkdir ./plugin/notes-speaker
browserify ./src/src.js > ./plugin/notes-speaker/notes-speaker.js
uglifyjs -c -o ./plugin/notes-speaker/notes-speaker.min.js ./plugin/notes-speaker/notes-speaker.js