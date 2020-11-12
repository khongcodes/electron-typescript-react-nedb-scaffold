const ipcMainRequests = [
  "REQUEST_SELECT_ALL_TAGS",
  "REQUEST_CREATE_RECORD"
] as const;

export type IpcMainRequestsType = typeof ipcMainRequests[number];


const ipcMainSuccessResponses = [
  "S_RESPONSE_SELECT_ALL_TAGS",
  "S_RESPONSE_CREATE_RECORD"
] as const;

export type IpcMainSuccessResponsesType = typeof ipcMainSuccessResponses[number];


const ipcMainFailResponses = [
  "F_RESPONSE_SELECT_ALL_TAGS"
] as const;

export type IpcMainFailResponsesType = typeof ipcMainFailResponses[number];


type IpcMainCommReturn = {
  noMatch?: string;
  preRunPrint?: () => void;
  postRunSuccessPrint?: () => void;
};

export const ipcMainComms = (request: IpcMainRequestsType): IpcMainCommReturn => {
  switch (request) {
    case "REQUEST_SELECT_ALL_TAGS": 
    return {
      preRunPrint: () => { console.log("ipcMain got request: select all tags. Running selectAllTags()"); },
      postRunSuccessPrint: () => { console.log("ipcMain completed selectAllTags(). Returning all tags"); }
    }
  default:
    return {
      noMatch: "No matching typed request. Check electron_files/ipcMainDispatchTypes."
    };
  }
}