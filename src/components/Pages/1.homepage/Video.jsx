import React from 'react'
import Videos from '../../../assets/images/Video.mp4'

const Video = () => {
  return (
   <>
   
        <div className='mt-[-55px] fixed w-full'>
              <video src=
{Videos}
            autoplay="{true}" loop muted
            className="w-auto 
            min-w-full min-h-full max-w-none opacity-10">
        </video>
        </div>
   </>
  )
}

export default Video