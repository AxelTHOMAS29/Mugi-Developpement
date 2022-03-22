import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactForm = () => {
  const form = useRef();
  let formMess = document.querySelector(".form-message");

  const [toSend, setToSend] = useState({
    name: '',
    company: '',
    message: '',
    email: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7rnsrg', 'template_1e1m9up', form.current, 'user_0AXkvlcKroHa83hSV4KcB')
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! Nous vous recontacterons dès que possible.";
        formMess.style.background = "grey";
        formMess.style.opacity = "1";
        formMess.style.margin = '20px';
        formMess.style.borderRadius = "5px";
      });

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <form ref={form} onSubmit={sendEmail} className='formulaire'>
      <p  className='textContactForm'>N'hésitez pas à nous contacter</p>
      <input
        type='text'
        name='name'
        placeholder=' Votre Nom *'
        value={toSend.name}
        onChange={handleChange}
        className='nomForm'
        required
      />
      <input
        type='text'
        name='company'
        placeholder=' Votre Entreprise'
        value={toSend.company}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder=' Votre Email *'
        value={toSend.reply_to}
        onChange={handleChange}
        className='emailForm'
        required
      />
      <textarea
        type='text'
        name='message'
        placeholder=' Votre Message *'
        value={toSend.message}
        onChange={handleChange}
        className='messageForm'
        required
      />

      <button type='submit' className='ButtonEnvoyer'>Envoyer</button>
      <div className="form-message"></div>
    </form>
  );
};

export default ContactForm;
