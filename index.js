const { app, ipcMain } = require("electron");
const ChronoTray = require("./app/chronoTray");
const ws = require("windows-shortcuts");
const MainWindow = require("./app/mainWindow");

let mainWindow;
let tray;

app.on("ready", () => {
    mainWindow = new MainWindow();
    tray = new ChronoTray("./assets/icon-tray.png", mainWindow);
    if (process.env.NODE_ENV !== "production" && process.platform === "win32") {
        ws.create("%APPDATA%/Microsoft/Windows/Start Menu/Programs/Electron.lnk", process.execPath);
        app.setAppUserModelId(process.execPath);
    }
});

ipcMain.on("timeUpdate", (event, timeUpdate) => {
    if (process.platform === "darwin") {
        tray.setTitle(timeUpdate);
    } else {
        tray.setToolTip(timeUpdate);
    }
});