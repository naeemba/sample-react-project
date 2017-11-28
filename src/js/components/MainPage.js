import React from 'react';
import PieChartCart from './PieChartCart';
import BarChartCart from './BarChartCart';
import RightCard from './RightCard';


const MainPage = () => (
    <div>
        <div className="row-full">

            <div className="oneThird">
                <RightCard/>
            </div>

            <div className="oneThird">
                <RightCard/>
            </div>

            <div className="oneThird">
                <RightCard/>
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
        {/*<h2>User Details:</h2>*/}
        {/*<UserDetail/>*/}
    </div>
);

export default MainPage;