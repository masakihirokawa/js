/**
 * Dispatch.sp (dispatch.sp.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var UserAgent = {
  isIPhone : function() {
    return (UserAgent.get().indexOf('iPhone') > 0 && !UserAgent.isIPad());
  },
  isIPad : function() {
    return (UserAgent.get().indexOf('iPad') > 0);
  },
  isIPod : function() {
    return (UserAgent.get().indexOf('iPod') > 0);
  },
  isAndroid : function() {
    return (UserAgent.get().indexOf('Android') > 0);
  },
  isSmartphone : function() {
    return (
      UserAgent.isIPhone() ||
      UserAgent.isIPad() ||
      UserAgent.isIPod() ||
      UserAgent.isAndroid()
    );
  },
  get : function() {
    return (navigator.userAgent);
  }
}
var AndroidOS = {
  userAgent : navigator.userAgent,
  version : navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3),
  isHigher : function($version) {
    if(!UserAgent.isAndroid()) {
      return undefined;
    }
    return (parseFloat(AndroidOS.version) >= $version);
  },
  isLower : function($version) {
    if(!UserAgent.isAndroid()) {
      return undefined;
    }
    return !(AndroidOS.isHigher($version));
  }
}
var iOS = {}