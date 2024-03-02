import React, { useState } from 'react';
import generateUniqueId from '../utilities/generateUniqueID';

function EducationForm({ handleEducationChange }) {
  const [educationDetails, setEducationDetails] = useState([]);

  const handleCurrentEducationChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEducation = educationDetails.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [name]: value };
      }
      return edu;
    });
    setEducationDetails(updatedEducation);
    handleEducationChange(updatedEducation);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: generateUniqueId(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    };
    const updatedEducation = [...educationDetails, newEducation];
    setEducationDetails(updatedEducation);
    handleEducationChange(updatedEducation);
  };

  const handleRemoveEducation = (key) => {
    const updatedEducation = educationDetails.filter((edu) => edu.id !== key);
    setEducationDetails(updatedEducation);
    handleEducationChange(updatedEducation);
  };

  return (
    <div className="education-section">
      <div className="input-section-header">
        <h2>Education</h2>
        <button>
          <img
            src="/addButton.svg"
            alt="add button"
            onClick={handleAddEducation}
          />
        </button>
      </div>
      {educationDetails.map((edu) => (
        <div key={edu.id}>
          <input
            type="text"
            name="startDate"
            value={edu.startDate}
            onChange={(e) => handleCurrentEducationChange(e, edu.id)}
            placeholder="Start Date mm/yyyy"
          />
          <input
            type="text"
            name="endDate"
            value={edu.endDate}
            onChange={(e) => handleCurrentEducationChange(e, edu.id)}
            placeholder="End Date mm/yyyy"
          />
          <input
            type="text"
            name="location"
            value={edu.location}
            onChange={(e) => handleCurrentEducationChange(e, edu.id)}
            placeholder="Location"
          />
          <input
            type="text"
            name="school"
            value={edu.school}
            onChange={(e) => handleCurrentEducationChange(e, edu.id)}
            placeholder="School"
          />
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleCurrentEducationChange(e, edu.id)}
            placeholder="Degree"
          />
          <button className="delete-button">
            <img
              src="/deleteButton.svg"
              alt="delete button"
              onClick={() => handleRemoveEducation(edu.id)}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;
