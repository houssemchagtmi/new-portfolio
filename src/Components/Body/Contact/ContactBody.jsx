import React from 'react'

const ContactBody = () => {
  return (
      <div className=" flex flex-wrap my-36 mx-96 mb-0 justify-evenly  xs:m-0" >
        <div className="w-80 h-80 ">
          <a href="https://www.facebook.com/houssem.chagtmi.12/">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_bgHQHE.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </a>
        </div>

        <div className="w-64 h-64">
          <a href="https://www.linkedin.com/in/houssem-eddin-chagtmi-6a0a6322b/">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_g7zwhgv2.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </a>
        </div>

        <div className="w-80 h-80">
        <a href="https://www.instagram.com/chagtmihoussem/">

          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_mfvpbnet.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
                    </a>

        </div>

        <div className="w-80 h-80">
          <a href="https://mail.google.com/mail/u/0/#inbox">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_tszzqucf.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          </a>
        </div>
        <div className="w-80 h-80">
          <a href="https://github.com/houssemchagtmi">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_cwqf5i6h.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          </a>
        </div>
        <div>

        </div>
      </div>
  )
}

export default ContactBody
