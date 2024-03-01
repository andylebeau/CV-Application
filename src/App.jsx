import React, { useState } from 'react';
import PersonalDetailsForm from './components/personal-info/PersonalDetailsForm';
import ResumePreview from './components/ResumePreview';
import EducationForm from './components/education/EducationForm';
import ExperienceForm from './components/experience/ExperienceForm';
import './styles/App.css';
import generateUniqueId from './components/utilities/generateUniqueID';

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
  });

  const [education, setEducation] = useState([
    {
      id: generateUniqueId(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: generateUniqueId(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEducationChange = (updatedEducation) => {
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (updatedExperience) => {
    setExperience(updatedExperience);
  };

  return (
    <div className="app-container">
      <div className="input-section">
        <PersonalDetailsForm handleInputChange={handleInputChange} />
        <EducationForm
          education={education}
          handleEducationChange={handleEducationChange}
        />
        <ExperienceForm
          experience={experience}
          handleExperienceChange={handleExperienceChange}
        />
      </div>
      <div className="resume-preview">
        <ResumePreview
          personalDetails={personalDetails}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
};

export default App;
