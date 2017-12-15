const log = console.log.bind(console)

let d = false // 初始化鼠标按下事件
let movePoint = []

const main = document.querySelector('.main')
const editArea = document.createElement('div')    // 小方块
const editRotate = document.createElement('div')  // 小方块外拖拽按钮

const mainLeft = main.offsetLeft
const mainTop = main.offsetTop

/**
 * 批量添加attribute
 **/
const setAttr = (el, attrs) => {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

// 上、右、左、下、右上、左上、右下、左下
const editDir = ['t', 'r', 'l', 'b', 'tr', 'tl', 'br', 'bl']

// 添加 className
setAttr(editArea, {
  'class': 'edit-area',
  'style': 'width:150px;height:150px;transform:translate(437px, 293px);'
})
setAttr(editRotate, {
  'class': 'edit-rotate'
})

main.onmousedown = (e) => {
  main.append(editArea)
  editArea.appendChild(editRotate)
  for (var i = 0; i < editDir.length; i++) {
    const editResize = document.createElement('div')

    setAttr(editResize, {
      'class': 'edit-resize edit-resize-' + editDir[i],
      'edit-dir': editDir[i]
    })
    editArea.appendChild(editResize)
  }
}

editArea.onmousedown = (e) => {
  d = true
}

editArea.onmousemove = (e) => {
  if (d) {
    let moveX = e.pageX - 75 - mainLeft
    let moveY = e.pageY - 75 - mainTop

    editArea.style.transform = 'translate('+ moveX +'px, '+ moveY +'px)'
  }
}

editArea.onmouseup = (e) => {
  d = false
}
