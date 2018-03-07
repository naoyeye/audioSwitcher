/*
* @Author: hanjiyun
* @Date:   2018-03-07 21:04:57
* @Last Modified by:   hanjiyun
* @Last Modified time: 2018-03-07 21:04:57
*/

import React from 'react'
import { ReactDom, render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
// import configureStore, { history } from 'app/stores/store'
// import App from 'app/containers/index'
// import ScrollToTop from 'app/components/scroll-top'

// let store = configureStore()
const target = document.querySelector('#app')

  /*
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>
  */

render(
  <div className='test'>
    hahahha
    <div><a href="/">首页</a></div>
  </div>
  , target
)