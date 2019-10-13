const { BrowserWindow } = require("electron");

const INITIAL_PROPS = {
    webPreferences: {
        nodeIntegration: true
    },
    width: 350,
    height: 160,
    resizable: false,
    frame: false,
    show: false,
    skipTaskbar: true
};

class MainWindow extends BrowserWindow {
    constructor(props = {}) {
        super({ ...INITIAL_PROPS, ...props });
        this.loadFile("./pages/index.html");
        this.on("blur", () => setTimeout(() => this.hide(), 200));
    }
}

module.exports = MainWindow;