!function(){
  var windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 750) {
    windowWidth = 750;
  }
  var fontSize = windowWidth / 750 * 50;
  document.getElementsByTagName('html')[0].style.fontSize = fontSize + "px";
  document.getElementsByTagName('html')[0].style.width = "100%";
  window.onresize = function(){
    var windowWidth = document.documentElement.clientWidth;
    if(windowWidth > 750) {
      windowWidth = 750;
    }
    fontSize = windowWidth / 750 * 50;
    document.getElementsByTagName('html')[0].style.fontSize = fontSize + "px";
  }
}();