import React from 'react';
import LatestComments from './LatestComments';
import LatestSales from './LatestSales';
import BestSellers from './BestSellers';
import OrderDetail from '../containers/order-details';
import CommentDetail from '../containers/comment-details';
import PieChartCart from './PieChartCart';
import BarChartCart from './BarChartCart';

const MainPage = () => (
    <div>
        <div className="row-full">

            <div className="oneThird">
                <LatestSales/>
            </div>

            <div className="oneThird">
                <LatestComments/>
            </div>

            <div className="oneThird">
                <BestSellers/>
            </div>

        </div>

        <div className="row-full">
            <div className="half">
                <PieChartCart/>
            </div>

            <div className="half">
                <BarChartCart/>
            </div>
        </div>
        <OrderDetail/>
        <CommentDetail/>

    </div>
);

export default MainPage;