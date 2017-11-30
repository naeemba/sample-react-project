import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {selectedComments} from "../actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';

class LatestComments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
        };
    }

    toggleCard () {
        this.setState({expanded: !this.state.expanded});
    }

    createCommentsItems() {
        return this.props.lastComments.map((comment) => {
            return (
                <MenuItem
                    key={comment.commentId}
                    primaryText={comment.subject}
                    onClick={() => this.props.selectedComments(comment)}/>
            );
        });
    }

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.toggleCard.bind(this)}>
                <CardHeader
                    title="Lase Comments"
                    actAsExpander={true}
                    showExpandableButton={true}/>
                <CardText expandable={true}>
                    {this.createCommentsItems()}
                </CardText>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        lastComments: state.lastComments
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedComments: selectedComments}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LatestComments);