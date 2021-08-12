function Ball(radius, color) {
    if (radius === undefined) { radius = 40; }
    if (color === undefined) { color = "#ffff00"; }
    this.x = 0;
    this.y = 0;
    this.vx=0;//每个球都有自己的速度
    this.vy=0;
    this.mass=1;
    this.radius = radius;
    this.color = utils.parseColor(color);
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
}
/**
 * 动作，画球形
 * @param {*} context canvas上下文
 */
Ball.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    //x,y,radius,start_angle,end_angle,anti-clockwise
    context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
}
/**
 * @returns {Object} Object 返回一个矩形参数，x、y为矩形的左上角坐标，width、height分别对应矩形的宽和高
 */
Ball.prototype.getBounds=function(){
    return {
        x:this.x-this.radius,
        y:this.y-this.radius,
        width:this.radius*2,
        height:this.radius*2
    }
}