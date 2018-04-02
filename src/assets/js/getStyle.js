/**
 * 获取元素的实际样式
 */
window.getStyle=function(el, name){
  var style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle;
  return  style[name];
}