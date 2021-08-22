import $ from '../core';

//show elements
$.prototype.show = function(){
   for(let i = 0; i < this.length; i++){
      if(!this[i].style) continue;
       this[i].style.display = '';
   }
   return this;
}

//hide elements
$.prototype.hide = function(){
   console.log(this)
   for(let i = 0; i < this.length; i++){
      if(!this[i].style) continue;
      this[i].style.display = 'none';
   }
   return this;
}

//toggle elements
$.prototype.toggleDisplay = function(){
   for(let i = 0; i < this.length; i++){
      if(!this[i].style) continue;
      this[i].style.display = this[i].style.display === 'none' ? '' : 'none';
   }
   return this;
}