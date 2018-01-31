import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';



const style = {
  height: 130,
  width: "75%",
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor:'#E91E63',
};


const Para = () => (

  <div>
    
    <Paper style={style} zDepth={5} >
	<h1><b>OVERSEAS' VOTERS
	PORTAL</b></h1>
	<img src="http://eci.nic.in/eci/images/voice-25082017.jpg"/>
	<img src="http://eci.nic.in/eci/images/voice-vol4.jpg"/>
	</Paper>
  </div>
  );
export default Para;