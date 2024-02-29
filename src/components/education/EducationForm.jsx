import React, { useState } from 'react';
import generateUniqueId from '../utilities/generateUniqueID';

const EducationForm = ({ education, handleEducationChange }) => {
  const [educationDetails, setEducationDetails] = useState(education);

  const handleInputChange = (e, id) => {
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

  const handleRemoveEducation = (id) => {
    const updatedEducation = educationDetails.filter((edu) => edu.id !== id);
    setEducationDetails(updatedEducation);
    handleEducationChange(updatedEducation);
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      {educationDetails.map((edu) => (
        <div key={edu.id}>
          <input
            type="text"
            name="school"
            value={edu.school}
            onChange={(e) => handleInputChange(e, edu.id)}
            placeholder="School"
          />
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleInputChange(e, edu.id)}
            placeholder="Degree"
          />
          <input
            type="text"
            name="startDate"
            value={edu.startDate}
            onChange={(e) => handleInputChange(e, edu.id)}
            placeholder="Start Date"
          />
          <input
            type="text"
            name="endDate"
            value={edu.endDate}
            onChange={(e) => handleInputChange(e, edu.id)}
            placeholder="End Date"
          />
          <input
            type="text"
            name="location"
            value={edu.location}
            onChange={(e) => handleInputChange(e, edu.id)}
            placeholder="Location"
          />
          {edu.id !== educationDetails[0].id && (
            <button onClick={() => handleRemoveEducation(edu.id)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
};

export default EducationForm;
