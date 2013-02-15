/**
 * XHRLoader (xhrloader.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var XHRLoader = {
  req : null,
  parameter : null,
  isLoadComplete : false,
  load : function(url, parameters, onCompleteFunction) {
    if(onCompleteFunction != undefined) {
      XHRLoader.onComplete = onCompleteFunction;
    }
    XHRLoader.req = window.XMLHttpRequest ? new XMLHttpRequest() : (function() {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {
          return null;
        }
      }
    })();
    if(XHRLoader.req) {
      XHRLoader.req.onreadystatechange = function() {
        if(System.isOnline()) {
          if(XHRLoader.req.readyState == 4 && XHRLoader.req.status == 200) {
            XHRLoader.onComplete();
          }
        } else {
          if(XHRLoader.req.readyState == 4) {
            XHRLoader.onComplete();
          }
        }
        XHRLoader.isLoadComplete = true;
      };
      if(parameters != null) {
        XHRLoader.parameter = parameters;
      }
      XHRLoader.req.open("GET", url, true);
      XHRLoader.req.send(XHRLoader.parameter);
    }
  },
  onComplete : function() {
  }
}