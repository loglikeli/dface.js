const path = require('path')
const {
  df,
  drawRects,
  rescaleRect
} = require('./commons')

const detector = new df.FrontalFaceDetector()

const lenna = df.loadImage('./data/Lenna.png')
const lennaFaceRects = detector.detect(lenna)
console.log('detection result for Lenna.png:')
console.log(lennaFaceRects)

const win1 = new df.ImageWindow()
win1.setImage(lenna)
drawRects(win1, lennaFaceRects)

const got = df.loadImage('./data/got.jpg')
// scale image up to detect smaller faces
const gotBig = df.pyramidUp(got);
const gotFaceRects = detector.detect(gotBig)
console.log('detection result for got.jpg:')
console.log(gotFaceRects)

const win2 = new df.ImageWindow()
win2.setImage(got)
drawRects(win2, gotFaceRects.map(rect => rescaleRect(rect, 0.5)))

df.hitEnterToContinue()



