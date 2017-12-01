import {combineReducers} from 'redux';
import SelectedOrderReducer from './reducer-selected-order';
import SelectedComment from './reducer-selected-Comment';

const allReducers = combineReducers({
    selectedOrder: SelectedOrderReducer,
    selectedComments :SelectedComment,
});

export default allReducers;
