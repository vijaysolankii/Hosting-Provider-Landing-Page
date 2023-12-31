// InternalPage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InternalPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  const handleLogout = () => {
    // Remove the login flag from local storage
    localStorage.removeItem("isLoggedIn");
    // Redirect to the login page upon logout
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("https://hosting-lp-backend.vercel.app/get-submitted-data")
      .then((response) => setFormData(response.data))
      .catch((error) => console.error("Error fetching submitted data:", error));
  }, []);

  console.log(formData);

  return (
    <section className="users">
      <div className="container overflow-x-auto">
        <div className="topHeading">
          <h2>Internal Page</h2>
          <p>Welcome to the internal page!</p>
          <button className='btn' onClick={handleLogout}>Logout</button>
        </div>
        <table className="min-w-full bg-white border border-gray-300 mt-5">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b">Check</th>
              <th className="text-left py-2 px-4 border-b">Name</th>
              <th className="text-left py-2 px-4 border-b">Email</th>
              <th className="text-left py-2 px-4 border-b">Subject</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (
              <tr key={index}>
                <td className="text-left py-2 px-4 border-b">
                  <input type="checkbox" name="cb_user" id={index} />
                </td>
                <td className="text-left py-2 px-4 border-b">{item.subject}</td>
                <td className="text-left py-2 px-4 border-b">{item.to}</td>
                <td className="text-left py-2 px-4 border-b">{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InternalPage;
