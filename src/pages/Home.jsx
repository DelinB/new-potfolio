import React from 'react'
import { FaGithub,FaLinkedin,FaFacebook,FaWhatsapp } from "react-icons/fa";
import profile from '../img/pofile.jpg'
import '../Styles/Home.css'

const Home = () => {
  return (
    <main className='home'>
      <div className='home-container'>
        <div className='inro'>
        <h2 style={{color:'white'}}>DELIN B</h2>
      <h1 style={{color:'white'}}>HEY! I'M DELIN</h1>
      <h1 style={{color:'#0d6efd'}}>I'M A DEVELOPER</h1>
      <p style={{color:'#f8f9fa'}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.Get in touch</p>
      <div className='home-iconsandbutton'>
        
        <button style={{color:'white',padding:'13px 30px',fontSize:'16px',backgroundColor:'#0788FF',borderRadius:'25px'}}>GET IN TOUCH →</button>
        <div className='home-icons'>
       <a href='https://github.com/DelinB'>
       <FaGithub  className='Github-icon'/></a> 
       <a href='https://github.com/DelinB'>
       <FaLinkedin className='Linkedin-icon'/></a> 
       <a href='https://github.com/DelinB'>
        <FaFacebook className='Facebook-icon'/>
       </a> 
       <a href='https://github.com/DelinB'>
        <FaWhatsapp className='Whatsapp-icon'/>
       </a> 

        
        </div>
        </div>


   

      </div>
   
      <div className='profile'>
        <img src={profile} alt='profile' className='profile-img'/>
      </div>
    </div>

    </main>
  )
}

export default Home
