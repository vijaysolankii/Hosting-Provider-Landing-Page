// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Internal from '../pages/Internal'
import Home from '../pages/Home'
import Error from '../pages/Error';

const PrivateRoute = ({ element }) => {
  return localStorage.getItem('isLoggedIn') === 'true' ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internal-page" element={localStorage.getItem('isLoggedIn') === 'true' ? <Internal /> : <Login />} />
          <Route path="/internal-page" element={<PrivateRoute element={<Internal />} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
