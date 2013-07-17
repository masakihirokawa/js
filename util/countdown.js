/**
 * Countdown
 */
var Countdown = {
  hour : function(remainingSeconds) {
    return (Math.floor((remainingSeconds / 60) / 60));
  },
  min : function(remainingSeconds) {
    return (Math.floor(remainingSeconds / 60) % 60);
  },
  sec : function(remainingSeconds) {
    return (remainingSeconds % 60);
  },
  doubleDigits : function(value) {
    if (value < 10)
      value = String('0' + value);
    return (value);
  }
}
