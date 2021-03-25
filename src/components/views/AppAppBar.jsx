import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 30,
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    background: '#D26477',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#D0C9FA'
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <img
            alt="Logo"
            src="https://dl.dropboxusercontent.com/s/2rs47l6m7jpsj5b/Rincon%20Oaxaque%C3%B1o_preview_rev_1.png?dl=0"
            width="65"
            height="65"
            className="d-inline-block align-top"
          />{' '}
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'Rincon Oaxaqueño'}
          </Link>

        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
