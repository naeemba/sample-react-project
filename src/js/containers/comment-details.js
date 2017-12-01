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
import {selectedComments} from "../actions/index";


class CommentDetail extends Component {

    handleClose() {
        this.props.selectedComments(null);
    }


    render() {
        if(!this.props.comments) {
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
                className="comment-dialog"
                title="Comment details"
                actions={actions}
                modal={true}
                open={true}>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn
                                style={{width:'2rem'}}
                            >ID</TableHeaderColumn>
                            <TableHeaderColumn
                                style={{width:'3rem'}}
                            >User</TableHeaderColumn>
                            <TableHeaderColumn>Subject</TableHeaderColumn>
                            <TableHeaderColumn>Body</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        <TableRow>
                            <TableRowColumn
                                style={{width:'1rem'}}
                            >{this.props.comments.commentId}</TableRowColumn>
                            <TableRowColumn
                                style={{width:'5rem'}}
                            >{this.props.comments.customer.firstName} {this.props.comments.customer.lastName}</TableRowColumn>
                            <TableRowColumn
                                style={{height:'fit-content' , whiteSpace: 'pre-wrap'}}
                            >{this.props.comments.body}</TableRowColumn>
                            <TableRowColumn
                                style={{height:'fit-content' ,whiteSpace: 'pre-wrap'}}
                            >{this.props.comments.subject}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Dialog>
        );
    }

}

function mapStateToProps(state) {
    return {
        comments: state.selectedComments
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedComments: selectedComments}, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(CommentDetail)