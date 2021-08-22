import $ from '../core';

$.prototype.addAttribute = function(name, value) {
   if(!name || !value) return this;
   for(let i = 0; i < this.length; i++){
      if(!this[i].setAttribute) continue;
      this[i].setAttribute(name, value);
   }
   return this;
}

$.prototype.removeAttribute = function(name) {
   if(!name) return this;
   for(let i = 0; i < this.length; i++){
      if(!this[i].setAttribute) continue;
      this[i].removeAttribute(name);
   }
   return this;
}