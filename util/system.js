/**
 * System (system.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var System = {
  isOnline : function() {
    return (location.href.substr(0, 4) == 'http');
  },
  isOffline : function() {
    return (!System.isOnline());
  }
}