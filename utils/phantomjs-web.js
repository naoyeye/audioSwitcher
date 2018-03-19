
var page = require('webpage').create();
var system = require('system');

page.viewportSize = { width: 2048, height: 1040 };


var requestsArray = [];

page.onResourceRequested = function(requestData, networkRequest) {
  requestsArray.push(requestData.id);
  // console.log(JSON.stringify(requestData), networkRequest)
};

page.onConsoleMessage = function(msg, lineNum, sourceId) {
  // console.log('CONSOLE: ' + msg + '、 (from line #' + lineNum + ' in "' + sourceId + '")');
  // system.stderr.writeLine('console: ' + msg);
};


page.onError = function(msg, trace) {

  var msgStack = ['ERROR: ' + msg];

  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
    });
  }

  console.error(msgStack.join('\n'));

};


page.onResourceReceived = function(response) {
  var index = requestsArray.indexOf(response.id);
  requestsArray.splice(index, 1);
};

page.open(system.args[1], function (status) {

  var interval = setInterval(function () {

    if (requestsArray.length === 0) {
      clearInterval(interval);

      var content = page.content;

      page.evaluate(function(success) {
        document.getElementById("fullscreen").style.display = 'none';
        document.getElementById("playersmall").style.display = 'none';
        document.getElementById("nextsmall").style.display = 'none';
        document.getElementById("minimaximize").style.display = 'none'
        // document.getElementById("nextsmall").style.display = 'none';
        document.getElementsByTagName("button")[0].style.display = 'none';
        
        return document.documentElement.outerHTML;
      })
      // setTimeout(() => {
        
        // console.log(content);
        page.render(system.args[2], {format: 'jpeg'});
        phantom.exit();
      // }, 2000)

    }
  }, 10000);

});