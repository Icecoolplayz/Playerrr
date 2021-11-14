// First time setup:
// 1. Make sure you have the following files in the SAME folder:
// mic.js
// p5.min.js
// p5.sound.js
// p5.dom.js
// player.html
// These are ALL required or this won't run.
// Don't trust the supplied files? Download official ones from here:
// https://p5js.org/download/

// 2. Your video files should be in the same folder to make it easier. Make sure you have converted them into .webm format
// You will want to use videos that are THE SAME SIZE to use this effectively unless you just want some other thing to show. Also works for normal images but you'll have to change some of the code below to do that.
// Be sure to RENAME them to the names of your videos in the mic.js from 'cat.webm' and 'dog.webm', as these are example files.

// 3. You will need to use Chrome or another browser that supports MediaPlay for this to detect your mic. Make sure to ALLOW it to do so. Wrong mic? Set it through your browser somehow, it should use the default one.

// 4. You also need to run this off a local web server as just opening the HTML file in your browser will not work due to MediaPlay requirements. To do this, follow instructions here:
// https://github.com/processing/p5.js/wiki/Local-server
// Easiest one is to use the Web Server for Chrome Extension, then it's up and working almost immediately. 

// Once this is completed, just open up the player.html in a Browser page (probably will be something like http://127.0.0.1:8887/player.html) and use a display capture (not sure how to make it supported with their Browser Source plugin, sorry)