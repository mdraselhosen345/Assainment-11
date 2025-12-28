import React from 'react';
import { Link } from 'react-router';
import BannerPng from '../../assets/banner.jpg'
import Books from '../../assets/books.png'


const Banner = () => {
    return (
            <div className='h-[400px] relative'>
                <img className='h-[400px] w-full bg-cover' src={BannerPng} alt="" />
                  <div className='absolute inset-0 flex justify-between items-center px-10'>

                          <div className='bt-60 w-[550px] pl-20'>
                               <h1 className='text-[#F5B027] text-6xl font-bold'>The Bast Books <br /> Of 2025</h1>
                               <p className='text-[#F54927] pt-5 pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fugit, aut unde pariatur beatae iusto qui repudiandae exercitationem ea dolorum.</p>                              
                                 <div>
                                      <Link to='/Login' className="btn btn-outline btn-secondary">Login Now</Link> 
                                 </div>
                         </div>

                           <div className='pr-10'>
                               <img className='w-[350px] h-[350px]' src={Books} alt="" />
                           </div>
                  </div>
            </div>
    );
};

export default Banner;