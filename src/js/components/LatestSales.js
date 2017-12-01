import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectedOrder} from "../actions/index";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

class LatestSales extends Component {

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
        if(this.props.lastOrdersQuery.loading) {
            return (
                <div className='loading' >
                    <img   src={'../../images/loading.gif'} />
                </div>
            )
        }
        return this.props.lastOrdersQuery.allOrders.map((order) => {
            return (
                <MenuItem
                    key={order.orderId}
                    primaryText={order.customer.firstName + ', ' + order.good.title}
                    secondaryText={order.quantity}
                    onClick={() => this.props.selectedOrder(order)}/>
            );
        });
    }

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.toggleCard.bind(this)}>
                <CardHeader
                    title="Latest Sales"
                    actAsExpander={true}
                    showExpandableButton={true}/>
                <CardText expandable={true}>
                    {this.createOrderItems()}
                </CardText>
            </Card>
        );
    }
}

const LAST_SALES_QUERY = gql`
query LastOrdersQuery {
  allOrders (orderBy: orderId_DESC first: 4) {
    orderId
    customer {
      firstName
      lastName
    }
    good {
      title
    }
    amount
    quantity
    totalAmount
  }
}`;

const LastOrdersWithQuery = graphql(LAST_SALES_QUERY, {
    name: 'lastOrdersQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(LatestSales);


function mapStateToProps(state) {
    return {
        lastOrders: state.lastOrders
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedOrder: selectedOrder}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (LastOrdersWithQuery);