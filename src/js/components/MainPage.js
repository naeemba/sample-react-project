import React from 'react';
import UpperCard from './UpperCard';
import LeftCard from './LeftCard';
import RightCard from './RightCard';


import UserDetail from '../containers/user-details';

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
                <LeftCard/>
            </div>

            <div className="half">
                <RightCard/>
            </div>
        </div>
        {/*<h2>User Details:</h2>*/}
        {/*<UserDetail/>*/}
    </div>
);

export default MainPage;