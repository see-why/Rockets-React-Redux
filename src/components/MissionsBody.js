import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/mission';
import styles from '../css/missionsBody.module.css';

const MissionsBody = ({ mission }) => {
  const dispatch = useDispatch();

  const join = (id) => {
    dispatch(joinMission(id));
  };

  const leave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <tr key={mission.id} id={mission.id} className={styles.mission}>
      <td className={styles.name}><strong>{mission.name}</strong></td>
      <td className={styles.description}>{mission.description}</td>
      <td className={styles.badges}>
        {mission.reserved && (
          <p className={styles.bdgActive}>Active Member</p>
        )}
        {!mission.reserved && (
          <p className={styles.bdg}>NOT A MEMBER</p>
        )}
      </td>
      <td className={styles.btns}>
        {mission.reserved && (
          <button className={styles.btnActive} type="button" onClick={() => leave(mission.id)}>Leave Mission</button>
        )}
        {!mission.reserved && (
          <button className={styles.btn} type="button" onClick={() => join(mission.id)}>Join Mission</button>
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
