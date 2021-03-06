/*
* @Author: hanjiyun
* @Date:   2017-05-24 14:10:46
* @Last Modified by:   hanjiyun
* @Last Modified time: 2017-05-24 15:27:46
*/

/*
  移动端浮层内部滚动，外部窗体不滚动
  via: http://www.zhangxinxu.com/wordpress/2016/12/web-mobile-scroll-prevent-window-js-css/

  额外处理了在实际移动端中应用时的报错和弹窗关闭后无法滚动的 bug

  =====
  依赖Zepto.js或者jQuery.js
  container: 表示委托的浮层容器元素（$包装器对象），或者页面其他比较祖先的元素，但是，非常不建议使用$(document)或者$(document.body)等对象作为委托容器

  selectorScrollable: 表示container中可以滚动的元素的选择器，表示真正的滚动的主体。
*/

const METHODS = ['enable', 'disable']

function SmartScroll(method) {
  if (!METHODS.indexOf(method) < 0) {
    throw new Error(`method error,it must one of:${METHODS.join(',')}`)
    return false
  }

  return function(container, selectorScrollable) {
    if (method === 'enable') {
      // 如果没有滚动容器选择器，或者已经绑定了滚动时间，忽略
      if (!selectorScrollable || container.data('isBindScroll')) {
        return
      }

      // 是否是比较落后的浏览器
      // 可以自己在这里添加判断和筛选
      var isSBBrowser

      var data = {
        posY: 0,
        maxscroll: 0
      }

      // 事件处理
      container.on({
        touchstart: function(event) {
          var events = event.touches[0] || event

          // 先求得是不是滚动元素或者滚动元素的子元素
          var elTarget = $(event.target)

          if (!elTarget.length) {
            return
          }

          var elScroll

          // 获取标记的滚动元素，自身或子元素皆可
          if (elTarget.is(selectorScrollable)) {
            elScroll = elTarget
          } else if ((elScroll = elTarget.parents(selectorScrollable)).length === 0) {
            elScroll = null
          }

          if (!elScroll) {
            return
          }

          // 当前滚动元素标记
          data.elScroll = elScroll

          // 垂直位置标记
          data.posY = events.pageY
          data.scrollY = elScroll.scrollTop()
          // 是否可以滚动
          data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight
        },
        touchmove: function() {
          // 如果不足于滚动，则禁止触发整个窗体元素的滚动
          if (data.maxscroll <= 0 || typeof data.elScroll === 'undefined' || isSBBrowser) {
            // 禁止滚动
            event.preventDefault()
            return
          }
          // 滚动元素
          var elScroll = data.elScroll
          // 当前的滚动高度
          var scrollTop = elScroll.scrollTop()

          // 现在移动的垂直位置，用来判断是往上移动还是往下
          var events = event.touches[0] || event
          // 移动距离
          var distanceY = events.pageY - data.posY

          if (isSBBrowser) {
            elScroll.scrollTop(data.scrollY - distanceY)
            elScroll.trigger('scroll')
            return
          }

          // 上下边缘检测
          if (distanceY > 0 && scrollTop === 0) {
            // 往上滑，并且到头
            // 禁止滚动的默认行为
            event.preventDefault()
            return
          }

          // 下边缘检测
          if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
            // 往下滑，并且到头
            // 禁止滚动的默认行为
            event.preventDefault()
            return
          }
        },
        touchend: function() {
          data.maxscroll = 0
        }
      })

      // 防止多次重复绑定
      container.data('isBindScroll', true)

    } else if (method === 'disable') {
      container.off('touchstart')
      container.off('touchmove')
      container.off('touchend')
      container.data('isBindScroll', false)
    }
  }
}

export default {
  'enable': SmartScroll('enable'),
  'disable': SmartScroll('disable')
}
