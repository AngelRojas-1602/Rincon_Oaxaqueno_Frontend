import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RinAppBar from '@material-ui/core/AppBar';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
  },
});

function AppBar(props) {
  return <RinAppBar elevation={0} position="fixed" {...props} />;
}

export default withStyles(styles)(AppBar);
