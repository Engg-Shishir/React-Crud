import React  from 'react';
import './PagenotFound.css';
import { NavLink } from 'react-router-dom';

const PagenotFound = () =>{
 return (
  <div className="container-fluid p-0">
    <div id="notfound">
     <div class="notfound">
      <div class="notfound-404">
       <h1>404</h1>
       <h2>Page not found</h2>
      </div>
      <NavLink to="/">Homepage</NavLink>
     </div>
    </div>
   </div>

 );
};

export default PagenotFound;