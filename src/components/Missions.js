import React from 'react';
// import { useSelector } from 'react-redux';
// import MissionsBody from './MissionsBody';

//   const { missions } = useSelector((state) => state).missions;
const Missions = () => (
  <section className="missions-section">
    <table className="mission-table">
      <thead>
        <tr>
          <th>Missions</th>
          <th>Descripition</th>
          <th>Status</th>
          <th aria-label="Leave/Join Mission" />
        </tr>
      </thead>
      {/* <MissionsBody missions={missions} /> */}
    </table>
  </section>
);
export default Missions;
