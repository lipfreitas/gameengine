const { app, BrowserWindow } = require('electron');
var core = require('./core/core');

function createWindow () {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    let menu = core.screen.menu('start');
    win.loadURL(menu);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})