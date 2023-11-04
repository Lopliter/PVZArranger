const { app, BrowserWindow, ipcMain } = require('electron')
app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    frame: false,
    width: 1366,
    height: 768,
    maxWidth: 1366,
    minWidth: 1366,
    maxHeight: 808,
    minHeight: 808,
    vibrancy: 'dark',
    visualEffectState: "active",
    webPreferences: {experimentalFeatures: true}
 })
 mainWindow.setMenu(null)
 mainWindow.setMaximizable(false)
 mainWindow.loadFile('./index.html')
 mainWindow.removeMenu()
 mainWindow.on('closed', () => {
  mainWindow = null;
  });
});
ipcMain.on('openNewWindow', () => {
    let mainPage = new BrowserWindow({
      frame: false,
      width: 1366,
      height: 768,
      maxWidth: 1366,
      minWidth: 1366,
      maxHeight: 808,
      minHeight: 808,
      vibrancy: 'dark',
      visualEffectState: "active",
      webPreferences: {experimentalFeatures: true}
  });
  mainPage.loadFile('MainPage.html')
  mainPage.setMenu(null)
  mainPage.setMaximizable(false)
  mainPage.removeMenu()
  mainPage.on('closed', () => {
    mainPage = null;
  });
});
