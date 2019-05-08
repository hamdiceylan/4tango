import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Footer from './app/layout/Footer/Footer';
import Header from './app/layout/Header/Header';
import HomePage from './features/HomePage/HomePage'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function App(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Header classes={classes}/>
      <div>
        <Switch>
          <Route exact path='/' component={() => <HomePage styles={styles} classes={classes} />}/>
        </Switch>
        <Route 
          path="/(.+)"
          render ={() => (
            <div>
                <Switch>
                  {/* <Route path='/login' component={EventDetail}/> */}
                </Switch>
            </div>
          )}
          />
      </div>
      <Footer styles={styles.footer} />
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);




