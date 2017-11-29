import React ,{Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import PieChart from './charts/PieChart';

export  default class PieChartCart extends Component {

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
            <Card expanded={this.state.expanded} onExpandChange={this.toggleCard.bind(this)}
                  style={{paddingRight: 5, paddingBottom: 15, paddingLeft: 5}}
            >
                <CardHeader
                    title="Item Chart"
                    subtitle="Top Seller Item In This Month"
                    showExpandableButton={true}
                    actAsExpander={true}
                    style={{paddingTop: 13, paddingRight: 5, paddingBottom: 15, paddingLeft: 5}}
                />
                <PieChart expandable={true} />
            </Card>
        );
    }
}