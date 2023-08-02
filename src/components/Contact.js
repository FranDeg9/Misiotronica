import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mzbldaer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        alert('El correo ha sido enviado correctamente.');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Hubo un error al enviar el correo. Inténtalo nuevamente.');
      }
    } catch (error) {
      alert('Hubo un error al enviar el correo. Inténtalo nuevamente.');
    }
  };


  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-form' htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className='text-form' htmlFor="subject">Asunto:</label>
          <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div>
          <label className='text-form' htmlFor="message">Mensaje:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
