/**
Developed By Siddharth Kushwaha
2020
*/


var pressing = new Object();
pressing.up = false;
pressing.down = false;
pressing.left = false;
pressing.right = false;


var KEYCODE_UP    = 38;
var KEYCODE_DOWN  = 40;
var KEYCODE_LEFT  = 37;
var KEYCODE_RIGHT = 39;

function handleKeyDown(evt) {
  if (evt.keyCode == KEYCODE_UP) {
    pressing.up = true;
  }
  else if (evt.keyCode == KEYCODE_DOWN) {
    pressing.down = true;
  }
  else if (evt.keyCode == KEYCODE_LEFT) {
    pressing.left = true;
  }
  else if (evt.keyCode == KEYCODE_RIGHT) {
    pressing.right = true;
  }
}

function handleKeyUp(evt) {
  if (evt.keyCode == KEYCODE_UP) {
    pressing.up = false;
  }
  else if (evt.keyCode == KEYCODE_DOWN) {
    pressing.down = false;
  }
  else if (evt.keyCode == KEYCODE_LEFT) {
    pressing.left = false;
  }
  else if (evt.keyCode == KEYCODE_RIGHT) {
    pressing.right = false;
  }
}
