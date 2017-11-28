import React from 'react';
import UpperCard from './UpperCard';
import LeftCard from './LeftCard';
import RightCard from './RightCard';


import UserDetail from '../containers/user-details';

const MainPage = () => (
    <div>
        <div className="boxedNine">
            <UpperCard/>
        </div>

        <div className="half">
            <div className="halfBox">
                <LeftCard/>
            </div>

            <div className="halfLeftBox">
                <RightCard/>
            </div>
        </div>

        <div className="third">

            <div className="oneThird">
                <RightCard/>
            </div>

            <div className="twoThird">
                <RightCard/>
            </div>

            <div className="laseThird">
                <RightCard/>
            </div>

        </div>
        {/*<h2>User Details:</h2>*/}
        {/*<UserDetail/>*/}
    </div>
);

export default MainPage;