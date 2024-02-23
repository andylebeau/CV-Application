import React, { useState } from 'react';
import './styles/App.css';

const LeftSection = ({ onInputChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <div className="left-section">
      <section className="personal-details-section">
        <h2>Personal Details</h2>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
        />
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <input
          type="text"
          name="school"
          placeholder="School"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date / Present"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleInputChange}
        />
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="positionTitle"
          placeholder="Position Title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="expStartDate"
          placeholder="Start Date"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="expEndDate"
          placeholder="End Date / Present"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="expLocation"
          placeholder="Location"
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="10"
          onChange={handleInputChange}
        ></textarea>
      </section>
    </div>
  );
};

const RightSection = ({ formData }) => {
  return (
    <div className="right-section">
      <div className="resume-header">
        <h1 className="resume-name">{formData.fullname}</h1>
        <div className="contact-info">
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          <p>{formData.address}</p>
        </div>
      </div>
      <div className="resume-body">
        <h2 className="section-header">Education</h2>
        <div className="section-layout">
          <div className="left-column">
            <p>
              {formData.startDate} - {formData.endDate}
            </p>
            <p>{formData.location}</p>
          </div>
          <div className="right-column">
            <p>{formData.school}</p>
            <p>{formData.degree}</p>
          </div>
        </div>
        <h2 className="section-header">Experience</h2>
        <div className="section-layout">
          <div className="left-column">
            <p>
              {formData.expStartDate} - {formData.expEndDate}
            </p>
            <p>{formData.expLocation}</p>
          </div>
          <div className="right-column">
            <p>{formData.companyName}</p>
            <p>{formData.positionTitle}</p>
            <p>{formData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestApp = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="app-container">
      <LeftSection onInputChange={handleInputChange} />
      <RightSection formData={formData} />
    </div>
  );
};

export default TestApp;
