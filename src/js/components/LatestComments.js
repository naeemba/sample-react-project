import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';


export  default class LatestComments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
        };
    }

    toggleCard () {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.toggleCard.bind(this)}>
                <CardHeader
                    title="Latest Comments"
                    actAsExpander={true}
                    showExpandableButton={true}/>
                <CardText expandable={true}>
                    <MenuItem primaryText="Notification 1" />
                </CardText>
            </Card>
        );
    }
}
