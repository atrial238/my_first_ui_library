import $ from '../core';


$.prototype.on = function(event, callback) {
   if(!event || !callback) return this;
   for(let i = 0; i < this.length; i++){
      if(!this[i].addEventListener) continue;
      this[i].addEventListener(event, callback)
   }
   return this;
}

$.prototype.off = function(event, callback) {
   if(!event || !callback) return this;
   for(let i = 0; i < this.length; i++){
      if(!this[i].removeEventListener) continue;
      this[i].removeEventListener(event, callback)
   }
   return this;
}

$.prototype.click = function(callback) {
   for(let i = 0; i < this.length; i++){
      if(!this[i].addEventListener) continue;
      !callback ?  this.click() : this[i].addEventListener('click', callback);
   }
   return this;
}
