const log = console.log.bind(console)
const main = document.querySelector('.main')

/**
 * 批量添加attribute
 **/
const setAttr = (el, attrs) => {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

const editArea = document.createElement('div')
const editRotate = document.createElement('div')

const editDir = ['t', 'r', 'l', 'b', 'tr', 'tl', 'br', 'bl']

setAttr(editArea, {
  'class': 'edit-area'
})
setAttr(editRotate, {
  'class': 'edit-rotate'
})

main.onmousedown = (e) => {
  log(e.offsetX)
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
