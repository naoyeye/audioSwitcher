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
  let leftEle = document.getElementById('left')
  let rightEle = document.getElementById('right')

  // console.log(leftEle, defaultWidth)
  document.getElementById("left").innerHTML = defaultWidth
  document.getElementById("right").innerHTML = defaultWidth



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
        leftEle.innerText = x_pos
        rightEle.innerText = winW - x_pos
      }
  }


  function _destroy(e) {
    x_pos = (document.all ? window.event.clientX : e.pageX) - x_elem;
    if (x_pos < 0 || x_pos === 10) {
      x_pos = 10
    }

    if (x_pos === winW || x_pos > winW) {
      x_pos = winW - 10
    }
    if (dragging) {
      console.log(x_pos)
    }

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



})
