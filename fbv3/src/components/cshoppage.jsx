import react from 'react'
import { FaFacebook } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { PiBrowsersFill } from "react-icons/pi";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { MdOutlineWallpaper } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";



function Cshoppage(){
  return (
       <div className='thethirdpage'>

    <div className='body'>
        <div className='lefttnavv'>
            <div className='groupss'>
                <div className='group'><p>Groups</p></div>
                <div className='settingicon'><IoIosSettings className='settingiconsub'/></div>
            </div>

            <div className='serchiconnclass'>
        <CiSearch className='iconofsearch'/>
        <input className='inputbox' type='text' placeholder='search Marketplace'></input>
    </div>
    
    <div className='browseallclass'>
        <PiBrowsersFill className='browseallicon'/>
        <input className='browseinput' type='text' placeholder='your feed'></input>
    </div>
      <div className='discover'>
        <RiCompassDiscoverFill className='dicoversub'/>
        <p>Discover</p>
      </div>

      <div className='yourgrops'>
        <MdGroups className='groupsub'/>
        <p>Your groups</p>
      </div>
      <div className='createclass'>
    <button className='createbtnn'>+ create new listing</button>
    </div>
    <hr className='horizontal'></hr>
   <div className='seeingall'>
   <p>Groups you've joined</p>
    <button className='see-all-btn'>see all</button>
   </div>
   <div className='firstgroup'>
    <div className='imgonee'>
        <div className='firstgroupleft'>
        <img className='groupimgone' src='\img26.jpg'></img>
        </div>
        <div className='firstgroupright'>
            <div className='p1-part'>
            <p>Ethio black market</p>  
            </div>
            <div className='quesonmarkicons'>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
            </div>
            <div className='p2-part'>
                <p>Last active a few seconds ago</p>
            </div>
        </div>
        
    </div>
   </div>
   <hr className='horizontal'></hr>
   <div className='secondgroup'>
    <div className='imgonee'>
        <div className='secondgroupleft'>
        <img className='groupimgone' src='\img25.jpg'></img>
        </div>
        <div className='secondgroupright'>
            
           
            <div className='wallpapers'>
                 
            <p>3D WALLPAPERS</p> 
                <MdOutlineWallpaper className='wallpapericon'/>
            </div>
            <div className='p2-part'>
                <p>Last active 12 minutes ago</p>
            </div>
        </div>
        
    </div>
   </div>

   <hr className='horizontal'></hr>
   <div className='thirdgroup'>
    <div className='imgonee'>
        <div className='thirdgroupleft'>
        <img className='groupimgone' src='\img24.jpg'></img>
        </div>
        <div className='thirdgroupright'>
            <div className='wallpapers'>
            <p>Gym bodybuilders fitness</p> 
            </div>
            <div className='p2-part'>
                <p>Last active weeks ago</p>
            </div>
        </div>
        
    </div>
   </div>
   <hr className='horizontal'></hr>
   <div className='fourthgrouppp'>
    <div className='imgonee'>
        <div className='fourthgroupleft'>
        <img className='groupimgfourth' src='\img23.jpg'></img>
        </div>
        <div className='fourthgroupright'>
            <div className='wallpapers'>
            <p>post of the day</p> 
            </div>
            <div className='p2-part'>
                <p>Last active weeks ago</p>
            </div>
        </div>
        
    </div>
   </div>

   <hr className='horizontal'></hr>
   <div className='fifthgroup'>
    <div className='imgonee'>
        <div className='fifthgroupleft'>
        <img className='groupimgfifthh' src='\img22.jpg'></img>
        </div>
        <div className='fifthgroupright'>
            <div className='wallpapers'>
            <p>feta meme</p> 
            </div>
            <div className='p2-part'>
                <p>Last active 35 minutes ago</p>
            </div>
        </div>
        
    </div>
   </div>


        </div>
       
        <div className='rightpartofbody'>
        <div className='toptitle'><p>Recent activity</p></div>
        <div className='thebigestcard'>
        <div className="usercardcontainer">
        <div className='usercard'>
                <div  className='userprofile'>
                <img className='userimgs' src="\img20.jpg"></img>
                </div>
               <div className='ethioblack'>
                <h5>Ethio Black Market
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                <BsQuestionDiamondFill className='questionmarks'/>
                </h5>
                <p>Desalegn Tesema . 18 . <FaGlobeAmericas className='wordicon'/></p>
               </div>
               <div className='threedots'><BsThreeDots/></div>
            </div>
            <div className='links'>
                <p>Dereja 1 chamawech balubet ke 2000 jemro lemaggnet chanalachinn ykelakelu::</p>
                <a href='https://t.me/destes123'>https://t.me/destes123</a><br></br>
                <a href='https://t.me/destes123'>https://t.me/destes123</a>
            </div>
        </div>
           
            <div className='picturesoflast'>
                <div className='firstgroupofimg'>
                    <img className='picone' src='\waterfall.avif'></img>
                    <img className='pictwo' src='\img15.jpg'></img>
                   
                </div>
                <div className='secondgroupofmg'>
                    <img className='picthree' src='\img13.jpg'></img>
                    <img className='picfour' src='\img10.jpg'></img>
                    <img className='picfive' src='\tree-alone.avif'></img>
                </div>
            </div>
        </div>
        
        </div>
    </div>
       </div>
    
  );
}

export default Cshoppage;