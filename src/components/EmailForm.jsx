import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const emailInfo = []

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = async () => {
    try {
      await axios.post('https://hosting-lp-backend.vercel.app/send-email', emailData);
      emailInfo.push(emailData)
      console.log('Email sent successfully!');
      console.log([...emailInfo])
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };
  


  

  return (
    <div>
      <label className='text-white'>To:</label>
      <input type="email" name="to" value={emailData.to} onChange={handleInputChange} />

      <label className='text-white'>Subject:</label>
      <input type="text" name="subject" value={emailData.subject} onChange={handleInputChange} />

      <label className='text-white'>Message:</label>
      <textarea name="text" value={emailData.text} onChange={handleInputChange} />

      <button className='text-white' onClick={handleSendEmail}>Send Email</button>

    </div>
  );
};

export default EmailForm;
