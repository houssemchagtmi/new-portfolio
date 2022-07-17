import React, { useState } from 'react'
import Modals from '../Modal/Modals';

const ButtonOpenModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

  return (
  
         
      <div className="border-8 border-red-800 h-36 w-36 flex items-center justify-center border-dashed mt-10">
      
        <button
          className="openModalBtn text-7xl text-red-800"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          +
        </button>

        {modalOpen && <Modals setOpenModal={setModalOpen} />}

      </div>
   
  )
}

export default ButtonOpenModal
