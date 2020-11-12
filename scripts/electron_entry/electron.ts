const electron = require("electron");
export const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

import {db, createTag, selectAllTags} from "./electron_files/db.js"

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


import { IpcMain } from "electron";

const ipcMain = electron.ipcMain as IpcMain;

ipcMain.on("REQUEST_SELECT_ALL_TAGS", async (event, arg) => {
  console.log("ipcMain got request: select all tags. Running selectAllTags()");
  const tags = await selectAllTags();
  console.log("ipcMain completed selectAllTags(). Returning all tags");
  event.reply("S_RESPONSE_SELECT_ALL_TAGS", tags.proxies);
});

ipcMain.on("REQUEST_CREATE_RECORD", async (event, arg) => {
  console.log("ipcMain got request: create record. Args:");
  console.log(arg)
  console.log("Running createTag()")
  const newTag = await createTag(arg);
  console.log("ipcMain completed createTag(). New tag created:");
  console.log(newTag);
  event.reply("S_RESPONSE_CREATE_RECORD");
});

