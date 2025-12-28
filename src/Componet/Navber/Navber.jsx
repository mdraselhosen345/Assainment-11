import React from 'react';
import { NavLink,} from 'react-router';
import Logopng from '../../assets/Logo PNG.png'
const Navber = () => {
    return (
     <div className="navbar bg-[#ffcbd3] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      </ul>
    </div>
    <a className="text-xl pl-5">
      <img src={Logopng} className='w-[50px] h-[50px]' alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex mr-20">
    <ul className="menu menu-horizontal px-1 gap-2 text-black">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to='/Categories'>Categories</NavLink></li>
      <li><NavLink to='/Audio'>Top-Book</NavLink></li>
      <li><NavLink to='/Card'>Card</NavLink></li>   
      <li><NavLink to='/Profile'>Profile</NavLink></li> 
    </ul>
  </div>

  <div className="navbar-end pr-5 gap-3">
    <div className='ml-20 rounded-5'>
      <label className="input text-black bg-white">
           <input type="search" placeholder="Search" className='w-[200px]' />
      </label>
   </div>
   {/* <li><NavLink to="/Login" className="btn btn-outline btn-secondary">Login</NavLink></li> */}
   <li><NavLink to='/Login'className="btn btn-outline btn-secondary">Login</NavLink></li>
  </div>
</div>
    );
};

export default Navber;