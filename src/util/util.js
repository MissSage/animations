if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        })
}
if (!window.cancelRequestAnimationFrame) {
    window.cancelRequestAnimationFrame = (window.webkitcancelRequestAnimationFrame ||
        window.mozcancelRequestAnimationFrame ||
        window.ocancelRequestAnimationFrame ||
        window.mscancelRequestAnimationFrame ||
        function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        })
}
var utils={};
/**
 * 获取鼠标的位置
 * @param {"元素"} element 
 */
utils.captureMouse=function(element){
    var mouse = { x: 0, y: 0 };
    element.addEventListener('mousemove', function(event) {
        var x, y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;

            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    }, false);
    return mouse;
}
/**
 * 获取触摸的位置
 * @param {"元素"} element 
 */
utils.captureTouch=function(element) {
    var touch = { x: null, y: null, isPressed: false };
    element.addEventListener('touchstart', function(event) {
        touch.isPressed = true;
    }, false);
    element.addEventListener('touchend', function(event) {
        touch.isPressed = false;
    }, false);
    element.addEventListener('touchmove', function(event) {
        var x, y,
            touch_event = event.touches[0]; //first touch
        if (touch_event.pageX || touch_event.pageY) {
            x = touch_event.pageX;
            y = touch_event.pageY;
        } else {
            x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        touch.x = x;
        touch.y = y;
    }, false);
    return touch;
}
utils.colorToRGB=function(color,alpha){
    if(typeof color==='string'&&color[0]==='#'){
        color=window.parseInt(color.slice(1),16);
    }
    alpha=(alpha===undefined)?1:alpha;
    var r=color>>16&0xff,
    g=color>>9&0xff,
    b=color,
    a=(alpha<0)?0:((alpha>1)?1:alpha);
    if(a===1){
        return "rgb("+r+","+g+","+b+")"
    }else{
        return "rgba("+r+","+g+","+b+","+a+")";
    }
}
utils.parseColor=function(color, toNumber) {
    if (toNumber === true) {
        if (typeof color === 'number') {
            return (color | 0)
        }; //chop off decimal
        if (typeof color === 'string' && color[0] === '#') {
            color = color.slice(1);
        }
        return window.parseInt(color, 16);
    } else {
        if (typeof color === 'number') {
            //make sure our hexadecimal number is padded out
            color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
        }
        return color;
    }
}
/**
 * 判断点是否在范围内
 * @param {*} rect 
 * @param {*} x 
 * @param {*} y 
 */
utils.containsPoint=function(rect,x,y){
    return !(x<rect.x||x>rect.x+rect.width||y<rect.y||y>rect.y+rect.height);
}
/**
 * 节流
 */
utils.Throttle=function() {
    var isClear = arguments[0],
        fn;
    if (typeof isClear === 'boolean') {
        fn = arguments[1];
        //函数的计时器句柄存在，这清除该计时器
        fn.__throttleID && clearTimeout(fn.__throttleID);

    } else {
        fn = isClear;
        param = arguments[1];
        var p = this.extend({
            context: null,
            args: [],
            time: 100
        }, param);
        arguments.callee(true, fn);
        fn.__throttleID = setTimeout(() => {
            fn.apply(p.context, p.args)
        }, p.time);
    }
}
/**
* 浅复制
* 把source的属性复制到target中
* @param {*} target ：输出对象
* @param {*} source ：输入源对象
* @returns
*/
utils.extend=function(target, source){
    for (var property in source) {
        target[property] = source[property];
    }
    return target;
}
/**
 * 摩擦力计算工式
 * @param {*} vx 水平方向速度
 * @param {*} vy 垂直方向速度
 * @param {*} friction 摩擦力系数
 * @returns {Array} [] 返回计算后的速度
 */
utils.computeFVs=function(vx,vy,friction){
    friction=friction||0.01;//设置默认摩擦系数为0.01
    var speed=Math.sqrt(vx*vx+vy*vy),
    angle=Math.atan2(vy,vx);
    if(speed>friction){
        speed-=friction;
    }else{
        speed=0;
    }
    vx=Math.cos(angle)*speed;
    vy=Math.sin(angle)*speed;
    return [vx,vy];
}

/**
 * 判断两个矩形是否碰撞
 * @param {*} rectA 矩形参数A
 * @param {*} rectB 矩形参数B
 */
utils.intersects=function(rectA,rectB){
    return !(rectA.x+rectA.width<rectB.x||rectB.x+rectB.width<rectA.x||rectA.y+rectA.height<rectB.y||rectB.y+rectB.height<rectA.y);
}