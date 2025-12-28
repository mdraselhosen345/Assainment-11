import React from 'react';
import AudioPng from '../../assets/Audio.png'
import Audio1Png from '../../assets/audio 1.jpg'
import Audio2Png from '../../assets/Audio2.jpg'
import Audio3Png from '../../assets/Adio3.jpg'
import Audio4Png from '../../assets/Audio4.png'
import topBook from '../../assets/Top Books.jpg'
import { LuBookHeart } from "react-icons/lu";
import { TbAddressBook } from "react-icons/tb";
import { PiBookBookmark } from "react-icons/pi";
import { RiBookReadLine } from "react-icons/ri";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Audio = () => {
    return (
        // top side ber
           <div className='bg-[#ffcbd3]'>
                <div className='h-[400px] flex'>             
                   <div className=' w-[800px]'>
                    <h1 className='text-[#181818] font-bold text-3xl underline decoration-[#303030] underline-offset-22 decoration-2 pt-10 pl-15'>Audio  <span className='text-[#FF5C5C] font-bold'>Books</span></h1>
                          <div className='flex gap-15 pt-10 pl-25'>
                                 <div className=''>
                                    <img className='w-[100px] h-[120px]' src={Audio1Png} alt="" />
                                          <h1 className='text-center text-[#F54927] font-bold text-xl pt-2'>The Hunger Games</h1>
                                          <h1 className='font-bold text-[#777575]'>$5% OFF</h1> 
                                          <h1 className='font-bold text-2xl text-[#424242]'>$50</h1> 
                                          <div className='pt-2'>
                                             <button className="btn btn-dash btn-info">Buy Now</button>
                                         </div>  
                                 </div>
                                 <div>
                                   <img className='w-[102px] h-[120px] ' src={Audio3Png} alt="" />
                                          <h1 className='text-center text-[#F54927] font-bold text-xl pt-2'>The Hunger Games</h1>
                                          <h1 className='font-bold text-[#777575]'>$5% OFF</h1> 
                                          <h1 className='font-bold text-2xl text-[#424242]'>$50</h1> 
                                          <div className='pt-2'>
                                            <button className="btn btn-dash btn-info">Buy Now</button>
                                         </div> 
                                 </div>
                                 <div>
                                    <img className='w-[100px] h-[120px]' src={Audio4Png} alt="" />
                                          <h1 className='text-center text-[#F54927] font-bold pt-2 text-xl'>The Hunger Games</h1>
                                          <h1 className='font-bold text-[#777575]'>$5% OFF</h1> 
                                          <h1 className='font-bold text-2xl text-[#424242]'>$50</h1> 
                                         <div className='pt-2'>
                                            <button className="btn btn-dash btn-info">Buy Now</button>
                                         </div> 
                                 </div>
                          </div>
                    </div>
                      <div className='w-[480px]'>
                              <img className='w-[400px]' src={AudioPng} alt="" />
                      </div>
                </div> 
                
                <div className='h-[550px]'>
                       <div className=''>
                        <h1 className='text-[#181818] font-bold text-3xl underline decoration-[#303030] underline-offset-22 decoration-2 pl-15'>Top  <span className='text-[#FF5C5C] font-bold'>Books</span></h1>
                            <div className='pt-2 flex justify-center'>
                                <img className='h-[300px] rounded-2xl' src={topBook} alt="" />
                            </div>
                             <h1 className='text-[#181818] font-bold text-3xl underline decoration-[#303030] underline-offset-22 decoration-2 pl-15'>Find More  <span className='text-[#FF5C5C] font-bold'>Category</span></h1>

                               <div className='flex justify-center gap-7 pt-10'>
                                    <div className='border-2 border-[#F54927] w-[250px] flex  pt-3 pb-3 rounded-2xl '>
                                            <button className=''>
                                                <LuBookHeart className='pl-2 text-[#A30000]' size={70}/>
                                            </button>
                                            <h1 className='text-center text-3xl font-bold pt-5 text-[#696969]'>Romantic</h1>
                                    </div>
                                    <div className='border-2 border-[#F54927] w-[250px] flex  pt-3 pb-3 rounded-2xl'>
                                        <button>
                                            <TbAddressBook className='pl-2 text-[#A30000]' size={80}/>
                                        </button>
                                        <h1 className='text-center text-3xl font-bold pt-5 text-[#696969]'>Buisness</h1>
                                    </div>
                                    <div className='border-2 border-[#F54927] w-[250px] flex  pt-3 pb-3 rounded-2xl'>
                                        <button>
                                            <PiBookBookmark className='pl-2 text-[#A30000]' size={80}/>
                                        </button>
                                        <h1 className='text-center text-3xl font-bold pt-5 text-[#696969]'>Biography</h1>
                                    </div>
                                    <div className='border-2 border-[#F54927] w-[250px] flex pt-3 pb-3 rounded-2xl'>
                                          <button>
                                              <RiBookReadLine className='pl-2 text-[#A30000]' size={80}/>
                                          </button>
                                          <h1 className='text-center text-3xl font-bold pt-5 text-[#696969]'>Cookbooks</h1>
                                    </div>
                             </div>
                       </div>

                </div>
           </div>
      


    );
};

export default Audio;