import React from 'react'
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'
import Farlight from '../../../assets/videos/farlight.mp4'


const Carousel = () => {
  return (
    <>
    <div className='z-10 hero hidden md:inline-block bg-base-200 p-20  w-screen '>
    <div className="carousel w-full h-[550px]">
            <div id="item1" className="carousel-item w-full justify-center">
              <img src={banner1}  className="w-full" />
            </div> 
             <div id="item2" className="carousel-item w-full justify-center">
              <img src={banner2}  className="w-full" />
            </div> 
             <div id="item3" className="carousel-item w-full justify-center">
              <img src={banner3}  className="w-full" />
            </div> 
             <div id="item4" className="carousel-item w-full justify-center">
              {/* <img src={banner4}  className="w-full" /> */}
               <div className='w-full'>
                      <video src={Farlight}
                                  
                                  autoplay="{true}" loop muted={true}
                                  className=" w-auto 
                                        min-w-full min-h-full max-w-none">
                      </video>
                </div>
            </div> 
    </div> 


<div className="relative flex justify-center h-full w-full items-end py-2 gap-2 z-10">
  <a href="#item1" className="btn btn-xs border-primary hover:bg-primary hover:text-black">1</a> 
  <a href="#item2" className="btn btn-xs border-primary  hover:bg-primary hover:text-black">2</a> 
  <a href="#item3" className="btn btn-xs border-primary  hover:bg-primary hover:text-black">3</a> 
  <a href="#item4" className="btn btn-xs border-primary  hover:bg-primary hover:text-black">4</a>
</div>
    </div>
    </>
  )
}

export default Carousel