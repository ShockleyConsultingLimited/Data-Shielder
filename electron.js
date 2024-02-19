const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');

ipcMain.on('create-window-and-fill-form', (event) => {
  let formWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // other configurations...
  });

  formWindow.loadURL('https://optout.accudata.com/request/opt-out');
  formWindow.webContents.once('did-finish-load', () => {
    formWindow.webContents.executeJavaScript(`
      document.querySelector('input[name="first_name"]').value = 'YourUsername';
      document.querySelector('input[name="last_name"]').value = 'YourPassword';
      document.querySelector('input[name="email"]').value = 'YourPassword';
    `).then(() => {
      console.log('Form filled out and submitted');
    });
  });
});

function onReady () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  });
  win.loadURL(url.format({
    pathname: path.join(
      __dirname,
      'dist/data-shielder/browser/index.html'),
    protocol: 'file:',
    slashes: true,

  }))

  win.webContents.openDevTools()
}

app.on('ready', onReady);
