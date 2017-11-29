import React ,{Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import BarChart from './charts/BarChart';

export  default class BarChartCart extends Component {
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
            <Card
                expanded={this.state.expanded} onExpandChange={this.toggleCard.bind(this)}
                style={{paddingRight: 5, paddingBottom: 15, paddingLeft: 5}}
            >
                <CardHeader
                    title="BarChart"
                    subtitle="Per Month Bar Chart"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{paddingTop: 13, paddingRight: 5, paddingBottom:15, paddingLeft: 5}}
                />
                <BarChart expandable={true}/>
            </Card>
        );
    }
}
