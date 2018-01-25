import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 350,
  width: 350,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage:'url(http://ste.india.com/sites/default/files/2017/02/21/573156-bmc-polls.jpg)'
};

const Left = () => (
  <div>
  <br/><br/>
    <Paper style={style} zDepth={1} circle={true} />
    
  </div>
);

export default Left;