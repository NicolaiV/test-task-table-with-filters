import {
  setEndDate,
  setName,
  setStartDate,
  swapActiveFilter,
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
    [swapActiveFilter]: (state) => ({
      ...state,
      active: !state.active,
    }),
  },
  defaultState
);

export default filter;
