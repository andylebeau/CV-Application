import InputField from '../utilities/InputField';

const PersonalDetailsForm = ({ handleInputChange }) => {
  return (
    <section className="personal-details-section">
      <h2>Personal Details</h2>
      <InputField
        id="fullname"
        type="text"
        name="fullname"
        placeholder="Full Name"
        onChange={handleInputChange}
      />
      <InputField
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <InputField
        id="phone"
        type="tel"
        name="phone"
        placeholder="Phone"
        onChange={handleInputChange}
      />
      <InputField
        id="address"
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleInputChange}
      />
    </section>
  );
};

export default PersonalDetailsForm;
