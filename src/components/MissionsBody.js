import propTypes from 'prop-types';

const MissionsBody = ({ missions }) => (
  <tbody>
    {
      missions.map(({
        mission_id: id, mission_name: name, description, joined,
      }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>
            {description}
          </td>
          <td>
            <span
              title="badge"
              className={`${joined ? 'joined' : ''}`}
            >
              {!joined ? 'NOT A MEMBER' : 'Active Member' }
            </span>
          </td>
          <td>
            <button
              type="button"
              className={`${joined ? 'joined' : ''}`}
            >
              {!joined ? 'Join Mission' : 'Leave Mission' }
            </button>
          </td>
        </tr>
      ))
    }
  </tbody>
);

MissionsBody.propTypes = {
  missions: propTypes.arrayOf(propTypes.any).isRequired,
};

export default MissionsBody;
