import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./views/Home";
import About from "./views/About";

function App() {
  const ipcRenderer = window.electron.ipcRenderer;
  const [records, setRecords] = useState<any>(null);

  useEffect(() => {
    // load all tags from database
    // listener is located in public/electron.js
    console.log("requesting all tags, to load into FC state");
    ipcRenderer.send("requestAllTagsToReloadAppState");
    ipcRenderer.on("returningAllTagsToReloadAppState", (event, args) => {
      console.log("returnAllTagsToReloadAppState was successful, setting Records")
      setRecords(args);
    });
  }, [ipcRenderer]);

  const addRecord = (label: string) => {
    console.log(`sending request to create new record with label ${label}`)
    ipcRenderer.send("makeNewRecord", label);
    ipcRenderer.once("makeNewRecordSuccessful", (event, args) => {
      console.log("makeNewRecord was successful.")
    })
  }

  const addRecordAndReloadRecords = async (label: string) => {
    await addRecord(label);
    ipcRenderer.send("requestAllTagsToReloadAppState");
  }

  console.log(records)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home addRecord={addRecordAndReloadRecords} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
