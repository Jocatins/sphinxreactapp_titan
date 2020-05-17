import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() =>{
    //     props.history.push('/')
    // },3000);
    
        return ( 
            <nav className="nav-wrapper teal darken-4">
            <div className="container">
            <a className="brand-logo">Sphinx Planet</a>
            <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
            </nav>
        );
    }
export default withRouter(Navbar);