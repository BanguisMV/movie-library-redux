import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideNav from './components/sidebar/AppBar';
import { Route, Switch, Redirect} from 'react-router-dom';
import Movie from './components/movie/Movie';
import Genre from './components/movies/Genre';
import Discover from './components/movies/Discover';

const rootStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ResponsiveDrawer = (props) => {
const classes = rootStyle();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <SideNav />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/genre" render={() => <Redirect to="/genre/action" />} />
            <Route exact path="/" render={() => <Redirect to="/discover/popular" />} />
            <Route exact path="/discover" render={() => <Redirect to="/discover/popular" />}/>
            <Route exact path='/discover/:by' component={Discover} />
            <Route exact path='/genre/:id' component={Genre} />
            <Route exact path='/movie/:id' component={Movie} />
            <Route path='*' render={() => <h1>Error</h1>} />

          </Switch>
        </main>
    </div>
  );
}


export default ResponsiveDrawer;