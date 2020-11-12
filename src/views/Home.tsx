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
  recordLabels: any[];
  addRecord: (label: string) => void;
}


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const Home: React.FC<HomeProps> = ({ recordLabels, addRecord }) => {

  return (
    <div className="viewRoot viewHome" >
      <p>Home</p>
      
      <Link to="/about">About</Link>
      
      <p>
        {recordLabels.map((a, index) => (
          <React.Fragment key={index}>
            {a}<br/>
          </React.Fragment>
          ))
        }
        <button onClick={() => addRecord("11:20")}>
          add record
        </button>
      </p>
    </div>
  )
};

export default Home;