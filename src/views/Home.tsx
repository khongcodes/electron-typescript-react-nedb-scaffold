///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React & packages

import React from 'react';


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const Home = () => {
  const db = require("../db");

  const createTag = async () => {
    const tag = await db.tags.insert({doc: "yourdoc"});
    console.log("tag");
    console.log(tag);
    return tag;
  }

  const getTags = async() => {
    const proxies = await db.tags.find({});
    console.log("proxies");
    console.log(proxies);
    return {proxies};
  }

  return (
    <div className="viewRoot viewHome" >
      <p>{getTags}</p>
      <button onClick={createTag} >click</button>
    </div>
  )
};

export default Home;