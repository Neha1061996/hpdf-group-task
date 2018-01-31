import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
	
  errorStyle: {
	   marginLeft: 300,
  textAlign: 'center',
  display: 'inline-block',
    color: orange500,
  },
  underlineStyle: { marginLeft: 300,
  textAlign: 'center',
  display: 'inline-block',
    borderColor: orange500,
  },
  floatingLabelStyle: { marginLeft: 300,
  textAlign: 'center',
  display: 'inline-block',
    color: orange500,
  },
  floatingLabelFocusStyle: { marginLeft: 300,
  textAlign: 'center',
  display: 'inline-block',
    color: blue500,
  },
};

const Profile= () => (
   <div style={{backgroundColor:"#B2EBF2",height:500,width:1300}}>
     <b><TextField n
      hintText="NAME::"
      errorText="*"
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="gender::"
      errorText="*"
      errorStyle={styles.errorStyle}
    /><br />
	 <TextField
      hintText="VoterId::"
      errorText="*"
      errorStyle={styles.errorStyle}
    
    /><br />
	 <TextField
      hintText="Mobile::"
      errorText="*"
      errorStyle={styles.errorStyle}
    
    /><br />
	 <TextField
      hintText="Age::"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
   
    /></b>
  </div>
);

export default Profile;