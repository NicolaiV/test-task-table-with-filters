import { connect } from 'react-redux';
import { swapActiveFilter } from '../../actions/filter';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMeta } from '../../api';
import TimeItem from '../EmployeeTable/TimeItem';

const GeneralSummary = ({ swapActiveFilter, activeFiler }) => {
  const [totalEmployeesNumer, setTotalEmployeesNumer] = useState();
  const [totalClockedIn, setTotalClockedIn] = useState();
  const [totalProductive, setTotalProductive] = useState();
  const [totalUnproductive, setTotalUnproductive] = useState();

  useEffect(() => {
    fetchMeta().then(
      ({ employeesNumer, clockedIn, productive, unproductive }) => {
        setTotalEmployeesNumer(employeesNumer);
        setTotalClockedIn(clockedIn);
        setTotalProductive(productive);
        setTotalUnproductive(unproductive);
      }
    );
  }, [
    setTotalEmployeesNumer,
    setTotalClockedIn,
    setTotalProductive,
    setTotalUnproductive,
  ]);

  return (
    <div>
      <button onClick={swapActiveFilter}>
        {activeFiler ? 'Active employees' : 'Inactive employees'}
      </button>
      <p>Total number of employees: {totalEmployeesNumer}</p>
      <p>
        Total Clocked In time: <TimeItem value={totalClockedIn} />
      </p>
      <p>
        Total Productive time: <TimeItem value={totalProductive} />
      </p>
      <p>
        Total Unproductive time:{' '}
        <TimeItem value={totalUnproductive} />
      </p>
    </div>
  );
};

const mapState = (state) => ({
  activeFiler: state?.filter?.active,
});

const mapDispatch = {
  swapActiveFilter,
};

export default connect(mapState, mapDispatch)(GeneralSummary);
