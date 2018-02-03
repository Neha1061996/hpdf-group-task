import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';


const home= (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">HOME</a>
    </Menu.Item>
	</Menu>
);	

const menu= (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/eci_main1/ByeElec2018/rajasthan.html">Current election </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/archive/">Past Election</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/eci_main1/FutureElection.aspx">Future Election</a>
    </Menu.Item>
  </Menu>
);

const result = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/eci_main1/bye_elec_results_2018.html">BYE BYE elections Result 2018 </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/eci_main1/bye_elec_results_2017.html">BYE elections Result 2017</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eciresults.nic.in/">State Assembly election 2017</a>
    </Menu.Item>
	<Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/eci_main1/bye_elec_results_2016.html">BYE elections Result 2016</a>
    </Menu.Item>
	<Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://eci.nic.in/eci_main1/ElectionStatistics.aspx">General election Results & statics</a>
    </Menu.Item>
  </Menu>
);



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
	
	<span style={{fontFamily: 'Risque',fontSize:40, backgroundColor:'#E91E63'}}>
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
  <span ><Dropdown overlay={home} placement="topRight">
      <Button type="primary"style={{marginLeft:10, backgroundColor:'#F44336'}}>HOME</Button>
    </Dropdown>
	<Dropdown overlay={menu} placement="topRight">
      <Button type="primary"style={{marginLeft:60, backgroundColor:'#F44336'}}>ELECTIONS</Button>
    </Dropdown>
	<Dropdown overlay={result} placement="topRight">
      <Button type="primary"style={{marginLeft:60, backgroundColor:'#F44336'}}>RESULT</Button>
    </Dropdown>
	<Button type="primary"style={{marginLeft:60, backgroundColor:'#F44336'}} onclick={ <a  href="http://eci.nic.in/eci_main1/the_function.aspx">About us</a>}>About us</Button>
	</span>
  </Paper>
  </div>
  
  
	
  </div>
);

export default Election;