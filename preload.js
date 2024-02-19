const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  createWindowAndFillForm: () => {
    ipcRenderer.send('create-window-and-fill-form');
  }
});
