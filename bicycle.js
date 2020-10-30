/**
Developed By Siddharth Kushwaha
2020
*/

var bicycle = new Object();

bicycle.max_speed = 0.2;
bicycle.acceleration = 0.0015;
bicycle.dampen = 0.0004;
bicycle.brake = 0.004;
bicycle.turn_speed = 0.05;

bicycle.img = new Image();
bicycle.img_loaded = false;
bicycle.width = 80;
bicycle.height = 80;
bicycle.animation_ratio = 1.5;


bicycle.pos_x = 14.0;
bicycle.pos_y = 86.0;
bicycle.direction = 0;

bicycle.animation_counter = 0.0;

bicycle.angle = 0.0;
bicycle.speed = 0.0;

function bicycle_init() {
  bicycle.img.src = "images/bicycle.png";
  bicycle.img.onload = function() {
    bicycle.img_loaded = true;
  };
}

function bicycle_logic() {

  bicycle_move();

  bicycle.direction = get_direction(bicycle.angle, 32);

  bicycle.animation_counter += Math.abs(bicycle.speed) * bicycle.animation_ratio;
  if (bicycle.animation_counter >= 8.0) bicycle.animation_counter = 0.0;

}

function bicycle_render() {

  if (!bicycle.img_loaded) return;

  var draw_pos_x = CANVAS_WIDTH_HALF - 32;
  var draw_pos_y = CANVAS_HEIGHT_HALF - 64;

  var animation_frame = Math.floor(bicycle.animation_counter) * bicycle.width;

  ctx.drawImage(bicycle.img, animation_frame, bicycle.direction*bicycle.height, bicycle.width, bicycle.height, draw_pos_x, draw_pos_y, bicycle.width, bicycle.height);

}

function bicycle_move() {

  if (bicycle.speed > bicycle.dampen) bicycle.speed -= bicycle.dampen;
  else bicycle.speed = 0.0;

  if (pressing.up) bicycle.speed += bicycle.acceleration;
  if (bicycle.speed > bicycle.max_speed) bicycle.speed = bicycle.max_speed;

  if (pressing.down) {
    if (bicycle.speed > bicycle.brake) bicycle.speed -= bicycle.brake;
    else bicycle.speed = 0.0;
  }

  if (pressing.left) {
    bicycle.angle -= bicycle.turn_speed;
    if (bicycle.angle < -Math.PI) bicycle.angle += Math.PI + Math.PI;
  }

  if (pressing.right) {
    bicycle.angle += bicycle.turn_speed;
    if (bicycle.angle > Math.PI) bicycle.angle -= Math.PI + Math.PI;
  }

  var check_grass = isomap_get_background(Math.floor(bicycle.pos_x), Math.floor(bicycle.pos_y));
  if (check_grass == 0) {
    if (bicycle.speed > bicycle.max_speed/2) {
      bicycle.speed = bicycle.max_speed/2;
    }
  }

  var prev_x = bicycle.pos_x;
  var prev_y = bicycle.pos_y;

  bicycle.pos_x += bicycle.speed * Math.cos(bicycle.angle);
  bicycle.pos_y += bicycle.speed * Math.sin(bicycle.angle);

  var check_object = isomap_get_object(Math.floor(bicycle.pos_x), Math.floor(bicycle.pos_y));
  if (check_object > 0) {
    bicycle.pos_x = prev_x;
    bicycle.pos_y = prev_y;
    bicycle.speed = 0.0;
  }

  cam.x = bicycle.pos_x;
  cam.y = bicycle.pos_y;

}
