import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Election = () => (
  <div  style={{height:430,fontFamily: 'Kavivanar',textAlign:'center' }}> 
<br/>    <br/><br/><br/><h1 style={{color:'#fff'}}><b>ELECTION 1</b></h1><br /><br/><br /><br /><br/>
    <FlatButton label="NOMINATE" primary={true} backgroundColor='#fff' style={{borderRadius:40,marginLeft:10}} hoverColor='#8E24AA'/>
	<FlatButton label="CANDIDATE" primary={true} backgroundColor='#fff' style={{borderRadius:40,marginLeft:10}} hoverColor='#8E24AA'/>
	<FlatButton label="VOTE" primary={true}  backgroundColor='#fff' style={{borderRadius:40,marginLeft:10}} hoverColor='#8E24AA'/>
    
    <br />
    <br />
   
  </div>
);

export default Election;