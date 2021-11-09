import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import RocketCard from './RocketCard';

const Rockets = () => {
  const { rockets } = useSelector((state) => state);

  const Rockets = rockets.map((rocket) => {
    const {
      id,
      name,
      details,
      imageUrl,
      reserved,
    } = rocket;
    return (
      <RocketCard
        key={uuidv4()}
        rocketId={id}
        rocketName={name}
        rocketDetails={details}
        rocketsImageUrl={imageUrl}
        reserved={reserved}
      />
    );
  });

  return <div>{Rockets}</div>;
};

export default Rockets;
