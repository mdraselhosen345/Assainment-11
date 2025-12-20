import React from 'react';
import Catogory from '../../assets/categori.png'
import imagePng1 from '../../assets/image 1.jpg'
import imagesPng2 from '../../assets/image 2.jpg'
import imagesPng3 from '../../assets/image 3.jpg'
import imagePng4 from '../../assets/image 4.jpg'
import { ImG } from 'react-icons/im';

const Categories = () => {
    return (
        <div className='h-[400px] bg-[#12004d]'>
            <div>
                  <h1 className='text-4xl font-bold text-[#DBDBDB] pt-10 pl-25 underline decoration-[#ADADAD] underline-offset-22 decoration-2'>Popular <span className='text-4xl font-semibold text-[#EF6C00]'>Categories</span></h1>
                     <div className='w-[600px]'>
                              <img className='w-[450px] pl-25 ' src={Catogory} alt="" />
                     </div>
                 <div className='h-[400px] w-[680px]'>
            </div>

                 <div>
                         <div className='flex gap-5 border-2 border-red-500'>
                        
                          <div className='w-[300px]'>
                                 <img src={imagePng1} alt="" />
                          </div>
                          <div className='w-[300px]'>
                                <img src={imagesPng2} alt="" />
                          </div>
                            <div className='w-[300px]'>
                               <img src={imagePng4} alt="" />
                          </div>
                          <div className='w-[293px]'>
                                 <img src={imagesPng3} alt="" />
                          </div>

                      </div>
                 </div>
             </div>
        </div>
    );
};

export default Categories;