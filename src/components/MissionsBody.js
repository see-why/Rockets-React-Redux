import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/mission';

const MissionsBody = ({ mission }) => {
  const dispatch = useDispatch();

  const join = (id) => {
    dispatch(joinMission(id));
  };

  const leave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <tr key={mission.id}>
      <td><strong>{mission.name}</strong></td>
      <td>{mission.description}</td>
      <td>
        {mission.reserved && (
          <div>Active Member</div>
        )}
        {!mission.reserved && (
          <div>NOT A MEMBER</div>
        )}
      </td>
      <td>
        {mission.reserved && (
          <button type="button" onClick={() => leave(mission.id)}>Leave Mission</button>
        )}
        {!mission.reserved && (
          <button type="button" onClick={() => join(mission.id)}>Join Mission</button>
        )}
      </td>
    </tr>

  );
};

MissionsBody.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionsBody;
