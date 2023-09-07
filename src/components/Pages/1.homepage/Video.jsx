import React from 'react'
import Videos from '../../../assets/images/Video.mp4'

const Video = () => {
  return (
   <>
   
        <div className='fixed w-screen min-h-screen'>
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