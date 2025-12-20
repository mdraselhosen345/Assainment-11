import React from 'react';
import Logopng from '../../assets/Logo PNG.png'
const Navber = () => {
    return (
     <div className="navbar bg-[#125c12] shadow-sm">
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
    <ul className="menu menu-horizontal px-1 gap-2">
      <li><a>Home</a></li>
      <li><a>Item 2</a></li>
      <li><a>Card</a></li>
      <li><a>Item 4</a></li> 
      <li><a>Profile</a></li> 
    </ul>
  </div>

  <div className="navbar-end pr-5 gap-3">
    <div className='ml-20 rounded-5'>
      <label className="input text-black bg-white">
           <input type="search" placeholder="Search" className='w-[200px]' />
      </label>
   </div>
   <button className="btn btn-outline btn-secondary">Login</button>
  </div>
</div>
    );
};

export default Navber;