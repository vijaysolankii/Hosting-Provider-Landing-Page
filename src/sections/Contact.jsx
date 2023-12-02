import React from "react";
import Heading from "../components/Heading";

const Contact = () => {
  const title =
    "Sign up now for as much hosting and domain as you want for $20.99/year";

  return (
    <section className="contact">
      <div className="container">
        <Heading headContent={title} />
        <div className="contact-form">
            <div className="contact-form-input">
                <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="contact-form-input">
                <input type="email" name="email" id="email" placeholder="E-mail Address" />
            </div>
            <div className="contact-form-input">
                <input type="password" name="password" id="u_password" placeholder="Password" />
            </div>
            <div className="contact-form-input contact-form-submit">
                <input type="submit" value="Sign Up" className="btn btn-primary" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
