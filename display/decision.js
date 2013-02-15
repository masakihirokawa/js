/**
 * Decision (decision.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Decision = {
  intersect : function(scope1, scope2, offsetX, correctWidth) {
    if(offsetX == undefined) offsetX = 0;
    if(correctWidth == undefined) correctWidth = 0;
    this._r1 = Math.round(((scope1.width * scope1.scaleX) / 2) + correctWidth);
    this._r2 = Math.round(scope2.width / 2);
    this._dX = (((scope1.x - Math.round(correctWidth / 2)) + offsetX) + this._r1) - (scope2.x + this._r2);
    this._dY = scope1.y - (scope2.y + scope2.height);
    return ((this._dX * this._dX) + (this._dY * this._dY) <= ((this._r1 + this._r2) * (this._r1 + this._r2)));
  }
}