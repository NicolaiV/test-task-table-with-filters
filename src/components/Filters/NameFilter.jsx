import 'react-nice-dates/build/style.css';
import { connect } from 'react-redux';
import { setName } from '../../actions/filter';

const NameFilter = ({ nameFilter, setNameFilter }) => {
  console.log({ nameFilter });
  return (
    <input
      value={nameFilter}
      onChange={(event) => setNameFilter(event.target.value)}
    />
  );
};

const mapState = (state) => ({
  nameFilter: state?.filter?.name,
});

const mapDispatch = {
  setNameFilter: setName,
};

export default connect(mapState, mapDispatch)(NameFilter);
