const ExperiencePreview = ({
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}) => {
  return (
    <section className="section-layout">
      <div className="left-column">
        <p>
          {startDate} - {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div className="right-column">
        <p>{company}</p>
        <p>{position}</p>
        <p className="description">{description}</p>
      </div>
    </section>
  );
};

export default ExperiencePreview;