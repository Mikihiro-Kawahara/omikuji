(function(){
  'use strict';
  var btn = document.getElementById('btn');

  btn.addEventListener('click',function(){
    var number = Math.random();
    if(number < 0.3) {
      this.textContent = '大吉';
    } else if (number < 0.45) {
      this.textContent = '吉';
    } else if (number < 0.6) {
      this.textContent = '中吉';
    } else if (number < 0.85) {
      this.textContent = '小吉';
    } else {
      this.textContent = '凶';
    }
  });
}());