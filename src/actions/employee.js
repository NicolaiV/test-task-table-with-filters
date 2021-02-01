import { createAction } from 'redux-actions';
import { simulateFetch, updateData } from '../api';

export const setList = createAction('SET_LIST');
export const setActivityForUser = createAction(
  'SET_ACTIVITY_FOR_USER_DATE'
);
export const setLoading = createAction('SET_LOADING');
export const setActive = createAction('SET_ACTIVE_EMPLOYEE');

export const fetchEmployee = (filter) => async (
  dispatch,
  getState
) => {
  await dispatch(setLoading(true));
  const data = await simulateFetch(filter || getState()?.filter);
  await dispatch(setList(data));
};

export const setActiveEmployee = (id, value) => (dispatch) => {
  updateData(id, value);

  dispatch(
    setActive({
      id,
      active: value,
    })
  );

  dispatch(fetchEmployee());
};
