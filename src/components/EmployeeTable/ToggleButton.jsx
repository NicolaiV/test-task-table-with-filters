import { connect } from 'react-redux';
import { setActiveEmployee } from '../../actions/employee';

const ToggleButton = ({ id, active, setActiveEmployee }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => setActiveEmployee(id, !active)}
    >
      {active ? 'Deactivate' : 'Activate'}
    </button>
  );
};

export default connect(null, { setActiveEmployee })(ToggleButton);
