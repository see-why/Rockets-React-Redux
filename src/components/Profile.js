import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../css/profiles.css';

const Profile = () => {
  const { rockets } = useSelector((state) => state);
  const { missions } = useSelector((state) => state);

  const reservedRockets = rockets.filter((item) => (item.reserved === true));

  return (
    <div className="my-profile">
      <div className="my-missions">
        <h2>My Missions</h2>
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <ul className="rocket-Lists">
          {reservedRockets.map((item) => (<li key={uuidv4()}>{item.name}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
