///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React & packages

import React from 'react';
import { Link } from "react-router-dom"

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

type HomeProps = {
  addRecord: (label: string) => void;
}


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const Home: React.FC<HomeProps> = ({ addRecord }) => {

  return (
    <div className="viewRoot viewHome" >
      <p>Home</p>
      
      <Link to="/about">About</Link>
      
      <p>
        <button onClick={() => addRecord("11:20")}>
          add record
        </button>
      </p>
    </div>
  )
};

export default Home;