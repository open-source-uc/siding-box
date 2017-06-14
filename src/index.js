const menubar = require("menubar");

const mb = menubar({
  dir: "src/app",
  icon: "src/app/assets/icons/menubar.png",
  tooltip: "SidingBox",
  width: 300,
  height: 420,
  showDockIcon: false,
  alwaysOnTop: true, // Useful for development
});

// https://github.com/maxogden/menubar#events
mb.on("ready", function ready() {
  // your app code here
});

mb.on("after-create-window", function created() {
  mb.window.openDevTools();
});

// mb.on("after-hide", function hidden () {
//   mb.app.hide();
// });
