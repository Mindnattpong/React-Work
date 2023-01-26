import React, { useRef } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import emailjs from 'emailjs-com';
export const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9mrgx0t', 'template_hwpqq3g', form.current, '-IFTozaLuQHSDBjCD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>ติดต่อเรา</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mindnattpong@gmail.com</h5>
            <a href="mailto:mindnattpong@gmail.com">ส่งข้อความ</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>Mind Kung</h5>
            <a href="https://m.me/nattpong.puarisri">ส่งข้อความ</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0886631563</h5>
            <a href="https://api.whatsapp.com/send?phone+6686631563">โทรหาเรา</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='ชื่อ-สกุล' required/>
          <input type="email" name='email' placeholder='อีเมล' required/>
          <textarea name="message" rows="7" placeholder='กรอกข้อความ' required></textarea>
          <button type='submit' className='btn btn-primary'>ส่งข้อความ</button>
        </form>
      </div>
    </section>
  )
}
export default Contact