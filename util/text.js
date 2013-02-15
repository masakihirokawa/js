/**
 * Text (text.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Text = {
  isExists : function(str) {
    return Boolean(str != null && str != '' && str != undefined);
  },
  length : function(str, l, i) {
    l = 0;
    str = escape(str);
    for(var i = 0; i < str.length; i++, l++) {
      if(str.charAt(i) == '%') {
        if(str.charAt(++i) == 'u') {
          i += 3;
          l++;
        }
        i++;
      }
    }
    return (l);
  },
  enoughFileName : null,
  correctFileName : function(fileName, fileExtention) {
    if(fileName.indexOf('.') == -1) {
      if(fileName.indexOf(fileExtention) == -1) {
        fileName += '.' + fileExtention;
      } else {
        fileName = fileName.substr(0, Text.length(fileName) - Text.length(fileExtention)) + '.' + fileExtention;
      }
    } else {
      if(fileName.indexOf(fileExtention) == -1) {
        Text.enoughFileName = Text.length(fileName) - (fileName.indexOf('.') + 1);
        if(Text.enoughFileName < Text.length(fileExtention)) {
          fileName = fileName.substr(0, Text.length(fileName) - Text.enoughFileName);
        }
        fileName += fileExtention;
      }
    }
    return (fileName);
  },
  trimForwardChar : function(str, n) {
    return (str.substr(n, Text.length(str) - n));
  },
  regex : null,
  EN : '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@-_.,:',
  EM : '１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ＠－＿．，：',
  convertToAlphanumeric : function(str) {
    if( typeof (str) == 'string') {
      for(var i = 0; i < Text.EM.length; i++) {
        Text.regex = new RegExp(Text.EM[i], 'gm');
        str = str.replace(Text.regex, Text.EN[i]);
      }
    }
    return (str);
  }
}