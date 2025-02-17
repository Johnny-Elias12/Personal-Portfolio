import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_173s5t7', 'template_1gm78tt', form.current, {
        publicKey: 'IOxNt6Zk1ntUMNiTF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name"></input>
            <label>Email</label>
            <input type="email" name="from_email"></input>
            <label>Subject</label>
            <input type="text" name="Subject"></input>
            <label>Messages</label>
            <textarea rows="6" placeholder="Type your message here" name="message"/>
            <input className="btn" type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Form