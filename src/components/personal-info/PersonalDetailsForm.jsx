function PersonalDetailsForm({ handleInputChange }) {
  return (
    <section className="personal-details-section">
      <h2>Personal Details</h2>
      <input
        id="fullname"
        type="text"
        name="fullname"
        placeholder="Full Name"
        onChange={handleInputChange}
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Phone"
        onChange={handleInputChange}
      />
      <input
        id="address"
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleInputChange}
      />
    </section>
  );
}

export default PersonalDetailsForm;
