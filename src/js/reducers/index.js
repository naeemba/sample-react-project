import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import SelectedOrderReducer from './reducer-selected-order';
import ActiveUserReducer from './reducer-active-user';
import LastOrders from './reducer-last-orders';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    lastOrders: LastOrders,
    selectedOrder: SelectedOrderReducer
});

export default allReducers;
