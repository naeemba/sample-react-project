import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import DefaultTheme from './DefaultTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

require('../../css/style.css');

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <DefaultTheme />
    </MuiThemeProvider>
);

export default App;