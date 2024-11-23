
import React from 'react';

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>{name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{age}</span>
      </p>
      <p style={{ fontStyle: 'italic' }}>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;