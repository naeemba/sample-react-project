import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {bindActionCreators} from 'redux';
import {selectedOrder} from "../actions/index";


class OrderDetail extends Component {

    handleClose() {
        this.props.selectedOrder(null);
    }

    render() {
        if(!this.props.order) {
            return (
                <div></div>
            );
        }

        const actions = [
            <FlatButton
                label="Dismiss"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose.bind(this)}
            />
        ];

        return (
            <Dialog
                className="order-dialog"
                title="Order details"
                actions={actions}
                modal={true}
                open={true}>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Customer</TableHeaderColumn>
                            <TableHeaderColumn>Good</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                            <TableHeaderColumn>Quantity</TableHeaderColumn>
                            <TableHeaderColumn>Total Amount</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        <TableRow>
                            <TableRowColumn>{this.props.order.orderId}</TableRowColumn>
                            <TableRowColumn>{this.props.order.customer.firstName + ' ' + this.props.order.customer.lastName}</TableRowColumn>
                            <TableRowColumn>{this.props.order.good.title}</TableRowColumn>
                            <TableRowColumn>{this.props.order.amount}</TableRowColumn>
                            <TableRowColumn>{this.props.order.quantity}</TableRowColumn>
                            <TableRowColumn>{this.props.order.totalAmount}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Dialog>
        );
    }

}

function mapStateToProps(state) {
    return {
        order: state.selectedOrder
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedOrder: selectedOrder}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OrderDetail)