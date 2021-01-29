import { combineReducers } from 'redux';
import employee from './employee';
import filter from './filter';

const rootReducer = combineReducers({
  employee,
  filter,
});

export default rootReducer;
