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
      // Redirect to internal page upon successful login
      history('/internal-page');
    } else {
      console.log('Invalid username or password');
      // You can handle unsuccessful login here (show an error message, etc.)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;