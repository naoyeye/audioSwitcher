(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
// import { Draggable } from '@shopify/draggable';

// const ele = $('#handler')

// $(function() {
//   const draggable = new Draggable($('#app')[0], {
//     draggable: ele[0],
//   })

//   // draggable.on('drag:start', (a, b, c) => {
//   //   console.log('drag:start', e)
//   // })

//   draggable.on('drag:move', (e) => {
//     let offsetX = e.data.sensorEvent.data.clientX
//     ele.css({
//       top: 0
//     })
//   })

//   draggable.on('drag:stop',  (e) => {
//     let offsetX = e.data.sensorEvent.data.clientX
//     ele.css({
//       left: offsetX
//     })
//   })
// })
// 


$(function() {
  var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

  let winW = window.innerWidth

  let defaultWidth = Math.floor(winW / 2) + ''
  let dragging = false

  let wrapEle = document.getElementById('handler-wrap')
  // let leftEle = document.getElementById('left')
  // let rightEle = document.getElementById('right')

  // console.log(leftEle, defaultWidth)
  // document.getElementById("left").innerHTML = defaultWidth
  // document.getElementById("right").innerHTML = defaultWidth


  var leftAudio = document.getElementById('left-audio');
  var rightAudio = document.getElementById('right-audio');
  var $controlBtn = $('#stop-play-btn');

  leftAudio.loop = true;
  rightAudio.loop = true;

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
  var leftAudioSource = context.createMediaElementSource(leftAudio);
  var rightAudioSource = context.createMediaElementSource(rightAudio);

  var leftGain = context.createGain();
  var rightGain = context.createGain();

  leftAudioSource.connect(leftGain);
  rightAudioSource.connect(rightGain);

  leftGain.connect(context.destination);
  rightGain.connect(context.destination);

  leftAudio.play();
  rightAudio.play();

  function _drag_init(elem) {
    selected = elem;
    dragging = true
    x_elem = x_pos - selected.offsetLeft;
  }


  function _move_elem(e) {
      x_pos = (document.all ? window.event.clientX : e.pageX) - x_elem;
      if (x_pos < 12 || x_pos === 12) {
        x_pos = 12
      }

      if (x_pos === winW - 10 || x_pos > winW - 10) {
        x_pos = winW - 10
      }

      if (selected !== null) {
        wrapEle.style.width = x_pos + 'px';
        // leftEle.innerText = x_pos
        // rightEle.innerText = winW - x_pos

        let leftVolume = ((x_pos / winW)).toFixed(2)
        let rightVolume = 1 - leftVolume

        leftGain.gain.setValueAtTime(leftVolume, context.currentTime)
        rightGain.gain.setValueAtTime(rightVolume, context.currentTime)
      }
  }


  function _destroy(e) {
    // x_pos = (document.all ? window.event.clientX : e.pageX) - x_elem;
    // if (x_pos < 0 || x_pos === 10) {
    //   x_pos = 10
    // }

    // if (x_pos === winW || x_pos > winW) {
    //   x_pos = winW - 10
    // }
    // if (dragging) {
      // console.log(x_pos)
    // }

    dragging = false;
    selected = null;
    x_pos = 0;
  }

  document.getElementById('handler').onmousedown = function () {
    _drag_init(this);
    return false;
  };

  document.onmousemove = _move_elem;
  document.onmouseup = _destroy;

  let playing = true;
  $controlBtn.click((e) => {
    if (playing) {
      leftAudio.pause();
      rightAudio.pause();
      playing = false;
      $controlBtn.removeClass('playing');
    } else {
      leftAudio.play();
      rightAudio.play();
      playing = true;
      $controlBtn.addClass('playing');
    }
  })

})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLy8gaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnQHNob3BpZnkvZHJhZ2dhYmxlJztcblxuLy8gY29uc3QgZWxlID0gJCgnI2hhbmRsZXInKVxuXG4vLyAkKGZ1bmN0aW9uKCkge1xuLy8gICBjb25zdCBkcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKCQoJyNhcHAnKVswXSwge1xuLy8gICAgIGRyYWdnYWJsZTogZWxlWzBdLFxuLy8gICB9KVxuXG4vLyAgIC8vIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIChhLCBiLCBjKSA9PiB7XG4vLyAgIC8vICAgY29uc29sZS5sb2coJ2RyYWc6c3RhcnQnLCBlKVxuLy8gICAvLyB9KVxuXG4vLyAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKGUpID0+IHtcbi8vICAgICBsZXQgb2Zmc2V0WCA9IGUuZGF0YS5zZW5zb3JFdmVudC5kYXRhLmNsaWVudFhcbi8vICAgICBlbGUuY3NzKHtcbi8vICAgICAgIHRvcDogMFxuLy8gICAgIH0pXG4vLyAgIH0pXG5cbi8vICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0b3AnLCAgKGUpID0+IHtcbi8vICAgICBsZXQgb2Zmc2V0WCA9IGUuZGF0YS5zZW5zb3JFdmVudC5kYXRhLmNsaWVudFhcbi8vICAgICBlbGUuY3NzKHtcbi8vICAgICAgIGxlZnQ6IG9mZnNldFhcbi8vICAgICB9KVxuLy8gICB9KVxuLy8gfSlcbi8vIFxuXG5cbiQoZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxlY3RlZCA9IG51bGwsIC8vIE9iamVjdCBvZiB0aGUgZWxlbWVudCB0byBiZSBtb3ZlZFxuICAgIHhfcG9zID0gMCwgeV9wb3MgPSAwLCAvLyBTdG9yZXMgeCAmIHkgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIHBvaW50ZXJcbiAgICB4X2VsZW0gPSAwLCB5X2VsZW0gPSAwOyAvLyBTdG9yZXMgdG9wLCBsZWZ0IHZhbHVlcyAoZWRnZSkgb2YgdGhlIGVsZW1lbnRcblxuICBsZXQgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgbGV0IGRlZmF1bHRXaWR0aCA9IE1hdGguZmxvb3Iod2luVyAvIDIpICsgJydcbiAgbGV0IGRyYWdnaW5nID0gZmFsc2VcblxuICBsZXQgd3JhcEVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW5kbGVyLXdyYXAnKVxuICAvLyBsZXQgbGVmdEVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0JylcbiAgLy8gbGV0IHJpZ2h0RWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0JylcblxuICAvLyBjb25zb2xlLmxvZyhsZWZ0RWxlLCBkZWZhdWx0V2lkdGgpXG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5pbm5lckhUTUwgPSBkZWZhdWx0V2lkdGhcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKS5pbm5lckhUTUwgPSBkZWZhdWx0V2lkdGhcblxuXG4gIHZhciBsZWZ0QXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1hdWRpbycpO1xuICB2YXIgcmlnaHRBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1hdWRpbycpO1xuICB2YXIgJGNvbnRyb2xCdG4gPSAkKCcjc3RvcC1wbGF5LWJ0bicpO1xuXG4gIGxlZnRBdWRpby5sb29wID0gdHJ1ZTtcbiAgcmlnaHRBdWRpby5sb29wID0gdHJ1ZTtcblxuICB2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICB2YXIgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgdmFyIGxlZnRBdWRpb1NvdXJjZSA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGxlZnRBdWRpbyk7XG4gIHZhciByaWdodEF1ZGlvU291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UocmlnaHRBdWRpbyk7XG5cbiAgdmFyIGxlZnRHYWluID0gY29udGV4dC5jcmVhdGVHYWluKCk7XG4gIHZhciByaWdodEdhaW4gPSBjb250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICBsZWZ0QXVkaW9Tb3VyY2UuY29ubmVjdChsZWZ0R2Fpbik7XG4gIHJpZ2h0QXVkaW9Tb3VyY2UuY29ubmVjdChyaWdodEdhaW4pO1xuXG4gIGxlZnRHYWluLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gIHJpZ2h0R2Fpbi5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gIGxlZnRBdWRpby5wbGF5KCk7XG4gIHJpZ2h0QXVkaW8ucGxheSgpO1xuXG4gIGZ1bmN0aW9uIF9kcmFnX2luaXQoZWxlbSkge1xuICAgIHNlbGVjdGVkID0gZWxlbTtcbiAgICBkcmFnZ2luZyA9IHRydWVcbiAgICB4X2VsZW0gPSB4X3BvcyAtIHNlbGVjdGVkLm9mZnNldExlZnQ7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIF9tb3ZlX2VsZW0oZSkge1xuICAgICAgeF9wb3MgPSAoZG9jdW1lbnQuYWxsID8gd2luZG93LmV2ZW50LmNsaWVudFggOiBlLnBhZ2VYKSAtIHhfZWxlbTtcbiAgICAgIGlmICh4X3BvcyA8IDEyIHx8IHhfcG9zID09PSAxMikge1xuICAgICAgICB4X3BvcyA9IDEyXG4gICAgICB9XG5cbiAgICAgIGlmICh4X3BvcyA9PT0gd2luVyAtIDEwIHx8IHhfcG9zID4gd2luVyAtIDEwKSB7XG4gICAgICAgIHhfcG9zID0gd2luVyAtIDEwXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICB3cmFwRWxlLnN0eWxlLndpZHRoID0geF9wb3MgKyAncHgnO1xuICAgICAgICAvLyBsZWZ0RWxlLmlubmVyVGV4dCA9IHhfcG9zXG4gICAgICAgIC8vIHJpZ2h0RWxlLmlubmVyVGV4dCA9IHdpblcgLSB4X3Bvc1xuXG4gICAgICAgIGxldCBsZWZ0Vm9sdW1lID0gKCh4X3BvcyAvIHdpblcpKS50b0ZpeGVkKDIpXG4gICAgICAgIGxldCByaWdodFZvbHVtZSA9IDEgLSBsZWZ0Vm9sdW1lXG5cbiAgICAgICAgbGVmdEdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShsZWZ0Vm9sdW1lLCBjb250ZXh0LmN1cnJlbnRUaW1lKVxuICAgICAgICByaWdodEdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShyaWdodFZvbHVtZSwgY29udGV4dC5jdXJyZW50VGltZSlcbiAgICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gX2Rlc3Ryb3koZSkge1xuICAgIC8vIHhfcG9zID0gKGRvY3VtZW50LmFsbCA/IHdpbmRvdy5ldmVudC5jbGllbnRYIDogZS5wYWdlWCkgLSB4X2VsZW07XG4gICAgLy8gaWYgKHhfcG9zIDwgMCB8fCB4X3BvcyA9PT0gMTApIHtcbiAgICAvLyAgIHhfcG9zID0gMTBcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoeF9wb3MgPT09IHdpblcgfHwgeF9wb3MgPiB3aW5XKSB7XG4gICAgLy8gICB4X3BvcyA9IHdpblcgLSAxMFxuICAgIC8vIH1cbiAgICAvLyBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHhfcG9zKVxuICAgIC8vIH1cblxuICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgc2VsZWN0ZWQgPSBudWxsO1xuICAgIHhfcG9zID0gMDtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW5kbGVyJykub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgX2RyYWdfaW5pdCh0aGlzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBfbW92ZV9lbGVtO1xuICBkb2N1bWVudC5vbm1vdXNldXAgPSBfZGVzdHJveTtcblxuICBsZXQgcGxheWluZyA9IHRydWU7XG4gICRjb250cm9sQnRuLmNsaWNrKChlKSA9PiB7XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIGxlZnRBdWRpby5wYXVzZSgpO1xuICAgICAgcmlnaHRBdWRpby5wYXVzZSgpO1xuICAgICAgcGxheWluZyA9IGZhbHNlO1xuICAgICAgJGNvbnRyb2xCdG4ucmVtb3ZlQ2xhc3MoJ3BsYXlpbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdEF1ZGlvLnBsYXkoKTtcbiAgICAgIHJpZ2h0QXVkaW8ucGxheSgpO1xuICAgICAgcGxheWluZyA9IHRydWU7XG4gICAgICAkY29udHJvbEJ0bi5hZGRDbGFzcygncGxheWluZycpO1xuICAgIH1cbiAgfSlcblxufSlcbiJdfQ==
