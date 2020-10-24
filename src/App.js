import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideNav from './components/sidebar/AppBar';
import Movies from './components/movies/Movies';
import { Route, Switch, Redirect} from 'react-router-dom';
import { getMoviesByDiscover } from './redux/actions/getManyMovies';
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
          
          <Route exact path="/" render={() => <Redirect to="/discover/popular" />} />
          <Route exact path='/discover/:by' component={Discover} />
          <Route exact path='/genre/:id' component={Genre} />
          <Route exact path={`/movie/:id`} component={Movie} />
        </Switch>
      </main>
    </div>
  );
}


export default ResponsiveDrawer;