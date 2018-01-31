import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App'
import Left from './left';
import Paragraph from './paragraph';
//import Right from './right';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';
import Para from './para';



ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('root'));
ReactDOM.render(<MuiThemeProvider><Left/></MuiThemeProvider>, document.getElementById('left'));
//ReactDOM.render(<MuiThemeProvider ><Right/ ></MuiThemeProvider>, document.getElementById('right'));
ReactDOM.render(
<div>
  <Carousel autoplay>
    <div ><img src="http://eci.nic.in/eci/images/top_banner_29082017.jpg"/></div>
    <div><img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201703/up-assembly-2-3_647_030417010817_0.jpg"/></div>
    <div><img src="http://images.newindianexpress.com/uploads/user/imagelibrary/2017/12/8/original/EVM_e.jpg"/></div>
    <div><img src="http://media.santabanta.com/images/picsms/2013/sms-4424.jpg"/></div>
  </Carousel>
  <p>hjgkj</p></div>
, document.getElementById('left'));
ReactDOM.render(<MuiThemeProvider><Para/></MuiThemeProvider>, document.getElementById('right'));