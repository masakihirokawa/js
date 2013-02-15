/**
 * Angle (angle.static.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Angle = {
  nMouse : null,
  nMouseY : null,
  nRadian : null,
  nDegree : null,
  AGL_RADIUS : 180,
  AGL_ARC : 360,
  PI : Math.PI,
  init : function(criteriaX, criteriaY, aimX, aimY) {
    Angle.nMouseX = aimX - criteriaX;
    Angle.nMouseY = aimY - criteriaY;
    Angle.setRadian(Angle.nMouseX, Angle.nMouseY);
    Angle.setDegree(Angle.nRadian);
    Angle.setAngle(Angle.nRadian);
  },
  setRadian : function(x, y) {
    Angle.nRadian = Math.atan2(y, x);
  },
  getRadian : function() {
    if(Angle.nRadian == null) {
      return;
    }
    return (Angle.nRadian);
  },
  setDegree : function(radian) {
    Angle.nDegree = radian / (Angle.PI / Angle.AGL_RADIUS);
  },
  getDegree : function() {
    if(Angle.nDegree == null) {
      return;
    }
    return (Angle.nDegree);
  },
  setAngle : function(radian) {
    Angle.nAngle = (radian * (Angle.AGL_RADIUS / Angle.PI) + Angle.AGL_ARC) % Angle.AGL_ARC;
  },
  getAngle : function() {
    if(Angle.nAngle == null) {
      return;
    }
    return (Angle.nAngle);
  }
}