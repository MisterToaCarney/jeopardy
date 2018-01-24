const {BrowserWindow} = require('electron')

let win = null

exports.open = function () {
  if (win !== null) {
    return(1)
  }
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL("file://" + __dirname + "/../../assets/controller/controller.html")

  win.on('closed', function () {
    console.log("closed")
    win = null
  })
}
