import React,{Component} from 'react';
import {connect} from 'react-redux';


class userDetail extends  Component {
    render() {
        if(!this.props.user){
            return (
                <div>
                    <p>select User</p>
                </div>
            )
        }
        return (
            <div>
                <p>{this.props.user.first} {this.props.user.last} {this.props.user.age}</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        user : state.activeUser
    }
}

export  default  connect(mapStateToProps)(userDetail);