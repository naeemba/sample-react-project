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


class OrderDetail extends Component {

    constructor(props) {
        super(props);
    }

    handleClose() {
        if(document.getElementsByClassName('order-dialog')[0])
            document.getElementsByClassName('order-dialog')[0].style.display = 'none';
    }

    render() {
        if(!this.props.selectedOrder) {
            return (
                <div></div>
            );
        }

        if(document.getElementsByClassName('order-dialog')[0])
            document.getElementsByClassName('order-dialog')[0].style.display = '';

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
                            <TableRowColumn>{this.props.selectedOrder.orderId}</TableRowColumn>
                            <TableRowColumn>{this.props.selectedOrder.customer}</TableRowColumn>
                            <TableRowColumn>{this.props.selectedOrder.good}</TableRowColumn>
                            <TableRowColumn>{this.props.selectedOrder.quantity}</TableRowColumn>
                            <TableRowColumn>{this.props.selectedOrder.price}</TableRowColumn>
                            <TableRowColumn>{this.props.selectedOrder.totalAmount}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Dialog>
        );
    }

}

function mapStateToProps(state) {
    return {
        selectedOrder: state.selectedOrder
    }
}

export default connect(mapStateToProps)(OrderDetail)