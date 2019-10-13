const { Tray, Menu, app } = require("electron");

class ChronoTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on("click", this.onClick.bind(this));
        this.setToolTip("It is electron application");
        this.setContextMenu(this.contextMenu);
    }

    onClick() {
        const { x, y } = this.getBounds();
        const { width, height } = this.mainWindow.getBounds();
        if(this.mainWindow.isVisible()) {
            this.mainWindow.hide()
        } else {
            this.mainWindow.setBounds({
                x: x >= 400 ? x - Math.floor(width / 2) : x,
                y: y >= 300 ? y - height : y,
                width, height
            });
            this.mainWindow.show();
        }
    }

    get contextMenu() {
        return Menu.buildFromTemplate([
            { label: "Toggle", click: this.onClick.bind(this) },
            { label: "Exit", click: app.quit }
        ]);
    }
}

module.exports = ChronoTray;