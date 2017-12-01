import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {selectedComments} from "../actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

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
        if(this.props.LastCommentsQuery.loading) {
            return (
                <div className='loading' >
                    <img   src={'../../images/loading.gif'} />
                </div>
            )
        }
        return this.props.LastCommentsQuery.allCommentses.map((comment) => {
            return (
                <MenuItem
                    key={comment.commentId}
                    primaryText={comment.body}
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

const LAST_COMMENT_QUERY = gql`

query LastCommentsQuery {
  allCommentses (orderBy: commentId_DESC first: 4) {
    commentId
    customer {
      firstName
      lastName
    }
    subject
    body
  }
}`;

const LastCommentsWithQuery = graphql(LAST_COMMENT_QUERY, {
    name: 'LastCommentsQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(LatestComments);

function mapStateToProps(state) {
    return {
        lastComments: state.lastComments
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectedComments: selectedComments}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LastCommentsWithQuery);