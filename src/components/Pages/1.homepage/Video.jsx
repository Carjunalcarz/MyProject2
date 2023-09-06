import React from 'react'
import Videos from '../../../assets/images/Video.mp4'

const Video = () => {
  return (
   <>
   
        <div className='fixed w-full'>
              <video src=
{Videos}
            autoplay="{true}" loop muted
            className=" bg-fixed w-auto 
            min-w-full min-h-full max-w-none opacity-10">
        </video>
        </div>
   </>
  )
}

export default Video