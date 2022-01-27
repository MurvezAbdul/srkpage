import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css"

export default function Navigation() {
 
  return (
    <div>
    <div className='nav'>
       <Link className='h' to="/">Home</Link>    
       <Link className='l' to="/wikipedia">Wikipedia</Link>
       <Link className='m' to="/movies">Movies</Link> 
       <Link className='a' to="/achievments">Achievments </Link> 
       <Link className='g' to="/gallery">Gallery</Link>
       {/* <Link className='p' to="/picture">Picture</Link> */}
       <input type="text" placeholder='search here' className='s' />
    </div>
   </div>
  )} 