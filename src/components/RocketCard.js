import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { addReservation } from '../redux/rockets/rockets';

const RocketCard = ({
  rocketId,
  rocketName,
  rocketDetails,
  rocketsImageUrl,
  reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket-Card">
      <div className="rocket-info">
        <img src={rocketsImageUrl} alt={rocketName} className="rocket-Image" />
        <div className="rocket-Details">
          <ul id={rocketId}>
            <li className="reserved">{reserved}</li>
            <li className="name"><h2>{rocketName}</h2></li>
            <li className="description">{rocketDetails}</li>
          </ul>
          <button className="rocket-card-buttons" type="button" onClick={() => { dispatch(addReservation(rocketId)); }}>Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketId: propTypes.number.isRequired,
  rocketName: propTypes.string.isRequired,
  rocketDetails: propTypes.string.isRequired,
  rocketsImageUrl: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};

export default RocketCard;
