import {
  setEndDate,
  setName,
  setStartDate,
  setActive,
} from '../actions/filter';
import { handleActions } from 'redux-actions';

const defaultState = {
  active: true,
  starDate: null,
  endDate: null,
  name: '',
};

const filter = handleActions(
  {
    [setName]: (state, { payload: name }) => ({ ...state, name }),
    [setStartDate]: (state, { payload: startDate }) => ({
      ...state,
      startDate,
    }),
    [setEndDate]: (state, { payload: endDate }) => ({
      ...state,
      endDate,
    }),
    [setActive]: (state, { payload: active }) => ({
      ...state,
      active,
    }),
  },
  defaultState
);

export default filter;
