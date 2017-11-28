import React ,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


export  default class UpperCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    render() {
        return (
            <Card expanded={this.state.expanded} >
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="../images/user.jpeg"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    <Toggle
                        toggled={this.state.expanded}
                        labelPosition="right"
                        label="This toggle controls the expanded state of the component."
                    />
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <div classID="bottomRight">
                    <CardActions>
                        <FlatButton  label="Expand" />
                        <FlatButton label="Reduce"  />
                    </CardActions>
                </div>
            </Card>
        );
    }
}
