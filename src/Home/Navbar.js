import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
    
        <li> <Link to={"/"}>Home</Link></li>
        <li> <Link to={"/courses"}>Courses</Link></li>
        <li> <Link to={"/materials"}>Materials</Link></li>
        <li> <Link to={"/about"}>About</Link></li>
        <li> <Link to={"/contact"}>Contact</Link></li>
        <li> <Link to={"/profile"}>Profile</Link></li>
        <li> <Link to={"/login"}>Login</Link></li>
        <li> <Link to={"/logout"}>logout</Link></li>
    </>
    return (
        <div className="navbar text-white bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                         {menu}
                    </ul>
                    
                </div>
                
                
               <a className="btn btn-ghost normal-case text-xl">REFORMATION SENSE</a>
                <li className='btn btn-ghost bg-info mt-4 align-items-center normal-case mr-4 lg:hidden text-xl underline'> <Link to={"/courses"}>Courses</Link></li>
                
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    {menu}
                </ul>
                
            </div>
             
        </div>
    );
};

export default Navbar;