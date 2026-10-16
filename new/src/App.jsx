
import React, { useEffect, useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log("Form data update:", formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("resgistration successfully")
    console.log("Submitted data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange}
        />

        <br />

        <input
          type="email" name="email" placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <input
          type="password" name="password" placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;