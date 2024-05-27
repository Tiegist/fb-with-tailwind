import react from 'react'
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiBrowsersFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { BsInboxFill } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";
import { MdSell } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { TbHomeDollar } from  "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { GiSleevelessJacket } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";



function Grouppage(){
return(
    <div>
  
    <div className='w-96'>
<div className='page2leftcontainer'>
    <div className='flex'>
        <div className='text-2xl mr-32 ml-2'><h3>Marketlace</h3></div>
        <div className='text-xl mt-2 hidden sm:block'><IoIosSettings className='settingsubicon'/></div>
    </div>
    <div className='mb-6 ml-6'>
        <CiSearch className='ml-80 text-xl -mt-6'/>
        <input className='hidden sm:block md:block' type='text' placeholder='search Marketplace'></input>
    </div>
    <div className='hidden sm:block md:block'>
    <div className='browseallclass'>
        <PiBrowsersFill className='browseallicon'/>
        <input className='browseinput' type='text' placeholder='Browse all Marketplace'></input>
    </div>
    
    <div className='notificationclass'>
    <IoMdNotifications className='notifyyicon'/>
    <p>Notifications</p>
    </div>
    
    <div className='inboxclass'>
    <BsInboxFill className='inboxicon'/>
    <p>Inbox</p>
    </div>
    
    <div className='buyingclass'>
    <SiBuymeacoffee className='buingicon'/>
    <p>Buying</p>
    <MdNavigateNext className='nexticonnn'/>
    </div>
    
    <div className='sellingclass'>
    <MdSell className='sellignicon'/>
    <p>selling</p>
    <MdNavigateNext className='nexticonn'/>
    </div>
    <div className='createclass'>
    <button className='createbtn'>+ create new listing</button>
    </div>
    <hr></hr>
    

    </div>
    <div className='flex mb-3 '>
        <div className='ml-2 bg-gray-200 text-sm p-2 rounded-full mr-2'><IoPersonSharp  /></div>
        
        <button className='ml-2 text-sm bg-gray-200 p-1 w-14 rounded-2xl font-semibold mr-2'>Inbox</button>
        <button className='ml-2 text-sm bg-gray-200 p-1 w-12 rounded-2xl font-semibold mr-2'>Sell</button>
        <button className='ml-2 text-sm bg-gray-200 p-1 w-18 rounded-2xl font-semibold mr-2'>Categories</button>
        <button className='ml-2 text-sm bg-gray-200 p-1 w-16 rounded-2xl font-semibold mr-2'>Search</button>
    </div>
           
    <hr></hr>
    <div className='flex mt-3 mb-3'>
    <div className='mr-12 ml-2 font-semibold text-md'><h4 >today's picks</h4></div>
    <div className='flex'>
        <IoLocation  className='text-blue-800 mr-2'/>
        <p className='text-blue-800 text-md font-semibold'>Kombolcha . 65 Kilometers</p></div>
    </div>
    <hr></hr>
    <div className='hidden sm:block'>
        <h4 className='catagories'>categories</h4>
        <div className='vehicleclass'>
        <FaCar className='vehiclesicon'/>
    <p>vehicles</p>
        </div>
    
        <div className='properyrentclass'>
        <TbHomeDollar className='propertyicon'/>
    <p>property rentals</p>
        </div>
    
        <div className='apparelclass'>
        <GiSleevelessJacket className='apparelicon'/>
    <p>apparel</p>
        </div>
    </div>
    
    </div>

    <div className='hidden sm:block'>
        <div className='thefirstcard'>
            <div className='newforyou'>
            <p>New For You</p>
            </div>
            <div className='therestofcard'>
            <div className='firstclass'>
            <div className='cardfirstpart'><img className='imgone' src='\bridge-by-the-sea.jpeg'></img></div>
            <div className='smalldiscription'><p>10+ items were just added to you buy and sell groups.</p>
            <div className='buttons'>
            <div className='litleblue'></div>
            <div className='wdiv'> <p className='w'>6w</p></div>
           
            </div>
            </div>
           
            </div>

            <div className='secondclass'>
            <div className='cardsecondpart'><img className='imgtwo' src='\waterfall.avif'></img></div>
            <div className='smalldiscription'><p>40+ items were just added to you buy and sell groups.</p>
            <div className='buttons'>
            <div className='litleblue'></div>
            <div className='wdiv'> <p className='w'>1w</p></div>
            </div>
            </div>
           
            </div>
            </div>
            
            
        </div>
        <div className='thesecondcard'>
                <div className='todayspicks'><p>Today's picks</p></div>
                <div className='location'>
                    <IoLocationSharp className='locatonicon'/>
                    <p>kalu . 65 km</p>
                </div>
            </div>
            <div className='hidden sm:block'>
                <div className='card1'>
                    <img className='firstcardimg' src='\walk-space-countryside2.avif'></img>
                    <h5>Br3,500</h5>
                    <p className='p11'>disaar hair growth hidden informaion</p>
                    <p className='p12'>dessie</p>
                </div>

                <div className='card2'>
                    <img className='secondcardimg' src='\waterfall.avif'></img>
                    <h5>Br2,800</h5>
                    <p className='p21'>romantic</p>
                    <p className='p22'>dessie</p>
                </div>

                <div className='card3'>
                    <img className='thirdcardimg' src='\bridge-with-leaves.jpeg'></img>
                    <h5>Br10</h5>
                    <input type='checkbox' checked className='firstcheck' name='firstcheck' ></input>
                    <label for='firstcheck' className='firstcheck'>bale 1 megnita 75 kare</label>
                    <input type='checkbox' checked className='secondcheck' name='secondcheck'></input>
                    <label for='secondcheck' className='secondcheck'>bale 2 megnita 85 kare</label>
                   
                    <p className='p32'>dessie</p>
                </div>

                <div className='card4'>
                    <img className='fourthcardimg' src='\mountain-with-sea.avif'></img>
                    <h5>Br3,500</h5>
                    <p className='p41'>ye kimem maskemecha</p>
                    <p className='p42'>dessie</p>
                </div>
            </div>
    </div>
    <div className=''>
        <p className='Habesha kemis'></p>
    </div>
   <div className='flex mt-4'>
    <div className='ml-1 mr-1 rounded-sm md:w-1/2 w-1/2'>
        <img className='' src='\amarech-ethiopian-traditional.webp'></img>
        < a href='www.google.com' className=''>Amarech Ethiopian</ a>
        < a a href='www.google.com' className=''>20000 Birr</ a>
    </div>
    <div className='mr-1 w-1/2'>
        <img src='\raya-dress.webp'></img>
        < a a href='www.google.com'>Ethiopian Raya</ a>
        < a a href='www.google.com'>11000</ a>
    </div>
   </div>


   <div className='flex'>
    <div className='wl-1 mr-1 w-1/2'>
        <img src='\danayt3_1600x.webp'></img>
        < a a href='www.google.com' className=''>Holiday Habesha</ a>
        < a a href='www.google.com' className=''>17600 Birr</ a>
    </div>
    <div className='mr-1 w-1/2'>
        <img src='\Burgendy-Crowning-Kaba.jpg'></img>
        < a a href='www.google.com'>Burgendy-crowning-kaba</ a>
        < a a href='www.google.com'>21000</ a>
    </div>
   </div>


   <div className='flex'>
    <div className='mr-1 ml-1 w-1/2'>
        <img src='\raya-dress.webp'></img>
        < a a href='www.google.com' className=''>Rayan dress</ a>
        < a a href='www.google.com' className=''>8900 Birr</ a>
    </div>
    <div className='mr-1 w-1/2'>
        <img src='\Royal-Habesha-Kemis-3.jpg'></img>
        < a a href='www.google.com'>Royal Habesha kemis</ a>
        < a a href='www.google.com'>19200</ a>
    </div>
   </div>

   <div className='flex'>
    <div className='mr-1 ml-1 w-1/2'>
        <img src='\dress-with- baloon.webp'></img>
        < a a href='www.google.com' className=''>modern Ethiopian</ a>
        < a a href='www.google.com' className=''>17300 Birr</ a>
    </div>
    <div className='mr-1 ml-1 w-1/2'>
        <img src='\fnan-habesha-kemis.webp'></img>
        < a a href='www.google.com'>Casual Ethiopian</ a>
        < a a href='www.google.com'>15200</ a>
    </div>
   </div>
  
    </div>
    
    
    </div>
   

)
}
export default Grouppage;