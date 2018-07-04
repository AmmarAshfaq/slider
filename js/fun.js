
var startPoint = 1

function slideValue (init) {
  var slides = document.getElementsByClassName('slides')
  if (init > slides.length) {
    startPoint = 1
  }
  if (init < 1) {
    startPoint = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[startPoint - 1].style.display = 'block'
  console.log(startPoint - 1)
}
function incrementPointer () {
  startPoint++
  slideValue(startPoint)
}
setInterval(incrementPointer, 4000)

function moveForward () {
  startPoint++
  slideValue(startPoint)
}
function moveBackward () {
  startPoint--
  slideValue(startPoint)
}
