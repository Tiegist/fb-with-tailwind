import React from 'react';
import { ImSearch } from "react-icons/im";
import { MdOutlineGroup } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RxTextAlignJustify } from "react-icons/rx";
import { FaFacebookMessenger } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom';


function Topnav(){
return(<div className='w-96 lg:w-fit'>
    <div className="h-12 flex md:h-8 ">
    <div className='flex p-1 md:mt-4'>
    <FaFacebook className='text-blue-500 text-2xl md:-mt-4 md:text-3xl md:ml-3  mr-1 '/>
    <ImSearch className=' text-base md:text-lg  md:-mt-2 mt-2 md:mr-2  text-gray-900' />
    <input type="text" placeholder='search facebook'className='hidden sm:block md:-mt-3 focus:outline-none'></input>
    </div>
    <div className='flex mt-8 ml-7  md:text-lg text-xl md:ml-32 md:-mt-0 md:pt-4'>
    <Link to='/'><GoHomeFill className=' -ml-10  text-gray-500 ' /></Link>
    <Link to='/components/grouppage'><MdOutlineGroup className='  mr-5 text-gray-500' /></Link>
     <Link to='/components/Vediopage'><MdOutlineOndemandVideo className='mr-8 md:ml-6  text-gray-500' /></Link>
     <Link to='/components/cshoppage'><CiShop className='mr-8 md:ml-2 text-gray-600' /></Link>
    </div>
    <div className='flex '>
    <GoBell className='text-xl -ml-1 mt-8  md:text-lg md:mt-4  text-gray-500' />
    <RxTextAlignJustify className='mt-8 ml-6 md:ml-6   md:mt-4 text-xl text-gray-500 md:text-xl' />
    <FaFacebookMessenger className='text-xl mr-3 text-gray-900 mt-2 ml-10 md:ml-16  md:mt-3 md:text-lg' />
    
    <img  className='w-7 h-7 rounded-full mt-1 md:mt-2  ' src='\img27.jpg' alt='profile picture'></img>
    </div>
 </div>
 <hr className='bg-gray-400 mt-2 '></hr>
 </div>
);
}
export default Topnav;