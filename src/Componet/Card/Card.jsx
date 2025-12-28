import React, { useEffect, useState } from 'react';
import imgPNg from '../../assets/image 3.jpg'

const Card = () => {

    const [Books, setBooks] = useState([]);
    useEffect(() => {
       fetch("/Books.json")
         .then(res => res.json())
         .then(data => setBooks(data.books))
          .catch(err => console.error("json load error:", err));        
    }, []);
         
    return (
        <div className='bg-[#ffcbd3] gap-7 grid grid-cols-4'>
             {
                Books.map((Books) => (                    
              <div key={Books.id} className="card w-66 shadow-sm bg-[#12004d] ml-5 hover:bg-[#010c74]  hover:scale-105
            transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                              <span className="badge badge-xs badge-warning">{Books.author}</span>
                             <div className="flex justify-between">
                                  <h2 className="text-2xl font-semibold">{Books.badge}</h2>
                                  <span className="text-xl font-bold">{Books.price}</span>
                             </div>

                        <div className='flex justify-center'>
                              <img className='w-[100px] border-1 border-green-500' src={imgPNg} alt="" />
                        </div>

                       <ul className="mt-1 flex flex-col gap-2 text-xs">
                             <li>
                                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                 <span>{Books.title}</span>
                             </li>   
                        </ul>
                                  <div className="mt-2">
                                        <button className="btn btn-primary btn-block">{Books.buttonText}</button>
                                  </div>
                    </div>
            </div>                   
                ))
             }

        </div>
    );
};

export default Card;