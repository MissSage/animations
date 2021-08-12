function Box(width,height, color) {
    if (width === undefined) { width = 50; }
    if (height === undefined) { height = 50; }
    if (color === undefined) { color = "#ffff00"; }
    this.x = 0;
    this.y = 0;
    this.width=width;
    this.height=height;
    this.vx=0;//每个球都有自己的速度
    this.vy=0;
    this.color = utils.parseColor(color);
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
}
/**
 * 动作，画矩形
 * @param {*} context canvas上下文
 */
Box.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    context.rect(0, 0, this.width,this.height);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
}