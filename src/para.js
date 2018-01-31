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

const styles = {
  height: 160,
  width: "75%",
  marginTop: 280,
  marginLeft:250,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor:'#CDDC39',
};

const styley = {
  height: 160,
  width: "75%",
  marginTop: 50,
  marginLeft:250,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor:'#CDDC39',
};



const Para = () => (

  <div>
    <div>
    <Paper style={style} zDepth={5} >
	<h1><b>OVERSEAS' VOTERS
	PORTAL</b></h1>
	<img src="http://eci.nic.in/eci/images/voice-25082017.jpg"/>
	<img src="http://eci.nic.in/eci/images/voice-vol4.jpg"/>
	</Paper>
	</div>
	
	<div>
	<Paper style={styles} zDepth={5} >
	<img src="http://eci.nic.in/eci/images/ec_opr.jpg"/>
	<p>Sh. Om Prakash Rawat 
Chief Election Commissioner</p>
	</Paper>
	</div>
	
	<div>
	<Paper style={styley} zDepth={5} >
	<img src="http://eci.nic.in/eci/images/ec-sa.jpg"/>
	<p>Sh. Sunil Arora 
Election Commissioner  </p>
	</Paper>
	</div>
	
	<div>
	<Paper style={styley} zDepth={5} >
	<img src="http://eci.nic.in/eci/images/ec-al.jpg"/>
	<p>Sh. Ashok Lavasa 
Election Commissioner   </p>
	</Paper>
	</div>
	
	
  </div>
  );
export default Para;