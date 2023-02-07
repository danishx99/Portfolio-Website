import "./contact.css"
import {AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wb4bi9b', 'template_383womc', form.current, 'uO4BiMFLD2JVoIM09')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

  
          <article className="contact__option">
              <AiOutlineMail className='contact__icon'/>
              <h4>Email</h4>
              <h5>saleemdf99@gmail.com</h5>
          </article>
        
          <article className="contact__option">
              <AiOutlineWhatsApp className='contact__icon'/>
              <h4>Whatsapp</h4>
              <h5>+27 76 620 3590</h5>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="text" name='email' placeholder='Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>

      </div>
    </section>
    
  )
}

export default Contact