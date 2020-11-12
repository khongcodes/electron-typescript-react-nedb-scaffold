"use strict";
exports.__esModule = true;
exports.ipcMainComms = void 0;
var ipcMainRequests = [
    "REQUEST_SELECT_ALL_TAGS",
    "REQUEST_CREATE_RECORD"
];
var ipcMainSuccessResponses = [
    "S_RESPONSE_SELECT_ALL_TAGS",
    "S_RESPONSE_CREATE_RECORD"
];
var ipcMainFailResponses = [
    "F_RESPONSE_SELECT_ALL_TAGS"
];
exports.ipcMainComms = function (request) {
    switch (request) {
        case "REQUEST_SELECT_ALL_TAGS":
            return {
                preRunPrint: function () { console.log("ipcMain got request: select all tags. Running selectAllTags()"); },
                postRunSuccessPrint: function () { console.log("ipcMain completed selectAllTags(). Returning all tags"); }
            };
        default:
            return {
                noMatch: "No matching typed request. Check electron_files/ipcMainDispatchTypes."
            };
    }
};
