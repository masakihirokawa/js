/**
 * Utils (utils.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Utils = {
  isArray : function(array) {
    return !(
      typeof array !== 'object' ||
      !array || (!array.length || array.length == 0) ||
      !array.constructor || array.nodeType || array.item
    )
  },
  isOverlap : function(current, last, list) {
    if(current == last) {
      return true;
    }
    if(list.length) {
      for(var b in list) {
        if(list[b] == current) return true;
      }
      return false;
    } else {
      return false;
    }
  }
}