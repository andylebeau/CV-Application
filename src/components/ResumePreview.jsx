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
        {education.map((edu) => (
          <EducationPreview
            key={edu.id}
            startDate={edu.startDate}
            endDate={edu.endDate}
            location={edu.location}
            school={edu.school}
            degree={edu.degree}
          />
        ))}
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        {experience.map((exp, index) => (
          <ExperiencePreview
            key={exp.id}
            startDate={exp.startDate}
            endDate={exp.endDate}
            location={exp.location}
            company={exp.company}
            position={exp.position}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
