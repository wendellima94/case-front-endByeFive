import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    width: '10rem',
    height: '2rem',
    backgroundColor: 'var(--inputs)',
    borderRadius: 12,
    border: 0,
    boxShadow: '0px 2px 2px var(--text)',
    margin: '6px 0'
  },
    loggedRoot: {
    width: '30rem',
    backgroundColor: 'var(--inputs)',
    borderRadius: 4,
    boxShadow: '0px 2px 2px var(--text)',
  }
}


export const OutlinedInputStyled = withStyles(styles)(({classes, color, ...other}) => 
<OutlinedInput className={classes.root}{...other}></OutlinedInput>)

export const RegisterInput = withStyles(styles)(({classes, color, ...other}) => 
<TextField className={classes.root}{...other}></TextField>)

export const LoggedInput = withStyles(styles)(({classes, color, ...other}) =>
<TextField className={classes.loggedRoot}{...other}></TextField>
)