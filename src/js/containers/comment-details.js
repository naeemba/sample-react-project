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


class CommentDetail extends Component {

    constructor(props) {
        super(props);
    }

    handleClose() {
        if(document.getElementsByClassName('comment-dialog')[0])
            document.getElementsByClassName('comment-dialog')[0].style.display = 'none';
    }

    render() {
        if(!this.props.selectedComments) {
            return (
                <div></div>
            );
        }

        if(document.getElementsByClassName('comment-dialog')[0])
            document.getElementsByClassName('comment-dialog')[0].style.display = '';

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
                            <TableHeaderColumn>subject</TableHeaderColumn>
                            <TableHeaderColumn>body</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        <TableRow>
                            <TableRowColumn
                                style={{width:'2rem'}}
                            >{this.props.selectedComments.commentId}</TableRowColumn>
                            <TableRowColumn
                                style={{width:'3rem'}}
                            >{this.props.selectedComments.person}</TableRowColumn>
                            <TableRowColumn
                                style={{height:'fit-content' ,whiteSpace: 'pre-wrap'}}
                            >{this.props.selectedComments.subject}</TableRowColumn>
                            <TableRowColumn
                                style={{height:'fit-content' , whiteSpace: 'pre-wrap'}}
                            >{this.props.selectedComments.body}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Dialog>
        );
    }

}

function mapStateToProps(state) {
    return {
        selectedComments: state.selectedComments
    }
}

export default connect(mapStateToProps)(CommentDetail)