import React from 'react';
import Catogory from '../../assets/categori.png'
 import imagePng1 from '../../assets/image 1.jpg'
 import imagesPng2 from '../../assets/image 2.jpg'
 import imagesPng3 from '../../assets/image 3.jpg'
 import imagePng4 from '../../assets/image 4.jpg'


const Categories = () => {
    return (
      
    <div className='h-[400px] bg-[#12004d] flex'>
             
             <div className=''>
                   <div>
                        <h1 className='text-4xl font-bold text-[#DBDBDB] pt-10 pl-25 underline decoration-[#ADADAD] underline-offset-22 decoration-2'>Popular <span className='text-4xl font-semibold text-[#EF6C00]'>Categories</span></h1>
                   </div>
                      <div className='w-[550px]'>
                            <img className='w-[450px] pl-25 ' src={Catogory} alt="" />
                      </div>
               </div>       

                  <div className='h-[400px] w-[680px]'>
                        <div className='flex pt-15 pl-5 gap-8'>
                        
                           <div className='w-[150px]'>
                                  <img src={imagePng1} alt="" />
                                  <div className='pt-4 pb-2'>
                                          <h1 className='text-center text-[#F54927] font-semibold'>The Hunger Games</h1>
                                          <h1 className='text-center font-bold text-[#C4C4C4]'>$50</h1>
                                  </div>
                           </div>
                           <div className='w-[150px]'>
                                 <img src={imagesPng2} alt="" />
                                    <div className='pt-4 pb-2'>
                                          <h1 className='text-center text-[#F54927] font-semibold'>The Hunger Games</h1>
                                          <h1 className='text-center font-bold text-[#C4C4C4]'>$50</h1>
                                  </div>
                           </div>
                             <div className='w-[150px]'>
                                <img src={imagePng4} alt="" />
                                    <div className='pt-4 pb-2'>
                                          <h1 className='text-center text-[#F54927] font-semibold'>The Hunger Games</h1>
                                          <h1 className='text-center font-bold text-[#C4C4C4]'>$50</h1>
                                  </div>
                           </div>
                           <div className='w-[150px]'>
                                  <img src={imagesPng3} alt="" />
                                    <div className='pt-4 pb-2'>
                                          <h1 className='text-center text-[#F54927] font-semibold'>The Hunger Games</h1>
                                          <h1 className='text-center font-bold text-[#C4C4C4]'>$50</h1>
                                  </div>
                           </div>

                        </div> 
                    
               
                 </div>
    </div>
    );
};

export default Categories;