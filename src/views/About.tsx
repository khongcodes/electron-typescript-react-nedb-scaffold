///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React & packages

import React from 'react';
import { Link } from "react-router-dom";


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const About = () => {
  return (
    <div className="viewRoot viewAbout">
      <p>I'm about</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default About;