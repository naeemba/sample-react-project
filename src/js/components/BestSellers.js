import React ,{Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


export  default class BestSellers extends Component {

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
                    title="Best Sellers"
                    actAsExpander={true}
                    showExpandableButton={true}/>
                <CardText expandable={true}>

                </CardText>
            </Card>
        );
    }
}
