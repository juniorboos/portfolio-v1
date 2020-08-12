import React, { useState } from 'react';
import { useAlert } from 'react-alert'
import axios from 'axios';
import './styles.css';


const Contact = () => {
   const GOOGLE_FORM_EMAIL_ID = 'entry.1227060730'
   const GOOGLE_FORM_MESSAGE_ID = 'entry.145728746'
   const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSeuXVWQOLt-9FkzUJG3OTxgAvY32DrCxkHfEMKXGZCUyVBKyg/formResponse'
   const alert = useAlert()
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   function handleChangeEmail(event) {
      setEmail(event.target.value);
   }
   function handleChangeMessage(event) {
      setMessage(event.target.value);
   }

   function sendMessage() {
      const formData = new FormData()
      formData.append(GOOGLE_FORM_MESSAGE_ID, message)
      formData.append(GOOGLE_FORM_EMAIL_ID, email)
      setEmail('')
      setMessage('')
      axios.post(GOOGLE_FORM_ACTION_URL, formData)
    }

   function handleSubmit (event) {
      event.preventDefault()
      
      sendMessage()
      alert.success("Message sent!");
   }

   return (
      <form onSubmit={handleSubmit} className="formContainer">
         <div className="marginFields">
            <h2 className="labelForm">Email</h2>
            <input type="email" name="email" value={email} onChange={handleChangeEmail} className="inputForm"/>
         </div>
         <div className="marginFields">
            <h2 className="labelForm">Message</h2>
            <textarea name="message" cols="30" rows="10" value={message} onChange={handleChangeMessage} className="textAreaForm"/>
         </div>
         <div className="marginFields">
            <button type="submit" className="buttonSubmit"> SEND </button>
         </div>
         
      </form>
   );
}

export default Contact;