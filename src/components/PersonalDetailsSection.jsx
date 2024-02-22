import React, { useState, useEffect } from 'react';

const PersonalInput = ({ onInputChange }) => {
  const [inputData, setInputData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  useEffect(() => {
    onInputChange(inputData);
  }, [inputData, onInputChange]);

  return (
    <div className="input-section">
      <div className="input-personal-details">
        <h2>Personal Details</h2>
        <label>
          <h3>Full Name</h3>
          <input
            type="text"
            name="fullName"
            value={inputData.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h3>Phone</h3>
          <input
            type="tel"
            name="phone"
            value={inputData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h3>Address</h3>
          <input
            type="address"
            name="address"
            value={inputData.homeBase}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};

const PersonalInputPreview = ({ inputData }) => {
  return (
    <div className="resume-side">
      <div className="resume-personal-details">
        <h1>{inputData.fullName}</h1>
        <div className="personal-other">
          <p>{inputData.email}</p>
          <p>{inputData.phone}</p>
          <p>{inputData.address}</p>
        </div>
      </div>
    </div>
  );
};

const PersonalDetailsSection = () => {
  const [previewData, setPreviewData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInput = (data) => {
    setPreviewData(data);
  };

  return (
    <div className="page-section">
      <PersonalInput onInputChange={handleInput} />
      <PersonalInputPreview inputData={previewData} />
    </div>
  );
};

export default PersonalDetailsSection;
