const PersonalDetailsPreview = ({ fullname, email, phone, address }) => {
  return (
    <div className="resume-header">
      <h1>{fullname}</h1>
      <div className="contact-info">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default PersonalDetailsPreview;
