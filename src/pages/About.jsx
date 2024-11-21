import React from 'react'
import profile from '../img/pofile.jpg'
import '../Styles/about.css';

const About = () => {
  return (
    <main className='about-main'>
      <div className='container-about'>
        <div className='profile-about'>
          <img src={profile} alt='img' />
        </div>
        <div className='about-content'>
             <div  className='about'>
              <p>ABOUT AS</p></div>
            <h1 style={{color:'white',marginTop:'40px'}}>I AM AVAILABLE FOR<span style={{color:'#0788FF'}}> UI UX DESIGN PROJECTS</span></h1>
            <p style={{color:'white',marginTop:'40px'}}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <div class="container">
            <div class="review-box" style={{color:'white',marginTop:'40px',display:'flex',gap:'10px'}}><div class="r-box" style={{background:'hsla(0, 0%, 100%, .05)' , border: '1px solid hsla(0, 0%, 100%, .15)',padding:'20px',}}><h3>280<span>+</span></h3><label>Google Review</label></div><div class="r-box" style={{ border: '1px solid hsla(0, 0%, 100%, .15)',background:'hsla(0, 0%, 100%, .05)',padding:'20px'}}><h3>15<span>+</span></h3><label>Years Experience</label></div><div class="r-box" style={{border:'2px solid white',background:'hsla(0, 0%, 100%, .05)' ,padding:'20px',border: '1px solid hsla(0, 0%, 100%, .15)'}}><h3>49<span>+</span></h3><label>Awward Winning</label></div></div>
</div>
        </div>

      </div>
    </main>
  )
}

export default About

