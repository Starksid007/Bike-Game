
var can;
var ctx;


setInterval(function() {
  logic();
  render();
}, 1000/FPS);


function logic() {
  bicycle_logic();
  title_logic();
}


function render() {
  ctx.clearRect(0,0,640,480);
  isomap_render_background();
  isomap_render_object();
  title_render();
}


function init() {

  can = document.getElementById("gamecanvas");
  if (can.getContext) {
    ctx = can.getContext("2d");
  }

  if (window.addEventListener) {
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
  }
  else if (window.attachEvent) {
    window.attachEvent('keydown', handleKeyDown);
    window.attachEvent('keyup', handleKeyUp);
  }

  title_init();
  tileset_init();
  bicycle_init();

}
