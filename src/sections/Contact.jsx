import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import useIntersectionObserver from '../components/utilities/useIntersectionObserver';

const Contact = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const [regData,setRegData] = useState([])

  const [ref, visible] = useIntersectionObserver()

  // Removed the data and deleted data file
  const emailInfo = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = async () => {
    try {
      // Replace URL 
      await axios.post("http://localhost:3001/send-email", emailData);
      emailInfo.push(emailData);
      setRegData(prevElem => [...prevElem,{emailData}])
      console.log("Email sent successfully!");
      document.querySelector('.message').text = 'Email sent successfully!'  

    } catch (error) {
      console.error("Error sending email:", error.message);
      document.querySelector('.message').text = 'failed to sent Email !'
    }
  };

  console.log(regData)
  const title =
    "Sign up now for as much hosting and domain as you want for $20.99/year";

    recoverStatus = ''

  return (
    <section className={`contact ${isVisible ? 'visible' : ''}`} ref={ref}>
      
      <div className="container">
        <Heading headContent={title} />
        <div className="contact-form">
          <div className="contact-form-input">
            <input type="text" id="name" name="to" value={emailData.to} onChange={handleInputChange} placeholder="Name" />
          </div>
          <div className="contact-form-input">
            <input type="email" id="email" name="subject" value={emailData.subject} onChange={handleInputChange} placeholder="E-mail Address" />
          </div>
          <div className="contact-form-input">
            <input type="text" id="message" name="text" value={emailData.text} onChange={handleInputChange} placeholder="Your Message" />
          </div>
          <div className="contact-form-input contact-form-submit">
            <input type="submit" onClick={handleSendEmail} value="Sign Up" className="btn btn-primary" />
          </div>
        </div>
        <div className="message"></div>
      </div>
    </section>
  );
};

export default Contact;
