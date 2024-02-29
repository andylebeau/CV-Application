const EducationPreview = ({ school, degree, startDate, endDate, location }) => {
  return (
    <section className="section-layout">
      <div className="left-column">
        <p>
          {startDate} - {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div className="right-column">
        <p>{school}</p>
        <p>{degree}</p>
      </div>
    </section>
  );
};

export default EducationPreview;
