import React from 'react'
import CertificatesBody from '../../Components/Body/CertificatesBody/CertificatesBody'

const Certificates = () => {
  return (
    <div className="grid grid-cols-20 grid-rows-20">
        <div className=" col-start-2 col-end-13 row-start-2 row-end-4 ">
        <CertificatesBody/>
        </div>
    </div>
  )
}

export default Certificates
