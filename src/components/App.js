import React from  'react';
import UserList from './containers/userList';
import UserDetail from './containers/userDetail';

// require ('../../scss/style.scss');

const  App = ()=>(
    <div>
        <h2>User List :</h2>
        <UserList/>
        <hr/>
        <h3> User Detail :</h3>
        <UserDetail/>
    </div>
);

export default  App;