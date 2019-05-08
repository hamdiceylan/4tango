import React from 'react'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({classes}) => {
  return (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
            4tango.com
        </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
