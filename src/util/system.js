
/**
 * 浏览器窗口改变大小事件
 * @returns
 */
// function browserResize(callback){
//     window.onresize = function(){
//     }
// }
/**
 * 判断当前设备
 * @returns
 */
function currDevice(){
	var u = navigator.userAgent;
	var app = navigator.appVersion;// appVersion 可返回浏览器的平台和版本信息。该属性是一个只读的字符串。
	var browserLang = (navigator.browserLanguage || navigator.language).toLowerCase();	//获取浏览器语言
	
	var deviceBrowser = function(){
		return{
			trident: u.indexOf('Trident') > -1,  //IE内核
			presto: u.indexOf('Presto') > -1,  //opera内核
			webKit: u.indexOf('AppleWebKit') > -1,  //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,  //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/),  //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.Mac OS X/),  //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1,  //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1,  //是否iPad
			webApp: u.indexOf('Safari') == -1,  //是否web应用程序，没有头部和底部
			weixin: u.indexOf('MicroMessenger') > -1,  //是否微信
			qq: u.match(/\sQQ/i) == " qq",  //是否QQ
		}
	}();
	
	console.log(deviceBrowser);
	
}


/**
 * 获取设备、浏览器的宽度和高度
 * @returns
 */
function deviceBrowserWH(){
	return {
        //获取浏览器窗口的内部宽高 - IE9+、chrome、firefox、Opera、Safari：
        w : window.innerWidth,
        h : window.innerHeight,

        // HTML文档所在窗口的当前宽高 - IE8.7.6.5
        IE8clientWidth:document.documentElement.clientWidth,
        IE8clientHeight:document.documentElement.clientHeight,
        IE8BodyclientWidth:document.body.clientWidth,
        IE8BodyclientWidth:document.body.clientHeight,

        screenW : window.screen.width,//设备的宽度
        screenH : document.body.clientHeight,
                    //网页可见区域宽高，不包括工具栏和滚动条（浏览器窗口可视区域大小）
        webpageVisibleW :document.documentElement.clientWidth || document.body.clientWidth,
        webpageVisibleH :document.documentElement.clientHeight || document.body.clientHeight,
                //网页正文全文宽高(不包括滚动条)
        webpageW: document.documentElement.scrollWidth || document.body.scrollWidth,
        webpageH: document.documentElement.scrollHeight || document.body.scrollHeight,
        //网页可见区域宽高，包括滚动条等边线（会随窗口的显示大小改变）
        webpageVisibleW2 : document.documentElement.offsetWidth || document.body.offsetWidth ,
        webpageVisibleH2 : document.documentElement.offsetHeight || document.body.offsetHeight ,

    }
	console.log(w+'*'+h);
	console.log(screenW+'*'+screenH);
	console.log(webpageVisibleW+'*'+webpageVisibleH);
	console.log(webpageW+'*'+webpageH);
	console.log(webpageVisibleW2+'*'+webpageVisibleH2);
	//网页卷去的距离与偏移量
	/*
	1.scrollLeft:设置或获取位于给定对象左边界与窗口中目前可见内容的最左端之间的距离；
	2.scrollTop:设置或获取位于给定对象最顶端与窗口中目前可见内容的最左端之间的距离；
	3.offsetLeft:设置或获取位于给定对象相对于版面或由offsetParent属性指定的父坐标的计算左侧位置；
	4.offsetTop:设置或获取位于给定对象相对于版面或由offsetParent属性指定的父坐标的计算顶端位置；
*/
 
}
