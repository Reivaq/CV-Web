import React, { useRef } from 'react'
import './contact.css';
import Uni from '../assets/UTM.jpeg';
import Camb from '../assets/CAMB.jpg';
import FaceBookIcon from '../assets/facebook-icon.png'
import TwitterIcon from '../assets/twitter.png'
import YoutubeIcon from '../assets/youtube.png'
import InstagramIcon from '../assets/instagram.png'
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_492bggn', 'template_i2r9wn3', form.current, 'lBFtLWqQluGEya5dq')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <section id='contactPage'>
        <div id ='clients'>
            <h1 className='contactPageTitle'> Professional Preparation </h1>
            <p className='clientDesc'>
            During my academic training, I had the valuable opportunity to pursue my degree in Mechatronics Engineering at the distinguished Universidad Tecnológica De La Mixteca, an institution recognized for its academic excellence and its focus on training highly competent professionals in the field of mechatronics.
            Furthermore, in my search for a complete academic and professional profile, I decided to complement my education with an English course from Cambridge. This course gave me an enriching experience in mastering the English language, a skill that I consider essential in an increasingly globalized world and that has broadened my horizons both academically and professionally.
            </p>
            <div className='clientImgs'>
                <img src={Uni} alt="Client" className='clientImg'/>
                <img src={Camb} alt="Client" className='clientImg'/>
            </div>
        </div>
        <div id="contact">
                <h1 className='contactPageTitle'> Contact Me </h1>
                <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail} >
                  <input type="text" className='name' placeholder='Your Name' name='your_name' />
                  <input type="email" className='email' placeholder='Your Email' name='your_email' />
                  <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                  <button type='submit' value='Send' className='submitBtn'> Submit</button>
                  <div className='links'>
                    <img src={FaceBookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon} alt='Twitter' className='link'/>
                    <img src={YoutubeIcon} alt='Youtube' className='link'/>
                    <img src={InstagramIcon} alt='Instagram' className='link'/>

                  </div>
                </form>
        </div>
      </section>

    )
 }

 export default Contact