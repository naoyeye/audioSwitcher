export default {
  post: ajaxGen('POST'),
  get: ajaxGen('GET'),
  put: ajaxGen('PUT'),
  delete: ajaxGen('DELETE')
}

// helper
function ajaxGen(method) {
  let _method = method || 'get'

  let beforeSendHandler = function (x) {
    let origin_handler = x.onreadystatechange
    x.onreadystatechange = function () {
      if (x.readyState == 1) {
        x.withCredentials = true
        x.onreadystatechange = origin_handler
      }
    }
  }

  return function (url,params,success,error, setting) {
    let _params = params
    let _setting = Object.assign({}, {
                      url: url,
                      type: _method,
                      dataType: 'json',
                      beforeSend: beforeSendHandler,
                      data: _params,
                      success: success,
                      error: error
                    }, setting)

    $.ajax(_setting)
  }
}