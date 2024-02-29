import React from 'react';
import PersonalDetailsPreview from './personal-info/PersonalDetailsPreview';
import EducationPreview from './education/EducationPreview';
import ExperiencePreview from './experience/ExperiencePreview';

const ResumePreview = ({ personalDetails, education, experience }) => {
  const { fullname, email, phone, address } = personalDetails;

  return (
    <div className="resume-preview">
      <PersonalDetailsPreview
        fullname={fullname}
        email={email}
        phone={phone}
        address={address}
      />
      <div className="resume-body">
        <div className="section-header">
          <h2>Education</h2>
        </div>
        {education.map((edu, index) => (
          <EducationPreview
            key={index}
            school={edu.school}
            degree={edu.degree}
            startDate={edu.startDate}
            endDate={edu.endDate}
            location={edu.location}
          />
        ))}
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        {experience.map((exp, index) => (
          <ExperiencePreview
            key={index}
            company={exp.company}
            position={exp.position}
            startDate={exp.startDate}
            endDate={exp.endDate}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
