import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./views/Home";
import About from "./views/About";

function App() {
  const ipcRenderer = window.electron.ipcRenderer;
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    // load all tags from database
    // listener is located in public/electron.js
    console.log("ipcRenderer sending request: select all tags; to load into FC state");
    ipcRenderer.send("REQUEST_SELECT_ALL_TAGS");
    ipcRenderer.on("S_RESPONSE_SELECT_ALL_TAGS", (event, args) => {
      console.log("ipcRenderer received successful response: select all tags. Setting FC state (Records)")
      setRecords(args);
    });
  }, [ipcRenderer]);

  const addRecord = (arg: string) => {
    console.log("ipcRenderer sending request: create new record with args:");
    console.log(arg);
    ipcRenderer.send("REQUEST_CREATE_RECORD", arg);
    ipcRenderer.once("S_RESPONSE_CREATE_RECORD", (event, args) => {
      console.log("ipcRenderer received successful response: create record.")
    })
  }

  const addRecordAndReloadRecords = async () => {
    const arg = new Date().toLocaleString();
    await addRecord(arg);
    console.log("ipcRenderer sending request: select all tags; to load into FC state");
    ipcRenderer.send("REQUEST_SELECT_ALL_TAGS");
  }

  console.log(records)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <Home
              recordLabels={records.map(a => a.label)}
              addRecord={addRecordAndReloadRecords} 
            />
          }/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
