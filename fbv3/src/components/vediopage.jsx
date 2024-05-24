
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoHome } from "react-icons/io5"
import { FaVideo } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiSolidSlideshow } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { BsFillSave2Fill } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";

function Vediopage(){
return(
   

 <div className=" md:flex mb-10">
    <div className='leftnav md:max-w-80  md:mt-3 lg:ml-5'>
    <div className="flex">
             <h3 className='text-2xl font-semibold ml-1 md:mr-80 md:mb-4 '>Vedio</h3>
             <div className="flex md:mt-2 md:ml-16">
            <IoPersonSharp className=' ml-44  mr-8 md:ml-20 mt-3'/>
            <div className='md:rounded-xl flex md:-mt-1'>
            <CiSearch  className="font-semibold mt-3 -ml-2 md:mt-4 md:-ml-2 "/>
             <input type="text" placeholder="search vedios" className="hidden sm:block focus:outline-none"></input>
            </div>
           
             </div>
           
            </div>

             <div className="hidden sm:block ">
            <div className="flex text-gray-500 ml-2 mb-2">
                <IoHome  className="text-xl  mr-2"/>
                <p className="text-md">Home</p>
                </div>
                <div className="flex text-gray-500 ml-2 mb-2">
                <FaVideo  className="text-xl mr-2"/>
                <p className="text-md">Live</p>
                </div>
                <div className="flex text-gray-500 ml-2 mb-2">
                <TfiVideoClapper  className="text-xl mr-2"/>
                <p className="text-md">Reels</p>
                </div>
                <div className="flex text-gray-500 ml-2 mb-2">
                <BiSolidSlideshow  className="text-xl mr-2"/>
                <p className="text-md">Shows</p>
                </div>
                <div className="flex text-gray-500 ml-2 mb-2">
                <MdExplore  className="text-xl mr-2"/>
                <p className="text-md">Explore</p>
                </div>
                <div className="flex text-gray-500 ml-2 mb-6">
                <BsFillSave2Fill  className="text-xl mr-2"/>
                <p className="text-md">Saved vedios</p>
                </div>
              
                

            </div>
    </div>
           
            <div className='rightvedios w-fit md:mt-10 md:-ml-16 md:w-fit md:pr-2 lg:-ml-20 lg:mt-8'>
            <div className='flex ml-2'>
                <button className='mr-5 bg-blue-50 mb-3 border-collapse rounded-xl text-sm text-blue-800 w-16 font-semibold'>for you</button>
                <button className='mb-3'>Live</button>
            </div>
<hr className='w-96 mb-2'></hr>
<div className='flex'>
    <div className='mt-5 ml-2'><FaEyeSlash /></div>
    <div>
    <h3 className='text-md font-semibold ml-2'>post hidden</h3>
    <p className='text-sm text-gray-600 ml-2 w-50'>you'll see less from this page in vedio. </p>
    </div>
   <div>
    <button className=' mt-1 ml-1 bg-gray-200 w-12 mt-2rounded-sm md:ml-10 md:mt-3'>Undo</button>
   </div>
   
</div>
<hr className='w-64 md:w-96 md:-ml-0 ml-5'></hr>
            <div className="rightpartvediocontaiener">
            <div className="firstvedio">
                <div className="vedioprofilecontainer">
                   
                    <div className="rightvediopp">
                        
                        <div className="flex">
                        <img className="w-8 h-8 rounded-full m-2 " src="\waterfall.avif"></img>
                        <p className='text-sm mt-3 font-semibold mr-5 '>Ema clark</p>
                        <div className='w-1 h-1 bg-black rounded-full mt-6 mr-2'></div>
                        <button className="text-sm text-blue-800 font-semibold">Follow</button>
                        </div>
                        <div className="rightvedioppbottom">
                            <p className='ml-12 text-sm -mt-5'>4 march 2022</p>
                        </div>
                       
                    </div>
                    
                </div>
                <h2 className='mb-2 ml-2'>where do you want to go in the world?</h2>
                <video controls='autoplay' className='' src='\Nature_WhatsApp_Status_Video_30_Seconds__Nature_Love_Song_Background_2022_4k(18).mp4'></video>
                <div className='flex text-gray-800'>
                    <AiFillLike className='text-blue-800 mt-1 ml-2'/>
                <FcLike className='mt-1 '/>
                <p className='mr-16 text-sm mt-1'>9.2k</p>
                    <p className='text-sm  mr-5'> 7k comments </p>
                    <p className='text-sm m'>56M views</p>
                </div>
                
                
                <div className="flex mb-2 text-gray-500">
                    <div className="flex mr-2 mt-1">
                        <BiLike className=' ml-3 mt-3'/>
                        <p className='text-sm ml-2 mt-3 '>Like</p>
                    </div>
                    <div className="flex mt-4">
                        <PiShareFat className='ml-4 mt-1'/>
                        <p className='text-sm ml-1'>share</p>
                    </div>
                    <div className="flex mt-4">
                        <FaRegComment className='ml-4 mt-1'/>
                        <p className='text-sm ml-1'>comment</p>
                    </div>
                   
                </div>
               
                <hr className='shadow-xl'></hr>
            </div>
<br></br>


<div className="secondvedio">
                <div className="vedioprofilecontainer">
                   
                    <div className="rightvediopp">
                        
                        <div className="flex">
                        <img className="w-8 h-8 rounded-full m-2 " src="\mountain-with-sea.avif"></img>
                        <p className='text-sm mt-3 font-semibold mr-5'>beami bez</p>
                        <div className='w-1 h-1 bg-black rounded-full mt-6 mr-2'></div>
                        <button className="text-sm text-blue-800 font-semibold">Follow</button>
                        </div>
                        <div className="rightvedioppbottom">
                            <p className='ml-12 text-sm -mt-5'>2 April 2024 </p>
                        </div>
                       
                    </div>
                    
                </div>
                <h2 className='mb-2 ml-2'>the beauty of nature </h2>
                <video controls='autoplay' className='' src='\Nature_WhatsApp_Status_Video_30_Seconds__Nature_Love_Song_Background_2022_4k(18).mp4'></video>
                <div className='flex text-gray-800'>
                    <AiFillLike className='text-blue-800 mt-1 ml-2'/>
                <FcLike className='mt-1 '/>
                <p className='mr-16 text-sm mt-1'>4k</p>
                    <p className='text-sm  mr-5'> 6.9k comments </p>
                    <p className='text-sm m'>9M views</p>
                </div>
                
                <div className="flex mb-2 text-gray-500">
                    <div className="flex mr-2 mt-1">
                        <BiLike className=' ml-3 mt-3'/>
                        <p className='text-sm ml-2 mt-3 '>Like</p>
                    </div>
                    <div className="flex mt-4">
                        <PiShareFat className='ml-4 mt-1'/>
                        <p className='text-sm ml-1'>share</p>
                    </div>
                    <div className="flex mt-4">
                        <FaRegComment className='ml-4 mt-1'/>
                        <p className='text-sm ml-1'>comment</p>
                    </div>
                   
                </div>
               
                <hr className='shadow-xl'></hr>
            </div>

           
           
<div className="thirdvedio">
                <div className="vedioprofilecontainer">
                   
                    <div className="rightvediopp">
                        
                        <div className="flex">
                        <img className="w-8 h-8 rounded-full m-2 " src="\walk-space-countryside.avif"></img>
                        <p className='text-sm mt-3 font-semibold mr-5 '>maru kiru</p>
                        <div className='w-1 h-1 bg-black rounded-full mt-6 mr-2'></div>
                        <button className="text-sm text-blue-800 font-semibold">Follow</button>
                        </div>
                        <div className="rightvedioppbottom">
                            <p className='ml-12 text-sm -mt-5'>4 march 2023 .</p>
                        </div>
                       
                    </div>
                    
                </div>
                <h2 className='mb-2 ml-2'>enjoy the sun</h2>
                <video controls='autoplay' className='' src='\vedio.mp4'></video>
                <div className='flex text-gray-800'>
                    <AiFillLike className='text-blue-800 mt-1 ml-2'/>
                <FcLike className='mt-1 '/>
                <p className='mr-16 text-sm mt-1'>63k</p>
                    <p className='text-sm  mr-5'> 4k comments </p>
                    <p className='text-sm m'>8.1M views</p>
                </div>
                
                <div className="flex mb-2 text-gray-500">
                    <div className="flex mr-2 mt-1">
                        <BiLike className=' ml-3 mt-3'/>
                        <p className='text-sm ml-2 mt-3 '>Like</p>
                    </div>
                    <div className="flex mt-4">
                        <PiShareFat className='ml-4 mt-1'/>
                        <p className='text-sm ml-1'>share</p>
                    </div>
                    <div className="flex mt-4">
                        <FaRegComment className='ml-4 mt-1'/>
                        <p className='text-sm ml-1'>comment</p>
                    </div>
                   
                </div>
               
                <hr className='shadow-xl'></hr>
            </div>
                </div>
            </div>
     
            </div>
        
        
  
    
   
);
}
export default Vediopage;