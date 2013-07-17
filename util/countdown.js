/**
 * Countdown
 */
var Countdown = {
  hour : function(seconds) {
    return (Math.floor((seconds / 60) / 60));
  },
  min : function(seconds) {
    return (Math.floor(seconds / 60) % 60);
  },
  sec : function(seconds) {
    return (seconds % 60);
  }
}
