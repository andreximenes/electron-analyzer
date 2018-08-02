$(document).ready(function() {
  const app = require("electron").remote.app;
  const { remote } = require("electron");

  $("#btnMinWin").click(function(event) {
    remote.BrowserWindow.getFocusedWindow().minimize();
  });

  $("#btnMaxWin").click(function(event) {
    var window = remote.BrowserWindow.getFocusedWindow();
    if (window.isMaximized()) {
      window.restore();
    } else {
      window.maximize();
    }
  });

  $("#btnCloseWin").click(function(event) {
    remote.BrowserWindow.getFocusedWindow().close();
  });
});
