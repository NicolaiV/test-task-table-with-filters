import { createAction } from 'redux-actions';
import activity from '../fixtures/activity.json';

export const setList = createAction('SET_LIST');
export const setActivityForUser = createAction('SET_START_DATE');
export const setLoading = createAction('SET_LOADING');

export const setActive = (id, value) => (dispatch) =>
  dispatch({
    id,
    value,
  });

const filterData = (filterValue) => {
  return activity.filter((item) => {
    const rightActivity = item.active === filterValue.active;
    const rightName =
      filterValue.name === '' ||
      item.name.indexOf(filterValue.name) !== -1;

    return rightActivity && rightName;
  });
};

const simulateFetch = (filter) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(filterData(filter)), 100);
  });
};

export const fetchEmployee = (filter) => async (dispatch) => {
  await dispatch(setLoading(true));
  const data = await simulateFetch(filter);
  await dispatch(setList(data));
};
