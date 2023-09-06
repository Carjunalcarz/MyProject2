  import React from 'react'
  import { Link } from 'react-scroll';
  import {HiArrowNarrowRight,HiOutlineChevronDoubleLeft} from 'react-icons/hi'
  import {
    FaGithub,
    FaLinkedin,
    FaFacebookSquare,
    
  
  } from 'react-icons/fa';
import Carousel from './Carousel';

const Home = () => {
  return (
    <>
   
    <div className="hero min-h-screen bg-base-200 p-10 md:p-20">
    
    <div className="hero-content">
        <div className="min-w-screen">
             <p className='text-3xl font-bold text-primary '>Hi, my name is </p>
            <h1 className=" text-4xl  md:text-6xl overflow-hidden whitespace-nowrap font-bold w-full text-content">Alcarzin Cardona</h1>
            <h2 className="text-6xl font-bold text-primary">I'm a Full Stack Developer</h2>
            <p className="py-6 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className='flex'>
              <span>
                <Link to='work' smooth={true} duration={500}>
                <button className='group text-primary border-2 px-6 py-3 my-2 flex items-center hover:bg-primary-content hover:border-primary-focus'>View Work 
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span> 
                </button>
                </Link>
              </span>
            </div>
            {/* ====== Progress ===== */}
          <div>
              <progress className="progress w-56 bg-primary"></progress>
          </div>
            {/* ====== Progress ===== */}

        </div>
    
         {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a
              className='flex justify-between w-full text-gray-300 p-4 text-m' href='/'>
              Linkedin <FaLinkedin size={30} className=''/>
            </a>
          </li>
           <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a
              className='flex justify-between w-full text-gray-300 p-4 text-m' href='/'>
              GutHub <FaGithub size={30} className=''/> 
            </a>
          </li>
           <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between w-full text-gray-300 p-4 text-m' href='/'>
              Facebook <FaFacebookSquare size={30} className=''/> 
            </a>
          </li>
           <li className='w-[60px] h-[40px] flex  items-center   duration-300 bg-primary'>
            <a
              className='flex justify-between w-full text-primary-content p-4 text-m right-0' href='/'>
               <HiOutlineChevronDoubleLeft size={20} className=''/> 
            </a>
          </li>
        </ul>
      </div>

    </div>
     

    </div>
     <Carousel />
    
    </>
  )
}

export default Home