/**
 * Randomize (randomize.js)
 * Dropsystem Co., Ltd.
 * Masaki Hirokawa
 */
var Randomize = {
  shuffleList : [],
  shuffleNum : 0,
  tmpList : [],
  tmpId : 0,
  shuffleArray : function(arr) {
    Randomize.shuffleList = arr;
    Randomize.shuffleNum = Randomize.shuffleList.length;
    while(Randomize.shuffleNum) {
      this._m = Math.floor(Math.random() * Randomize.shuffleNum);
      this._n = Randomize.shuffleList[--Randomize.shuffleNum];
      Randomize.shuffleList[Randomize.shuffleNum] = Randomize.shuffleList[this._m];
      Randomize.shuffleList[this._m] = this._n;
    }
    return (Randomize.shuffleList);
  },
  shuffle : function(min, max) {
    for(var i = 0; i < max; i++) {
      Randomize.tmpList[i] = i + min;
    }
    Randomize.shuffleList = Randomize.shuffleArray(Randomize.tmpList);
    return (Randomize.shuffleList);
  },
  exact : function(exceptId, min, max) {
    do {
      Randomize.tmpId = Randomize.range(min, max);
    } while (Randomize.tmpId == exceptId);
    return (Randomize.tmpId);
  },
  range : function(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
}