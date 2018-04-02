(function(global,undefined){
	
	var tools = {
		/*
	 	* 工具库
	 	* 设置html字体大小
	 	*/
		setGlobalFontSize:function (scale) {
			var oHtml = document.querySelector('html'),
				width = window.screen.width;
				if(width>736){
					width = 736;
				}
				oHtml.style.fontSize = width/scale + 'px';		
		},
    }
	
	global.tools = tools;
	
})(window,undefined);
tools.setGlobalFontSize(16);
console.log("hello my name is obj",document.querySelector('html').style.fontSize);

resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
window.addEventListener(resizeEvt, function(){
tools.setGlobalFontSize(16)
}, false);
document.addEventListener('DOMContentLoaded', function(){
tools.setGlobalFontSize(16)
}, false);

