import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {selectedOrder} from "../actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

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
        if(this.props.lastBestSellerQuery.loading) {
            return (
                <div className='loading' >
                    <img   src={'../../images/loading.gif'} />
                </div>
            )
        }
        return this.props.lastBestSellerQuery.allOrders.map((order) => {
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

const LAST_BERST_SALES_QUERY = gql`
query lastBestSellerQuery {
  allOrders (orderBy: totalAmount_DESC first: 4) {
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

const lastBestSellerQuery = graphql(LAST_BERST_SALES_QUERY, {
    name: 'lastBestSellerQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(BestSellers);


function mapStateToProps(state) {
    return {
        bestOrders: state.bestOrders
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedOrder: selectedOrder}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(lastBestSellerQuery);