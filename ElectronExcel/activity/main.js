// npm init -y
// npm install electron --save-dev
// create main.js
// make changes to package.json =>
// "main":"main.js" 
// script => "start":"electron ."

const electron = require("electron");
const app = electron.app;
function createWindow(){
    const win = new electron.BrowserWindow({
        width : 800,
        height : 600,
        show : false,
        // to use node modules in electron
        webPreferences:{
            nodeIntegration : true 
        }
    })
    win.loadFile('index.html').then(function (){
        // console.log("App loaded successfully")
        win.maximize();
        win.show();
        win.webContents.openDevTools();
    })
}
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => { 
    if (process.platform !== 'darwin') { 
        app.quit() 
    }
    })
app.on('activate', () => { 
    // On macOS it's common to re-create a window in the app when the 
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow() 
    }
}) 
app.whenReady().then(createWindow);