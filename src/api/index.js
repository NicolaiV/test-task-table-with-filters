// API simulation

import activity from '../fixtures/activity.json';
import moment from 'moment';

localStorage.setItem('activity', JSON.stringify(activity));

export const fetchMeta = () => {
  return new Promise((resolve) => {
    const storedActivity = JSON.parse(
      localStorage.getItem('activity')
    );

    const times = storedActivity.reduce(
      (acc, cur) => [...acc, ...cur.times],
      []
    );
    const clockedIn = times.reduce(
      (acc, cur) =>
        acc + moment(cur.clockedOut) - moment(cur.clockedIn),
      0
    );

    const unproductive = times.reduce(
      (acc, cur) =>
        acc + Number(cur?.unproductiveTime.split('min')[0]) * 60000,
      0
    );

    const productive = clockedIn - unproductive;

    resolve({
      employeesNumer: storedActivity.length,
      clockedIn,
      productive,
      unproductive,
    });
  });
};

const dateIsRight = (item, filterValue) => {
  const { startDate, endDate } = filterValue;
  if (!startDate || !endDate) {
    return true;
  }

  const times = item?.times || [];

  for (let i in times) {
    if (times.hasOwnProperty(i)) {
      const time = times[i];
      const rightDate =
        new Date(time.clockedIn).valueOf() >=
          new Date(startDate).valueOf() &&
        new Date(time.clockedIn).valueOf() <=
          new Date(endDate).valueOf();

      console.log(rightDate, {
        cloc: time.clockedIn,
        val: new Date(time.clockedIn).valueOf(),
      });
      if (rightDate) {
        return true;
      }
    }
    return false;
  }
};

const filterData = (filterValue) => {
  const storedActivity = JSON.parse(localStorage.getItem('activity'));
  return storedActivity.filter((item) => {
    const rightActivity = item.active === filterValue.active;
    const rightName =
      filterValue.name === '' ||
      item.name.indexOf(filterValue.name) !== -1;

    const rightDate = dateIsRight(item, filterValue);

    return rightActivity && rightName && rightDate;
  });
};

export const simulateFetch = (filter) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(filterData(filter)), 100);
  });
};

export const updateData = (id, active) => {
  const storedActivity = JSON.parse(localStorage.getItem('activity'));
  const updatedStoredActivity = storedActivity.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        active,
      };
    }
    return item;
  });

  localStorage.setItem(
    'activity',
    JSON.stringify(updatedStoredActivity)
  );
};
