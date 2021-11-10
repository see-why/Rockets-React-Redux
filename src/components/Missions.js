import React from 'react';
import { useSelector } from 'react-redux';
import MissionsBody from './MissionsBody';
import styles from '../css/missions.module.css';

const Missions = () => {
  const { missions } = useSelector((state) => state);

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionsBody
              key={mission.id}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
