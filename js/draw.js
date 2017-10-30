const log = console.log.bind(console)
const w = window.innerWidth
const h = window.innerHeight
const c = document.querySelector("#canvas") // 获取canvas
const CclientRect = c.getBoundingClientRect() // 获取canvas的各种坐标值
let ctx = c.getContext("2d") // 实例化一个2dcanvas
c.width = w - 80 // 设置宽高
c.height = h

let d = false // 初始化鼠标按下事件 初始时为false
let drawX // 初始画鼠标按下的起始点
let drawY
var a

c.addEventListener('touchstart', (e) => {
  e.preventDefault()
  d = true

  drawX = e.targetTouches[0].pageX - CclientRect.x
  drawY = e.targetTouches[0].pageY - CclientRect.y

  ctx.beginPath()
  ctx.moveTo(drawX, drawY)
})

c.addEventListener('touchend', (e) => {
  d = false
  ctx.closePath()
})

c.addEventListener('touchmove', (e) => {
  if (d) {
    alert(123)
    ctx.lineTo(e.targetTouches[0].pageX - CclientRect.x, e.targetTouches[0].pageY - CclientRect.y)
    ctx.stroke()
  }
})

c.onmousedown = (e) => {
  d = true

  drawX = e.pageX - CclientRect.x
  drawY = e.pageY - CclientRect.y

  ctx.beginPath()
  ctx.moveTo(drawX, drawY)
}

c.onmouseup = (e) => {
  d = false
  ctx.closePath()
}

c.onmousemove = (e) => {
  if (d) {
    ctx.lineTo(e.pageX - CclientRect.x, e.pageY - CclientRect.y)
    ctx.stroke()
  }
}

// 颜色选择器
ColorPicker.fixIndicators(
  document.getElementById('slider-indicator'),
  document.getElementById('picker-indicator'));

ColorPicker(
  document.getElementById('slider'),
  document.getElementById('picker'),

  function(hex, hsv, rgb, pickerCoordinate, sliderCoordinate) {

    ColorPicker.positionIndicators(
      document.getElementById('slider-indicator'),
      document.getElementById('picker-indicator'),
      sliderCoordinate, pickerCoordinate
    );

    a = hex
  });

  console.log(a)
