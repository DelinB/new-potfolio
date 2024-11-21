import React from 'react'
import '../Styles/contact.css'

const Contact = () => {
  return (
    <div className='contactlast'>
            <h1>CONTACT</h1>
            <div className='contactlast-card' >
            <div className='form'>
              <label>Your Name:</label><br/><input placeholder='Name' required className='form-input'/><br/>
              <label>Your Name:</label><br/><input placeholder='Email' required className='form-input'/><br/>
              <label>Your Name:</label><br/><input placeholder='Subject' required className='form-input'/><br/>
              <label>Your Name:</label><br/><input placeholder='Your Message'required className='form-input'/>

              </div>
              <button style={{color:'white',padding:'13px 30px',fontSize:'16px',backgroundColor:'#0788FF',borderRadius:'25px'}}>
                SEND MESSAGE
                </button>  
                <div className='number-and-mail'>
              <h6 className='Write-an e-mail'>Write an e-mail</h6>
              <h5>delin.b.23@gmail.com</h5>
            </div>                
              </div>
          
            <hr />
            <div className='copyright'>
            <p >@2023 copyright all right reserved</p>

            </div>
    </div>
  )
}

export default Contact