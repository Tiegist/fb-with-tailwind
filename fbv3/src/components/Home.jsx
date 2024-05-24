
import react from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { MdNavigateNext } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
// import { FiPlus } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
// import { CiHeart } from "react-icons/ci";
// import { FaRegComment } from "react-icons/fa6";
//import { RiShareForwardLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { IoIosImages } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './cards'
function Home(){
        
  var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
return(
        <div className='firstpagecontainer'>
   
        <div className=''>
<div className='hidden sm:block  '>
<div className='ml-4 md:text-2sm md:w-64 '>

<div className='flex mb-1'>
<img  className='w-10 h-10  -ml-2 m-2 rounded-full' src='\img25.jpg' alt='profile picture'></img>
<div className='mt-4'><p>Tiegist Girma</p></div>
</div>
<div className='flex mb-3'><a href='google.com'>
<FaUserFriends  className='mr-4 text-cyan-400'/></a>
<div className='-mt-1'><p>friends</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<FaPersonBreastfeeding className='mr-4 mt-1 text-cyan-500'/></a>
<div className='feedsnote'><p>feeds</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<MdGroups className='mr-4 text-xl mt-2 text-gray-500'/></a>
<div className='groupsnote'><p>groups</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<CiShop className='mr-4 mt-1 text-xl text-green-900'/></a>
<div className='marketplacenote'><p>marketplace</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<FaYoutube className='mr-4 mt-1 text-green-700'/></a>
<div className='vediodenote'><p>vedio</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<RiMemoriesLine className='mr-4 mt-1 text-green-700'/></a>
<div className='memoriesnote'><p>memories</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<CiBookmark className='mt-1 mr-4 text-yellow-600'/></a>
<div className='savednote'><p>saved</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<FaFlag className='mt-2 mr-4 text-red-500'/></a>
<div className='pagesnote'><p>pages</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<FaCalendarCheck className='mt-1 mr-4 text-red-700'/></a>
<div className='eventsnote'><p>events</p></div>
</div>

<div className='flex mb-3'><a href='google.com'>
<ImStatsBars className='mt-1 mr-4 text-orange-800'/></a>
<div className='adsnote'><p>ads manager</p></div>
</div>

<div className='flex'><a href='google.com'>
<MdNavigateNext className='mt-2 mr-4'/></a>
<div className='seemorenote'><p>seemore</p></div>
</div>

</div>

</div>
<div className='md:-mt-80  md:ml-64  md:overflow-scroll md:h-1/5'>
        <div className='w-8 h-8 bg-blue-800 relative rounded-full ml-10 t-20 hidden sm:block'>
        <a className='text-white relative text-3xl ml-1.5 -mt-1.5 hidden sm:block'>+</a>
        </div>
        
        <div className='m-auto mb-8 mt-20 md:-ml-1  md:w-2/3 md:-mt-32'>
        <Slider {...settings}>
                {data.map((d) =>(
                        <div className='h-4 text-black rounded-xl '>
                        <div className='h-32 md:ml-2 flex justify-center items-center rounded-t-xl'>
                                <img src={d.img} className='h-8 w-8 rounded-full -mt-20 -ml-12 absolute'/>
                        </div>
                      <div className='flex flex-col items-center justify-center  p-1'>
                                <img src ={d.img2} className=' rounded-lg h-48 md:h-56 md:mb-8 md:ml-10 md:w-40 -mt-32 bg-gray-300'/>
                                <p className='text-sm absolute  w-20 text-white'>{d.text}</p>
                        </div>
                        </div>
                ))}
                
                </Slider>
        
        </div>
        
        <div className='p-1 mt-6 md:mt-80'>
                <div className='-mt-72 flex'>
                <img className='w-10 h-10 rounded-full ml-1' src='\img13.jpg' alt='profile'></img>
       <input type='text' placeholder='whats on your mind, Tiegist?' className='border border-gray-200 rounded-3xl w-64 ml-3 md:pl-4 focus:outline-none md:placeholder:sm ' ></input>
                <IoIosImages  className='text-green-600 text-2xl ml-5 mt-2 md:hidden'/>
                </div>
             <hr className='mb-2 mt-2 w-80'></hr>
       <div className='hidden sm:block md:flex'>
       <div className='flex mr-2'><a href='www.google.com'>
        <RiLiveLine className='text-1xl mr-2 ml-2 md:text-red-700'/></a>
       <p className='text-sm -mt-0.5'>live vedio</p>
       </div>

       <div className='mr-2'><a href='www.google.com'>
        <IoMdPhotos  className='text-green-700 '/></a>
       <p className='text-sm -mt-5 ml-5'>photo/vedio</p>
       </div>

       <div className='emojiicon'><a href='www.google.com'>
        <MdOutlineEmojiEmotions className='text-yellow-400'/></a>
       <p className='text-sm ml-5 -mt-5'>feelng/activity</p>
       </div>

       </div>
       
        </div>
        <div className='mb-8 pb-4 pt-4 md:-mt-40 '>
                <div className='sm:w-fit h-80 md:h-6/7 shadow-lg rounded-4xl  '>
                <div className='absolute'>
                <img className=' h-64 sm:w-fit mt-24 ' src='\mountain-with-sea.avif'></img>
                </div>
        
                <div className='relative  ml-14  text-2sm font-bold font-sans'>
                <h5 className='text-base'>Marher Kirubel</h5>
                <div className='w-1 h-1 ml-32 -mt-4 rounded-full bg-black'></div>
                <p className='ml-36 -mt-3 text-sm text-blue-700'>follow</p>
                <p className='text-gray-700 md:text-sm'>yesterday at 1:25 PM.</p>
                <BiWorld  className='ml-44 -mt-5 text-lg text-gray-800'/>
                <p className='-ml-12 text-xl font-arial font-semibold mt-2 md:text-base md:pl-4'>mountain view for your...<a className=' -mt-8 text-sm text-gray-700 ' href='@'>See more</a></p>
                
                </div>

                <div className='relative  ml-96 text-2xl flex -mt-24 '>
                        <a href='www.goole.com'><BsThreeDots className=' mt-2 mr-4 text-gray-700  text-lg' /></a>
                        <button className='ml-6 text-2xl font-mono text-gray-800'>x</button>
                </div>
                </div>
                
                {/* <h4>Back for more!</h4> */}
                
               
                <img className='w-10 h-10 rounded-full -mt-80 ml-2' src='\img27.jpg'></img>
                <div className="mt-80 ">
                        <div className='flex text-sm'>
                        <BiLike className='ml-2 mt-2 text-white mr-1 bg-blue-700 rounded-full'/>
                      <p className='mr-12 mt-1'>24k</p>
                      <p className='mr-4 mt-1'>2.2k comments</p>
                      <p className='mr-4 mt-1'>2.5k shares</p>
                      <p className='mt-1'>86.3M plays</p>
                        
                        </div>
                        
                        <div className='flex mt-4 text-base mb-2'>
                        <div className="flex mr-10">
                        <BiLike className='mr-2 ml-4 text-xl mt-1 text-blue-700'/>
                        <p >Like</p>
                    </div>
                    <div className="flex mr-10">
                        <PiShareFat className='text-xl mt-1 mr-1 text-green-700'/>
                        <p>share</p>
                    </div>
                    <div className="flex">
                        <FaRegComment className='mt-1 mr-1 text-gray-700'/>
                        <p>comment</p>
                    </div>
                        </div>
                
                </div>
                
        </div>
{/* 2nd comment */}
        <div className='mb-8 pb-4 pt-4'>
                <div className='w-fit h-80 md:h-6/7 shadow-lg rounded-4xl  '>
                <div className='absolute'>
                <img className=' h-64 w-fit mt-24 ' src='/black-frame.avif'></img>
                </div>
        
                <div className='relative  ml-14  text-2sm font-bold font-sans'>
                <h5 className='text-base'>Girma Hassen</h5>
                <div className='w-1 h-1 ml-32 -mt-4 rounded-full bg-black'></div>
                <p className='ml-36 -mt-3 text-blue-700 text-sm'>follow</p>
                <p className='text-gray-700 md:text-sm'>Recomended</p>
                <BiWorld  className='ml-28 -mt-5 text-lg text-gray-800'/>
                <p className='-ml-12 text-xl font-arial font-semibold mt-2 md:text-base'>you want to build...<a className=' -mt-8 md:text-sm text-gray-700 ' href='@'>See more</a></p>
                
                </div>

                <div className='relative  ml-96 text-2xl flex -mt-24 '>
                        <a href='www.goole.com'><BsThreeDots className=' mt-2 mr-4 text-gray-700  text-lg' /></a>
                        <button className='ml-6 text-2xl font-mono text-gray-800'>x</button>
                </div>
                </div>
                
                {/* <h4>Back for more!</h4> */}
                
               
                <img className='w-10 h-10 rounded-full -mt-80 ml-2' src='\bridge-with-leaves.jpeg'></img>
              <div className="mt-80 ">
                        <div className='flex text-sm'>
                        <BiLike className='ml-2 mt-2 text-white mr-1 bg-blue-700 rounded-full'/>
                      <p className='mr-12 mt-1'>24k</p>
                      <p className='mr-4 mt-1'>2.2k comments</p>
                      <p className='mr-4 mt-1'>2.5k shares</p>
                      <p className='mt-1'>86.3M plays</p>
                        
                        </div>
                       
                        <div className='flex mt-4 text-base mb-2'>
                        <div className="flex mr-10">
                        <BiLike className='mr-2 ml-4 text-xl mt-1 text-blue-700'/>
                        <p >Like</p>
                    </div>
                    <div className="flex mr-10">
                        <PiShareFat className='text-xl mt-1 mr-1 text-green-700'/>
                        <p>share</p>
                    </div>
                    <div className="flex">
                        <FaRegComment className='mt-1 mr-1 text-gray-700'/>
                        <p>comment</p>
                    </div>
                        </div>
                
                </div>
        </div>

        <div className='mb-8 pb-4 pt-4 '>
                <div className='w-fit h-80 md:h-7/8 shadow-lg rounded-4xl  '>
                <div className='absolute'>
                <img className=' h-64 w-fit mt-24 ' src='\tree-alone.avif'></img>
                </div>
        
                <div className='relative  ml-14  text-2sm font-bold font-sans'>
                <h5 className='md:text-md'>Birhane Ayalew</h5>
                <div className='w-1 h-1 ml-32 -mt-4 rounded-full bg-black'></div>
                <p className='ml-36 md:text-sm -mt-3 text-blue-700'>follow</p>
                <p className='text-gray-700 md:text-sm'>1:25 PM</p>
                
                <p className='-ml-12 text-xl font-arial font-semibold mt-2 md:text-base '>the breath of the sea...<a className=' -mt-8 md:text-sm text-gray-700 ' href='@'>See more</a></p>
                
                </div>

                <div className='relative  ml-96 text-2xl flex -mt-24 '>
                        <a href='www.goole.com'><BsThreeDots className=' mt-2 mr-4 text-gray-700  text-lg' /></a>
                        <button className='ml-6 text-2xl font-mono text-gray-800'>x</button>
                </div>
                </div>
                
                {/* <h4>Back for more!</h4> */}
                
               
                <img className='w-10 h-10 rounded-full -mt-80 ml-2' src='\zoomed-leaves.avif'></img>
                <div className="mt-80 ">
                        <div className='flex text-sm'>
                        <BiLike className='ml-2 mt-2 text-white mr-1 bg-blue-700 rounded-full'/>
                      <p className='mr-12 mt-1'>24k</p>
                      <p className='mr-4 mt-1'>2.2k comments</p>
                      <p className='mr-4 mt-1'>2.5k shares</p>
                      <p className='mt-1'>86.3M plays</p>
                        
                        </div>
                        
                        <div className='flex mt-4 text-base mb-2'>
                        <div className="flex mr-10">
                        <BiLike className='mr-2 ml-4 text-xl mt-1 text-blue-700'/>
                        <p >Like</p>
                    </div>
                    <div className="flex mr-10">
                        <PiShareFat className='text-xl mt-1 mr-1 text-green-700'/>
                        <p>share</p>
                    </div>
                    <div className="flex">
                        <FaRegComment className='mt-1 mr-1 text-gray-700'/>
                        <p>comment</p>
                    </div>
                        </div>
                
                </div>
                
        </div>

        <div className='mb-8 pb-4 pt-4 '>
                <div className='w-fit h-80 md:h-7/8 shadow-lg rounded-4xl  '>
                <div className='absolute'>
                <img className=' h-64 md:h-80 w-fit mt-24 ' src='\walk-space-countryside2.avif'></img>
                </div>
        
                <div className='relative  ml-14  text-2sm font-bold font-sans'>
                <h5 className='md:text-base'>Beaman Beza</h5>
                <div className='w-1 h-1 ml-32 -mt-4 rounded-full bg-black'></div>
                <p className='ml-36 -mt-3 text-blue-700 md:text-sm'>follow</p>
                <p className='text-gray-700 md:text-sm'>yesterday at 7:25 PM.</p>
                <BiWorld  className='ml-44 -mt-5 text-lg text-gray-800'/>
                <p className='-ml-12 text-xl font-arial font-semibold mt-2 md:text-base'>walking in the fresh air</p>
                
                </div>

                <div className='relative  ml-96 text-2xl flex -mt-24 '>
                        <a href='www.goole.com'><BsThreeDots className=' mt-2 mr-4 text-gray-700  text-lg' /></a>
                        <button className='ml-6 text-2xl font-mono text-gray-800'>x</button>
                </div>
                </div>
               
                <img className='w-10 h-10 rounded-full -mt-80 ml-2' src='\img27.jpg'></img>
                <div className="mt-80 ">
                        <div className='flex text-sm'>
                        <BiLike className='ml-2 mt-2 text-white mr-1 bg-blue-700 rounded-full'/>
                      <p className='mr-12 mt-1'>24k</p>
                      <p className='mr-4 mt-1'>2.2k comments</p>
                      <p className='mr-4 mt-1'>2.5k shares</p>
                      <p className='mt-1'>86.3M plays</p>
                        
                        </div>
                        
                        <div className='flex mt-4 text-base mb-2'>
                        <div className="flex mr-10">
                        <BiLike className='mr-2 ml-4 text-xl mt-1 text-blue-700'/>
                        <p >Like</p>
                    </div>
                    <div className="flex mr-10">
                        <PiShareFat className='text-xl mt-1 mr-1 text-green-700'/>
                        <p>share</p>
                    </div>
                    <div className="flex">
                        <FaRegComment className='mt-1 mr-1 text-gray-700'/>
                        <p>comment</p>
                    </div>
                        </div>
                
                </div>
                
        </div>
        
        
   
</div>

<div className=' hidden sm:block'>
        
        <div className='md:ml-80'>
              <div className='topping'>
                <div className='contacts'><p>contacts</p></div>
                <div className='searchiconn'><a href='www.google.com'><BsThreeDots className='threedot'/></a>
                <a href='www.google.com'><CiSearch className='searchtool'/></a>
                </div>
              </div>
              <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\img20.jpg'></img>
                <div className='w-2 h-2 rounded-full bg-green-700 ml-6 -mt-2 absolute'></div>
                </div>
                <div className='text-sm ml-2 mt-1'><p>Hibst mengstie</p></div>
              </div>

              <div className='flex mb-2'>
                <div className='ali'><img className='w-8 h-8 rounded-full ' src='\img21.jpg'></img>
                <div className='w-2 h-2 rounded-full bg-green-700 ml-6 -mt-2 absolute'></div>
                </div>
                <div className='text-sm ml-2 mt-1'><p>jon atal</p></div>
              </div>

              <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\img20.jpg'></img>
                <div className='w-2 h-2 rounded-full bg-green-700 ml-6 -mt-2 absolute'>
               
                </div>
                
              </div>
              <div className='text-sm ml-2 mt-1 '><p>na hom bi</p></div>
            </div>

            <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\bridge-by-the-sea.jpeg'></img></div>
                <div className='text-sm ml-2 mt-1'><p>gach lalboy</p></div>
              </div>

              <div className='flex mb-2'>
                <div className='ali'><img className='w-8 h-8 rounded-full ' src='\black-frame.avif'></img>
                </div>
                <div className='text-sm ml-2 mt-1'><p>estifanos mesganaw</p></div>
              </div>

              <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\cutebackground.jpg'></img>
                <div className='w-2 h-2 rounded-full bg-green-700 ml-6 -mt-2 absolute'>
                </div>
                
              </div>
              <div className='text-sm ml-2 mt-1'><p>dani boy</p></div>
             </div>

             <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\walk-space-countryside.avif'></img>
                </div>
               
                <div className='text-sm ml-2 mt-1'><p>hop hop</p></div>
              </div>

              
              <div className='flex mb-2'>
                <div className='ali'><img className='w-8 h-8 rounded-full ' src='\waterfall.avif'></img>
               
                </div>
                <div className='text-sm ml-2 mt-1'><p>skat natty</p></div>
              </div>

              
              <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\bridge-by-the-sea.jpeg'></img>
              </div>
              <div className='text-sm ml-2 mt-1'><p>abuki z kop</p></div>
               </div>

               <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\img20.jpg'></img>
               
                </div>
                <div className='text-sm ml-2 mt-1'><p>um hkm jr</p></div>
              </div>

              <div className='flex mb-2'>
                <div className='ali'><img className='w-8 h-8 rounded-full ' src='\tree-alone.avif'></img>
                
                </div>
                <div className='text-sm ml-2 mt-1'><p>temu lela</p></div>
              </div>

              
              <div className='flex mb-2'>
                <div className='kidu'><img className='w-8 h-8 rounded-full ' src='\tree-alone.avif'></img>
                <div className='abuki'>
                
                </div>
              
              </div>
              <div className='text-sm ml-2 mt-1'><p>messi alemye </p></div>
              </div>

</div>

</div>

</div>
        <div className='hidden sm:block'>
        <p>privacy .Terms . Advertising . Ad Choices .Cookies .More .Meta &copy; 2024</p>
</div>
        
</div>
);
}
export default Home;