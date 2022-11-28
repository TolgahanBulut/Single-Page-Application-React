import React from 'react';
import {Link} from "react-router-dom";
import "./menu.css"

function Menu() {
  return (
    <div>
        <ul className='menu'>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="Login">Login</Link>
            </li>
            <li>
            <Link to="Register">Register</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu;