const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
