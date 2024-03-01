import React, { useState } from 'react';
import generateUniqueId from '../utilities/generateUniqueID';

const ExperienceForm = ({ experience, handleExperienceChange }) => {
  const [experienceDetails, setExperienceDetails] = useState([]);

  const handleCurrentExperienceChange = (e, id) => {
    const { name, value } = e.target;
    const updatedExperience = experienceDetails.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    setExperienceDetails(updatedExperience);
    handleExperienceChange(updatedExperience);
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: generateUniqueId(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    };
    const updatedExperience = [...experienceDetails, newExperience];
    setExperienceDetails(updatedExperience);
    handleExperienceChange(updatedExperience);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperience = experienceDetails.filter((exp) => exp.id !== id);
    setExperienceDetails(updatedExperience);
    handleExperienceChange(updatedExperience);
  };

  return (
    <div className="experience-section">
      <div className="input-section-header">
        <h2>Experience</h2>
        <button>
          <img
            src="src/assets/add_button.svg"
            alt="add button"
            onClick={handleAddExperience}
          />
        </button>
      </div>
      {experienceDetails.map((exp) => (
        <div key={exp.id}>
          <input
            type="text"
            name="startDate"
            value={exp.startDate}
            onChange={(e) => handleCurrentExperienceChange(e, exp.id)}
            placeholder="Start Date"
          />
          <input
            type="text"
            name="endDate"
            value={exp.endDate}
            onChange={(e) => handleCurrentExperienceChange(e, exp.id)}
            placeholder="End Date"
          />
          <input
            type="text"
            name="location"
            value={exp.location}
            onChange={(e) => handleCurrentExperienceChange(e, exp.id)}
            placeholder="Location"
          />
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleCurrentExperienceChange(e, exp.id)}
            placeholder="Company"
          />
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={(e) => handleCurrentExperienceChange(e, exp.id)}
            placeholder="Position"
          />
          <textarea
            type="textarea"
            rows="10"
            name="description"
            value={exp.description}
            onChange={(e) => handleCurrentExperienceChange(e, exp.id)}
            placeholder="Description"
          />
          <button className="delete-button">
            <img
              src="src/assets/delete_button.svg"
              alt="delete button"
              onClick={() => handleRemoveExperience(exp.id)}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;
