import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
const state = store.getState();

store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: '',
        type: 'code'
    }
})
store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: '',
        type: 'text'
    }
})

console.log(store.getState());