/**
 * Surface (surface.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Square = {
  square : null,
  x : 0,
  y : 0,
  width : 0,
  height : 0,
  rgba : '',
  rectangle : [],
  create : function($x, $y, $width, $height, $rgba) {
    Square.setProperty($x, $y, $width, $height, $rgba);
    square = new Surface(Square.width, Square.height);
    square.context.beginPath();
    square.context.fillStyle = Square.rgba;
    square.context.fillRect(Square.x, Square.y, Square.width, Square.height);
    square.context.fill();
  },
  setRGBA : function($rgba) {
    if(!Square.isExists) {
      return;
    }
    square = new Surface(Square.width, Square.height);
    square.context.beginPath();
    square.context.fillStyle = $rgba;
    square.context.fillRect(Square.x, Square.y, Square.width, Square.height);
    square.context.fill();
  },
  setProperty : function($x, $y, $width, $height, $rgba) {
    Square.x = $x;
    Square.y = $y;
    Square.width = $width;
    Square.height = $height;
    Square.rgba = $rgba;
    Square.rectangle[Square.x, Square.y, Square.width, Square.height];
    Square.isExists = true;
  },
  get : function() {
    if(square == null) {
      return;
    }
    return (square)
  }
}