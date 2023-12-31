import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import useIntersectionObserver from '../components/useIntersectionObserver';

const Contact = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const [ref, isVisible] = useIntersectionObserver()

  // Removed the data and deleted data file
  // const emailInfo = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = async () => {
    try {
      // Replace URL 
      setLoading(true)
      await axios.post("http://localhost:3001/send-email", emailData);
      console.log("Email sent successfully!");
      document.querySelector('.message').innerHTML = 'Email sent successfully!'  

    } catch (error) {
      console.error("Error sending email:", error.message);
      document.querySelector('.message').innerHTML = 'failed to sent Email !'
    } finally {
      setLoading(false)
      setEmailData({to:"",subject:"",text:""})
    }
  };

  // console.log(regData)
  const title =
    "Sign up now for as much hosting and domain as you want for $20.99/year";

  
  useEffect(() => {
    axios.get("http://localhost:3001/get-submitted-data")
    .then(response => setFormData(response.data))
    .catch(error => console.error("Error fetching submitted data:", error));
  }, [])


  console.log(formData)

  return (
    <section className={`contact ${isVisible ? 'visible' : ''}`} ref={ref}>
      
      <div className="container">
        <Heading headContent={title} />
        <div className="contact-form">
          <div className="contact-form-input">
            <input type="text" id="name" name="subject" value={emailData.subject} onChange={handleInputChange} placeholder="Name" />
          </div>
          <div className="contact-form-input">
            <input type="email" id="email" name="to" value={emailData.to} onChange={handleInputChange} placeholder="E-mail Address" />
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
