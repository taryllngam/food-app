import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaSnapchatSquare } from 'react-icons/fa'
import "../Footer/style.css"

export default function Footer() {
  return (
    <div className='foot' id='contact'>
      <div className='owners-info'>
        <p>CONTACT: <span>+237-670-716-777</span></p>
        <p>EMAIL: <span>taryllngam@gmail.com</span></p>
        <p>LOCATION: <span>Yaounde,Cameroon</span></p>
      </div>
      <div className='socials'>
        <div><h1>FOLLOW US</h1></div>
        <div className='social'>
      <span><AiFillFacebook/></span>
      <span><AiFillInstagram/></span>
      <span><AiFillTwitterSquare/></span>
      <span><AiFillLinkedin/></span>
      <span><FaSnapchatSquare/></span>
      </div>
      </div>
    </div>
  )
}

