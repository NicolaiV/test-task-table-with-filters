import {
  setList,
  setActivityForUser,
  setLoading,
  setActive,
} from '../actions/employee';
import { handleActions } from 'redux-actions';

const defaultState = {
  loading: false,
  list: [],
};

const employee = handleActions(
  {
    [setList]: (state, { payload }) => ({
      ...state,
      list: payload,
      loading: false,
    }),
    [setActivityForUser]: (state, { payload: { id, value } }) => ({
      ...state,
      list: state?.list.map((item) => {
        if (item.id === id) {
          item.active = value;
        }
        return item;
      }),
    }),
    [setLoading]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    [setActive]: (state, { payload: { id, active } }) => ({
      ...state,
      list: state.list.map((item) => {
        if (item.id === id) {
          return { ...item, active };
        }
        return item;
      }),
    }),
  },
  defaultState
);

export default employee;
