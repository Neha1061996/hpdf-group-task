import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


const style = {
  height: 70,
  width: "100%",
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
};




const App = () => (
  <div>
    
    <Paper style={style} zDepth={1} >
	<span style={{fontFamily: 'Risque',fontSize:40}}><b> E-ELECTION APP</b><span style={{marginLeft:700}}><FlatButton label="LOGIN"  /><FlatButton label="REGISTER" />
      <FontIcon className="muidocs-icon-action-home" />
    
    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton></span>
</span>
	
	  
	</Paper>
  </div>
);

export default App;