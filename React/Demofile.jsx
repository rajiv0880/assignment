import React from 'react';
import { Link } from 'react-router-dom';

const Demofile = () => {
    return ( 
        <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contect</Link></li>
            <li><Link to="/Demofile">demo</Link></li>
            {/* <li><a href="./about.html">home</a></li> */}
        </ul>
        <h1>demo</h1>
         
        </>
     );
}
 
export default Demofile;