import {combineReducers} from 'redux';
import SelectedOrderReducer from './reducer-selected-order';
import LastOrders from './reducer-last-orders';
import BestOrders from './reducer-best-sellers';
import LastComments from './reducer-last-comments';
import SelectedComment from './reducer-selected-Comment';

const allReducers = combineReducers({
    lastOrders: LastOrders,
    selectedOrder: SelectedOrderReducer,
    bestOrders: BestOrders,
    selectedComments :SelectedComment,
    lastComments :LastComments
});

export default allReducers;
