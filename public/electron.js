"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.app = void 0;
var electron = require("electron");
exports.app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require("path");
var isDev = require("electron-is-dev");
var db_js_1 = require("./electron_files/db.js");
// const { 
//   db,
//   createTag, selectAllTags
// } = require("./electron_files/db.js");
var mainWindow;
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
    mainWindow.loadURL(isDev ? "http://localhost:3000" : "file://" + path.join(__dirname, "../build/index.html"));
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
exports.app.on("ready", createWindow);
exports.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        exports.app.quit();
    }
});
exports.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
var ipcMain = electron.ipcMain;
ipcMain.on("requestAllTagsToReloadAppState", function (event, arg) { return __awaiter(void 0, void 0, void 0, function () {
    var tags;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Got request for all tags, running selectAllTags()");
                return [4 /*yield*/, db_js_1.selectAllTags()];
            case 1:
                tags = _a.sent();
                event.reply("returningAllTagsToReloadAppState", tags);
                return [2 /*return*/];
        }
    });
}); });
ipcMain.on("makeNewRecord", function (event, arg) { return __awaiter(void 0, void 0, void 0, function () {
    var newTag;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("got request to make new record with label " + arg + ", running createTag");
                return [4 /*yield*/, db_js_1.createTag(arg)];
            case 1:
                newTag = _a.sent();
                console.log("new tag:");
                console.log(newTag);
                event.reply("makeNewRecordSuccessful");
                return [2 /*return*/];
        }
    });
}); });
