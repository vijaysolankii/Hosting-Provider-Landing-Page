import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = async () => {
    try {
      await axios.post('http://localhost:3001/send-email', emailData);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  return (
    <div>
      <label>To:</label>
      <input type="email" name="to" value={emailData.to} onChange={handleInputChange} />

      <label>Subject:</label>
      <input type="text" name="subject" value={emailData.subject} onChange={handleInputChange} />

      <label>Message:</label>
      <textarea name="text" value={emailData.text} onChange={handleInputChange} />

      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default EmailForm;
