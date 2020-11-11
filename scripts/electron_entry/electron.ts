const electron = require("electron");
export const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

import {db, createTag, selectAllTags} from "./electron_files/db.js"
// const { 
//   db,
//   createTag, selectAllTags
// } = require("./electron_files/db.js");

let mainWindow: any;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    transparent: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + "/electron_files/preload.js"
    }
  });

  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});


const ipcMain = electron.ipcMain;

ipcMain.on("requestAllTagsToReloadAppState", async (event, arg) => {
  console.log("Got request for all tags, running selectAllTags()");
  const tags = await selectAllTags();
  event.reply("returningAllTagsToReloadAppState", tags);
})

ipcMain.on("makeNewRecord", async (event, arg) => {
  console.log(`got request to make new record with label ${arg}, running createTag`);
  const newTag = await createTag(arg);
  console.log("new tag:");
  console.log(newTag);
  event.reply("makeNewRecordSuccessful");
})