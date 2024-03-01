function EducationPreview({ school, degree, startDate, endDate, location }) {
  return (
    <section className="section-layout">
      <div className="left-column">
        <p>
          {startDate}
          {startDate && endDate && <span> – </span>}
          {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div className="right-column">
        <p>{school}</p>
        <p>{degree}</p>
      </div>
    </section>
  );
}

export default EducationPreview;
