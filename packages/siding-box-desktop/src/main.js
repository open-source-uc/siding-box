"use strict";

// const electron = require("electron");
const menubar = require("menubar");
const isDev = require("electron-is-dev");
const path = require("path");

const server = require("./server");

const options = {
  index: path.join("file://", __dirname, "index.html"),
  icon: path.join(__dirname, "icons", "menubar.png"),
  tooltip: "SidingBox",
  width: 300,
  height: 420,
  showDockIcon: false,
  alwaysOnTop: isDev, // Useful for development
};

const mb = menubar(options);
// const { app, window, tray } = mb;

mb.on("ready", function ready() {
  const instance = server(mb);
  instance.listen(9999);
});

mb.on("after-create-window", function created() {
  if (isDev) {
    mb.window.openDevTools();
  }
});

// mb.on("after-hide", function hidden () {
//   mb.app.hide();
// });
