import React from 'react';
import AppBar from 'material-ui/AppBar';
import MainPage from './MainPage';
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';


export default class DefaultTheme extends React.Component {

    constructor(props) {
        super(props);

        this.state = {isDrawerOpen: false, isOpenNotifications: false};
    }

    toggleDrawer() {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen});
    }

    toggleNotifications(event) {
        this.setState({isOpenNotifications: !this.state.isOpenNotifications});
        this.setState({anchorEl: event.currentTarget});
    }

    closeNotifications() {
        this.setState({isOpenNotifications: false});
    }

    render() {
        return (
            <div className="main-div">
                <AppBar onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)} title="Title">
                    <Badge
                        onClick={this.toggleNotifications.bind(this)}
                        badgeContent={3}
                        style={{paddingTop: 13, paddingRight: 17, paddingBottom: 3, paddingLeft: 5}}
                        badgeStyle={{top: 12, right: 12}}>
                        <IconButton tooltip="Notifications">
                            <NotificationsIcon />
                        </IconButton>
                    </Badge>
                    <Popover
                        open={this.state.isOpenNotifications}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.closeNotifications.bind(this)}>
                        <Menu>
                            <MenuItem primaryText="Notification 1" />
                            <MenuItem primaryText="Notification 2" />
                            <MenuItem primaryText="Notification 3" />
                        </Menu>
                    </Popover>
                </AppBar>

                <MainPage/>

                <Drawer
                    onRequestChange={(isDrawerOpen) => this.setState({isDrawerOpen})}
                    open={this.state.isDrawerOpen}
                    >
                    <AppBar onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}/>
                    <div className="manager-avatar">


                            <Avatar
                                src="../images/manager-avatar.jpg"
                                style={{border:"3px solid rgba(115, 117, 232, 0.64)"}}
                            />
                         <div className="avatarTitle">Mr Manager</div>



                    </div>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>

                </Drawer>
            </div>
        )
    }
}