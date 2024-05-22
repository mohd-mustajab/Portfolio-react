import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar'
import Footer from './Footer'
import "./Contact.css"
import Swal from 'sweetalert2';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_myr3z7j', 'template_livmhmm', form.current, {
        publicKey: 'oshirECPffq6jKUQz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Sent!",
            text: "Your message has been sent!",
            icon: "success"
          });
         e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <Navbar/>
      <div className="main">
  <p className="head">Contact Me!</p>
  <form ref={form} onSubmit={sendEmail}>
    <input className="input" id="name" type="text" placeholder="Your Name" name='name' required />
    <input className="input" id="email" type="text" placeholder="Email" name='email' required />
    <input className="input" id="phone" type="text" placeholder="Phone Number" name='phone' required />
    <input className="input" id="sub" type="text" placeholder="Subject" name='sub' required />
    <textarea className="input textarea" id="msg" placeholder="Your Message" name='msg' required defaultValue={""} />
    <div className="btndiv"><button className="btn" type="submit" name='btn'>Send Message</button></div>
  </form>
</div>
<Footer/>
    </div>
  )
}

export default Contact
