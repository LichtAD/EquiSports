import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {

    const { user, logOut, theme, setTheme } = useContext(AuthContext);
    // console.log(user);

    // ! theme function

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allEquipment">All Sports Equipment</NavLink></li>
        {
            user ?
                <div className='flex flex-col lg:flex-row'>
                    <li><NavLink to="/addEquipment">Add Equipment</NavLink></li>
                    <li><NavLink to="/equipmentList">My Equipment List</NavLink></li>
                </div>
                : ''
        }
        {
            user ?
                <div>
                    <li><button onClick={logOut} className={`lg:hidden ${theme === 'dark' ? 'bg-[#2A323C]' : 'bg-white'}  border-none`}>LogOut</button></li>
                </div>
                : <div>
                    <li><NavLink className='lg:hidden' to="/registration">Registration</NavLink></li>
                    <li><NavLink className='lg:hidden' to="/login">Login</NavLink></li>
                </div>
        }
        {/* <li><a href="#contact">Contact Us</a></li> */}
    </>

    const handleLogout = () => {

    }

    return (
        <div>
            <div className={`navbar ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-200'} px-4`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <NavLink to="/">
                            <img src="/images/logo.png" className='w-16' alt="" />
                        </NavLink>
                        <NavLink to="/" className="text-xl font-bold">Equisports</NavLink>
                        {/* <h2>
                            {
                                user ? `Welcome ${user.email} - ${user.displayName}` : 'Welcome Guest'
                            }
                        </h2> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end flex gap-2'>
                    <div>
                        {
                            user && user?.email ?
                                <div className='flex items-center gap-4'>
                                    <div>
                                        {
                                            user && user?.photoURL ?
                                                // <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                <div data-tooltip-id="my-tooltip-1" className="avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={user?.photoURL} />
                                                    </div>
                                                </div>
                                                : 'image'
                                        }
                                    </div>
                                    <button onClick={logOut} className={`hidden lg:flex btn ${theme === 'dark' ? 'bg-[#2A323C]' : 'bg-white'}  border-none`}>LogOut</button>
                                </div>
                                : <div className="flex gap-2">
                                    <NavLink to={'/registration'} className={`hidden lg:flex btn ${theme === 'dark' ? 'bg-[#2A323C]' : 'bg-white'}  border-none`}>Registration</NavLink>
                                    <NavLink to={'/login'} className={`hidden lg:flex btn ${theme === 'dark' ? 'bg-[#2A323C]' : 'bg-white'}  border-none`}>Login</NavLink>
                                </div>
                        }
                    </div>
                    <div>
                        {/* ⁡⁢⁣⁢customize start⁡ */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className={`btn m-1 ${theme === 'dark' ? 'bg-[#2A323C]' : 'bg-white'} border-none flex justify-center items-center w-24`}>
                                <h1>Theme</h1>
                                <div>
                                    <svg
                                        width="12px"
                                        height="12px"
                                        className="inline-block h-2 w-2 fill-current opacity-60"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 2048 2048">
                                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content bg-base-300 w-24 rounded-box z-[1] p-2 shadow-2xl">

                                <li>
                                    <input
                                        type="radio"
                                        name="theme-dropdown"
                                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                        aria-label="Light"
                                        value="light"
                                        checked={theme === 'light'}
                                        onChange={e => setTheme(e.target.value)} />
                                </li>

                                <li>
                                    <input
                                        type="radio"
                                        name="theme-dropdown"
                                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                        aria-label="Dark"
                                        value="dark"
                                        checked={theme === 'dark'}
                                        onChange={e => setTheme(e.target.value)} />
                                </li>

                            </ul>
                        </div>
                        {/* customize end */}
                    </div>
                </div>
            </div>
            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content={user?.displayName}
            />
        </div>
    );
};

export default Navbar;