import React, { useState } from 'react';
import generateUniqueId from '../utilities/generateUniqueID';

const ExperienceForm = ({ experience, handleExperienceChange }) => {
  const [experienceDetails, setExperienceDetails] = useState(experience);

  const handleInputChange = (e, id) => {
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
      <h2>Experience</h2>
      {experienceDetails.map((exp) => (
        <div key={exp.id}>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleInputChange(e, exp.id)}
            placeholder="Company"
          />
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={(e) => handleInputChange(e, exp.id)}
            placeholder="Position"
          />
          <input
            type="text"
            name="startDate"
            value={exp.startDate}
            onChange={(e) => handleInputChange(e, exp.id)}
            placeholder="Start Date"
          />
          <input
            type="text"
            name="endDate"
            value={exp.endDate}
            onChange={(e) => handleInputChange(e, exp.id)}
            placeholder="End Date"
          />
          <input
            type="text"
            name="location"
            value={exp.location}
            onChange={(e) => handleInputChange(e, exp.id)}
            placeholder="Location"
          />
          <textarea
            type="textarea"
            rows="10"
            name="description"
            value={exp.description}
            onChange={(e) => handleInputChange(e, exp.id)}
            placeholder="Description"
          />
          {exp.id !== experienceDetails[0].id && (
            <button onClick={() => handleRemoveExperience(exp.id)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceForm;
