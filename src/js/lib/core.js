
const $ = function(selector){
   return new $.prototype.init(selector);
}

$.prototype.init = function(selector) {
   try{
      const elements = document.querySelectorAll(selector)
      if(!selector) return this;
      if(!elements.length) throw new Error(`don't find elements with selector "${selector}"`)
      Object.assign(this, elements);
      this.length = elements.length;
      return this;
   }catch(e){
      console.error(e)
      return this;
   }
   
}

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;