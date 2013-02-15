/**
 * Angle (angle.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Angle = function(criteriaX, criteriaY, aimX, aimY) {
  this.nMouseX = aimX - criteriaX;
  this.nMouseY = aimY - criteriaY;
  this.nRadian = Math.atan2(this.nMouseY, this.nMouseX);
  this.nDegree = this.nRadian / (Math.PI / 180);
  this.nAngle = (this.nRadian * (180 / Math.PI) + 360) % 360;
}
Angle.prototype.getRadian = function() {
  return (this.nRadian);
}
Angle.prototype.getDegree = function() {
  return (this.nDegree);
}
Angle.prototype.getAngle = function() {
  return (this.nAngle);
}