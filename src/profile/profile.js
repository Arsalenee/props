import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;
  const image = props.children;

  return (
    <div style={{ border: '1px solid black', backgroundColor: '#eee' }}>
      {image}
      <h1 style={{ color: 'red' }} onClick={() => handleName(fullName)}>{fullName} </h1>
      
      
      <p style={{ fontSize: '20px', textAlign: 'center' }}>>{bio}</p>
      <p style={{ color : 'green'}}>{profession}</p>
    </div>
  );
}

Profile.defaultProps = {
  fullName: 'Arsalen Fattoum',
  bio: 'A web developer',
  profession: 'web developer',
  handleName: () => alert('Hello!')
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func
};

export default Profile;






