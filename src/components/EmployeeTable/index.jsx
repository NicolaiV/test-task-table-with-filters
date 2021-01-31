import { useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from '../../actions/employee';
import moment from 'moment';
import TimeItem from './TimeItem';
import ToggleButton from './ToggleButton';

const Item = ({ item }) => {
  const times = item?.times || [];

  const clockedIn = useMemo(
    () =>
      times.reduce(
        (acc, cur) =>
          acc + moment(cur.clockedOut) - moment(cur.clockedIn),
        0
      ),
    [times]
  );
  const unproductive = useMemo(() => {
    const value = times.reduce(
      (acc, cur) =>
        acc + Number(cur?.unproductiveTime.split('min')[0]) * 60000,
      0
    );

    return value;
  }, [times]);
  const productive = clockedIn - unproductive;
  const ratio = (productive / unproductive).toFixed(2);

  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <TimeItem value={clockedIn} />
      </td>
      <td>
        <TimeItem value={productive} />
      </td>
      <td>
        <TimeItem value={unproductive} />
      </td>
      <td>{ratio}</td>
      <td>
        <ToggleButton id={item?.id} active={item?.active} />
      </td>
    </tr>
  );
};

const EmployeeTable = ({ items = [], fetchEmployee, filter }) => {
  useEffect(() => {
    fetchEmployee(filter);
  }, [fetchEmployee, filter]);

  const renderItem = useCallback((item) => {
    return <Item item={item} key={String(item.id)} />;
  }, []);
  return (
    <table className="table" border="1">
      <caption>Employee table</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Clocked-in time</th>
          <th>Total Productive time</th>
          <th>Total Unproductive time</th>
          <th>Productivity ratio </th>
          <th>Activate/Deactivate button </th>
        </tr>
      </thead>
      <tbody>{items.map(renderItem)}</tbody>
    </table>
  );
};

const mapState = (state) => ({
  items: state?.employee?.list,
  filter: state?.filter,
});

const mapDispatch = {
  fetchEmployee,
};

export default connect(mapState, mapDispatch)(EmployeeTable);
