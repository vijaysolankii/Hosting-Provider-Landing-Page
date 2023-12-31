import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useHistory for navigation

const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: 'defaultUser',
    password: 'defaultPass',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the provided username and password match the default values
    if (formData.username === 'defaultUser' && formData.password === 'defaultPass') {
      console.log('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to internal page upon successful login
      history('/internal-page');

    } else {
      console.log('Invalid username or password');
      // You can handle unsuccessful login here (show an error message, etc.)
    }
  };

  return (
    <section className="login">
      <div className='container'>
        <h2 className='text-5xl text-white font-semibold text-center mb-12'>Login</h2>
        <div className="contact-form login-form">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-input">
              <label> Username:</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            
            <div className="contact-form-input">
              <label> Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="contact-form-input">
              <button className='btn' type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;