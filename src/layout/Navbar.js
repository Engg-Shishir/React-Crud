import React  from 'react';
import {Link, NavLink } from 'react-router-dom';


const Navbar = () =>{
 return (
  <>
  <nav className="navbar navbar-expand-sm navbar-dark bg-info">
    <Link className="navbar-brand" to="/">ReactCrud</Link >
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className="nav-link"  exact to="/">Home</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
      </ul>
      

      <Link className='btn btn-dark btn-sm' to="/users/add">Add User</Link>
    </div>
  </nav>
  </>
 );
};

export default Navbar;