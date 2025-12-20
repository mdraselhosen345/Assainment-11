import React from 'react';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBookMedical } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";
import { LuBookHeart } from "react-icons/lu";

const Brend = () => {
    return (
        <div className='h-[200px] bg-gradient-to-r from-green-900 via-green-900 to-green-500 text-white'>
            {/* <h1 className='text-4xl text-black font-bold text-center pt-10'>Best-selling book company 2025</h1> */}
            <div className='flex justify-center gap-40 pt-15'>
                     <div><FaBookOpenReader size={80} className='text-[#DBDBDB]'/></div>
                    <div> <FaBookMedical size={80} className="text-[#DBDBDB]"/> </div>
                    <div><FaBookQuran size={80} className="text-[#DBDBDB]"/></div>
                    <div><FaRegAddressBook size={80} className='text-[#DBDBDB]'/></div>
                    <div><LuBookHeart size={80} className='text-[#DBDBDB]'/></div>
            </div>
        </div>
    );
};

export default Brend;
