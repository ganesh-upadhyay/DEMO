import React from 'react';

const DisplayData = ({ location }) => {
  const formData = location.state.formData;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {formData.name}</p>
      <p>Phone: {formData.phone}</p>
      <p>Email: {formData.email}</p>
      <p>Location: {formData.location}</p>
    </div>
  );
};

export default DisplayData;