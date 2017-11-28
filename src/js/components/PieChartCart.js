import React ,{Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import PieChart from './charts/PieChart';

export  default class LeftCard extends Component {

    render() {
        return (
            <Card
                style={{paddingRight: 17, paddingBottom: 15, paddingLeft: 5}}
            >
                <CardHeader
                    title="Item Chart"
                    subtitle="Top Seller Item In This Month"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{paddingTop: 13, paddingRight: 17, paddingBottom: 15, paddingLeft: 5}}
                />
                <PieChart/>
            </Card>
        );
    }
}
