import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/kazi-reyazul-hasan-2678b4210/' target="_blank" rel="noreferrer">
      <BsLinkedin />
      </a>
      
    </div>
    <div>
        <a href='https://www.facebook.com/kazi.reyazulhasan.1/' target="_blank" rel="noreferrer">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href='https://www.instagram.com/kreyazulh/?hl=en' target="_blank" rel="noreferrer">
      <BsInstagram />
      </a>
    </div>
  </div>
  )
}

export default SocialMedia