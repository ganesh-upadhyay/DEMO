import React from 'react';
import DisplayData from '../components/DisplayData';

const DisplayPage = (props) => {
  return (
    <div>
      <h1>User Details</h1>
      <DisplayData {...props} />
    </div>
  );
};

export default DisplayPage;