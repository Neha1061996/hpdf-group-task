import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App'
import Left from './left';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';
import Para from './para';
//import Paperi from './paper';



ReactDOM.render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('root'));
ReactDOM.render(<MuiThemeProvider><Left/></MuiThemeProvider>, document.getElementById('left'));
ReactDOM.render(
<div>
  <Carousel autoplay>
    <div ><img src="http://eci.nic.in/eci/images/top_banner_29082017.jpg"/></div>
    <div><img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201703/up-assembly-2-3_647_030417010817_0.jpg"/></div>
    <div><img src="http://images.newindianexpress.com/uploads/user/imagelibrary/2017/12/8/original/EVM_e.jpg"/></div>
    <div><img src="http://media.santabanta.com/images/picsms/2013/sms-4424.jpg"/></div>
  </Carousel>
  <h1><b>BE BRIGHT Vote For WHAT Is RIght</b></h1>
  <img src="http://eci.nic.in/eci/images/nvd2018.jpg"/><div></div>
  <img src="http://eci.nic.in/eci/images/eci-newsletter_15122015.jpg"/>
  <img src="http://eci.nic.in/eci/images/AE2018.jpg"/></div>
, document.getElementById('left'));
ReactDOM.render(<MuiThemeProvider><Para/></MuiThemeProvider>, document.getElementById('right'));
//ReactDOM.render(<MuiThemeProvider><Paperi/></MuiThemeProvider>, document.getElementById('left'));