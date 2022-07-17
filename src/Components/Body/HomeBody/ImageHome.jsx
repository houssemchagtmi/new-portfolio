import React from 'react'
import me from "../../../images/me.png";
import '../../../Screens/Home/HomePage.css'
const ImageHome = () => {

  return (
    <div  className=" flex flex-col container xs:h-52 xs:w-52  md:w-64 lg:w-80 lg:h-80  xl:w-96 ">
      
      <h3  className='title relative font-dancing text-3xl text-center text-cyan-200  '> it's me !  &#128526;</h3>
      <div className=' filter grayscale contrast-200 hover:filter-none  '  >
        
    <img src={me} alt="my-Pic" />
      </div>
  </div>
  )
}

export default ImageHome
