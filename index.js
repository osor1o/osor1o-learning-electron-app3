const { app, Tray, Menu } = require("electron");

let tray;

app.on("ready", () => {
    tray = new Tray("./assets/robot.png");
    tray.setToolTip("It is electron application");
    const contextMenu = Menu.buildFromTemplate(menuTemplate);
    tray.setContextMenu(contextMenu);
});

const menuTemplate = [
    { label: "App", click: () => console.log("clicked!") },
    { label: "Config" },
    { label: "Help" }
];