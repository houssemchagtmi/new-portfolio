import React from 'react'
import name from '../../images/name.png'
const MyLogo = () => {
  return (
    <div >
        <img src={name} alt="hello" className='w-10 h-10 mt-3 ml-10 xs:w-7 xs:h-7 xs:mt-4 xs:ml-5' />
    </div>
  )
}

export default MyLogo
