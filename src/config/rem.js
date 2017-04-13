/**
 * Created by ubuntu on 4/13/17.
 */
(function (doc, win) {
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let docEl = doc.documentElement
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
