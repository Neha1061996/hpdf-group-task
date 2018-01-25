import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import Left from './left';
import Center from './center';



ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('root'));
ReactDOM.render(<MuiThemeProvider><Left/></MuiThemeProvider>, document.getElementById('left'));
ReactDOM.render(<MuiThemeProvider><Center/></MuiThemeProvider>, document.getElementById('center'));
ReactDOM.render(<MuiThemeProvider style={{backgroundImage:'url(http://www.freepressjournal.in/wp-content/uploads/2016/12/Elections.jpg)',height:430,textAlign:'center' }}><h1><b>ELECTION 2</b></h1></MuiThemeProvider>, document.getElementById('right'));

