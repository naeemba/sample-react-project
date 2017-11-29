import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import SelectedOrderReducer from './reducer-selected-order';
import ActiveUserReducer from './reducer-active-user';
import LastOrders from './reducer-last-orders';
import BestOrders from './reducer-best-sellers';
import LastComments from './reducer-last-comments';
import SelectedComment from './reducer-selected-Comment';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    lastOrders: LastOrders,
    selectedOrder: SelectedOrderReducer,
    bestOrders: BestOrders,
    selectedComments :SelectedComment,
    lastComments :LastComments
});

export default allReducers;
