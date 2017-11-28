import React ,{Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import BarChart from './charts/BarChart';

export  default class LeftCard extends Component {

    render() {
        return (
            <Card
                style={{paddingRight: 17, paddingBottom: 15, paddingLeft: 5}}
            >
                <CardHeader
                    title="BarChart"
                    subtitle="Per Month Bar Chart"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{paddingTop: 13, paddingRight: 17, paddingBottom:15, paddingLeft: 5}}
                />
                <BarChart/>
            </Card>
        );
    }
}
