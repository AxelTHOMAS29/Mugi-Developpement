import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactForm = () => {
  const form = useRef();
  let formMess = document.querySelector(".form-message");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

        setName("");
        setCompany("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      });

  };


  return (
    <form ref={form} onSubmit={sendEmail} className='formulaire'>
      <p className='textContactForm'>N'hésitez pas à nous contacter</p>
      <div className='form-container'>
        <div className='form-info-container'>
          <input
            type='text'
            name='name'
            placeholder=' Votre Nom *'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='nomForm'
            required
          />
          <input
            type='text'
            name='company'
            placeholder=' Votre Entreprise'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type='email'
            name='email'
            placeholder=' Votre Email *'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='emailForm'
            required
          />
        </div>
        <div className='form-message-container'>
          <textarea
            type='text'
            name='message'
            placeholder=' Votre Message *'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='messageForm'
            required
          />
        </div>
      </div>
      <button type='submit' className='ButtonEnvoyer'>Envoyer</button>
      <div className="form-message">
      </div>

    </form>
  );
};

export default ContactForm;
