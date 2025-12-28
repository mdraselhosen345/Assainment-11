import React from 'react';
import Photo1 from '../../assets/Photo1.png'
import Photo2 from '../../assets/Photo2.png'
import Photo3 from '../../assets/Photo3.png'

const Profile = () => {
    return (
        <div className='bg-[#ffcbd3] h-[450px] pt-10'>
              <div className='flex'>
                   <div className='w-[700px] h-[400px]'>
                        <div className='ml-15 mt-5'>
                            <h1 className='text-6xl font-semibold text-black'>Fastest way to match <br />people with purpose</h1>
                            <h3 className='text-xl font-semibold text-black pt-5'>Connect Companies with standout candidates through curates pre-vetted introductions ___ not messy job boards.</h3>
                              <div className="p-6 rounded-xl flex gap-5">
                                 <button className="btn btn-neutral btn-outline">Hire Talent</button>                            
                                 <button className="btn btn-neutral btn-outline">Find Your Role</button>
                              </div>
                        </div>
                   </div>
                   <div className='w-[580px] h-[400px] bg-[#f9a8d4] rounded-l-full mr-15'>
                         <div className=''>
                                    <div className='border-2 border-red-500 h-[110px] w-[200px] mt-6 ml-40 bg-[#cccaca] flex rounded-2xl'>
                                            <img className='w-[128px] h-[115px]' src={Photo2} alt="" />
                                            <h1 className='text-xl font-bold text-[#F54927] pt-5'>Hello</h1>
                                     </div>
                                      <div className='border-2 border-red-500 h-[180px] w-[140px] bg-[#cccaca] mt-6 ml-80 rounded-2xl'>
                                           <img src={Photo3} alt="" />
                                      </div>
                                       <div className='border-2 border-red-500 h-[120px] w-[150px] ml-25 -mt-25 bg-[#cccaca] rounded-2xl'>
                                         <img className='w-[280px] h-[120px] ' src={Photo1} alt="" />
                            
                                     </div>
                           </div>
                   </div>
              </div>
        </div>
    );
};

export default Profile;