import { createAction } from 'redux-actions';

export const setName = createAction('SET_NAME');
export const setStartDate = createAction('SET_START_DATE');
export const setEndDate = createAction('SET_END_DATE');
export const swapActiveFilter = createAction('SWAP_END_DATE');
