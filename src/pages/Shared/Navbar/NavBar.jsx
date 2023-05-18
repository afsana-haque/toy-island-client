import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navbarItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToy'>All Toys</Link></li>
        <li><Link to='/blog'> Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-4">
                    <img src="https://i.ibb.co/JkzGZqm/Toy-Island-logo.png?fbclid=IwAR1ZdPpBH4N2LtY2TwZ5fvOi6e0a0gQchJx4jRFNxLlssRxmUz_Z4ZsTB5s" alt="" className='w-16' />
                    <h4 className='text-xl font-bold'>ToyIsland</h4>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarItems}
                </ul>

            </div>

            <div className="navbar-end ">
                <div className=" mr-6">
                    <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_testimonials/images/sample-3.jpg" className='w-10 rounded-full' />
                </div>
                <a className="btn btn-info text-white">Logout</a>

            </div>

        </div>
    );
};

export default NavBar;