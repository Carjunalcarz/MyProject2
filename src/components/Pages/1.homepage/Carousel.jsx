import React from 'react'
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'


const Carousel = () => {
  return (
    <>
    <div className='hero hidden md:inline-block bg-base-200 p-20  w-screen '>
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
              <img src={banner4}  className="w-full" />
            </div> 
    </div> 


<div className="flex justify-center h-full w-full items-end py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
    </>
  )
}

export default Carousel