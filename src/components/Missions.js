import React from 'react';
import { useSelector } from 'react-redux';
import MissionsBody from './MissionsBody';

const Missions = () => {
  const { missions } = useSelector((state) => state);

  console.log(`mission: ${missions}`);

  return (
    <div>
      <table>
        <thead>
          <tr>
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
