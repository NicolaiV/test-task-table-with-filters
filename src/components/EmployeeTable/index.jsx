import { useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchEmployee, setActive } from '../../actions/employee';
import moment from 'moment';

const timeLabel = (value) => {
  const tempTime = moment.duration(value);
  return `${tempTime.hours()}:${tempTime.minutes()}:${tempTime.seconds()}`;
};

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
  const ratio = productive / unproductive;

  return (
    <tr>
      <td>{item.name}</td>
      <td>{timeLabel(clockedIn)}</td>
      <td>{timeLabel(productive)}</td>
      <td>{timeLabel(unproductive)}</td>
      <td>{ratio}</td>
      {/*} <td>23</td>*/}
    </tr>
  );
};

const EmployeeTable = ({
  items = [],
  setActive,
  fetchEmployee,
  filter,
}) => {
  useEffect(() => {
    fetchEmployee(filter);
  }, [fetchEmployee, filter]);

  const renderItem = useCallback((item) => {
    return <Item item={item} />;
  }, []);
  return (
    <table class="table" border="1">
      <caption>Employee table</caption>
      <tr>
        <th>Name</th>
        <th>Total Clocked-in time</th>
        <th>Total Productive time</th>
        <th>Total Unproductive time</th>
        <th>Productivity ratio </th>
        {/*  <th>Activate/Deactivate button </th>*/}
      </tr>
      {items.map(renderItem)}
    </table>
  );
};

const mapState = (state) => ({
  items: state?.employee?.list,
  filter: state?.filter,
});

const mapDispatch = {
  setActive,
  fetchEmployee,
};

export default connect(mapState, mapDispatch)(EmployeeTable);
