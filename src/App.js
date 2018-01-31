import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import 'antd/dist/antd.css';
//import './index.css';
import { Button } from 'antd';


const style = {
  height: 70,
  width: "100%",
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
};


const styles = {
  height: 30,
  width: "100%",
  margin: 0,
  
  display: 'inline-block',
  backgroundColor:'#006064',
};





const Election = () => (
<div>
  <div>
    
    <Paper style={style} zDepth={1} >
	
	<span style={{fontFamily: 'Risque',fontSize:40, }}>
	<b> E-ELECTION APP</b>
	<span style={{marginLeft:700}}><FlatButton label="LOGIN"  />
	<FlatButton label="REGISTER" /></span>
      <FontIcon className="muidocs-icon-action-home" />
    
    <span> 
      <IconButton tooltip="profile">
    
      <ActionHome />
    </IconButton></span>
</span>
	
	  
	</Paper>
  </div>
  <div>
  <Paper style={styles} zDepth={5} >
  <span > <Button type="primary" style={{marginLeft:10}}>Home</Button>
   <Button type="primary"style={{marginLeft:50}}>Election</Button>
    <Button type="primary"style={{marginLeft:50}}>Result</Button>
	 <Button type="primary"style={{marginLeft:50}}>FAQs</Button>
	 <Button type="primary"style={{marginLeft:750}}>About Us</Button></span>
  </Paper>
  </div>
  </div>
);

export default Election;