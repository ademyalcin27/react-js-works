import { combineReducers } from 'redux';
import cellReducers from './cellsReducer';

const reducers = combineReducers({
    cells: cellReducers
})
export default reducers;

export type RootState = ReturnType<typeof reducers>;