import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {selectedOrder} from "../actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';

class BestSellers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
        };
    }

    toggleCard () {
        this.setState({expanded: !this.state.expanded});
    }

    createOrderItems() {
        return this.props.bestOrders.map((order) => {
            return (
                <MenuItem
                    key={order.orderId}
                    primaryText={order.customer + ', ' + order.good}
                    secondaryText={order.quantity}
                    onClick={() => this.props.selectedOrder(order)}/>
            );
        });
    }

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.toggleCard.bind(this)}>
                <CardHeader
                    title="Best Sellers"
                    actAsExpander={true}
                    showExpandableButton={true}/>
                <CardText expandable={true}>
                    {this.createOrderItems()}
                </CardText>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        bestOrders: state.bestOrders
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedOrder: selectedOrder}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestSellers);