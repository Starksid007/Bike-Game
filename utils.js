/**
Developed By Siddharth Kushwaha
2020
*/

function map_to_screen(map_x, map_y) {

  var calc_x = map_x - cam.x;
  var calc_y = map_y - cam.y;

  var screen_x = Math.floor((calc_x - calc_y) * TILE_WIDTH_HALF + CANVAS_WIDTH_HALF);
  var screen_y = Math.floor((calc_x + calc_y) * TILE_HEIGHT_HALF + CANVAS_HEIGHT_HALF);

  return {"x":screen_x, "y":screen_y};
}

function get_direction(radians, directions) {


   TAU = Math.PI + Math.PI;

   positive_radians = radians;
   if (positive_radians < 0.0) positive_radians = radians + TAU;

   normalized_direction = positive_radians / TAU;

   direction_range = 1.0 / directions;

   normalized_direction += direction_range / 2.0;
   if (normalized_direction > 1.0) normalized_direction -= 1.0;
   
   return Math.floor(normalized_direction * directions);

}
