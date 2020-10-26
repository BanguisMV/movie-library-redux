import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideNav from './components/sidebar/AppBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movie from './components/movie/Movie';
import Genre from './components/movies/Genre';
import Discover from './components/movies/Discover';
import SearchResult from './components/movies/SearchResult';
import PageNotFound from './components/movies/NotFound';
import { Discovers, Categories } from './components/sidebar/Categories';
import Scroll from './components/hoc/Scroll';
const rootStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}));

const ResponsiveDrawer = (props) => {
const classes = rootStyle();

  return (
    <div className={classes.root}>
      <Scroll>
      <CssBaseline />
        <SideNav />
        <main className='content'>
          <div className={classes.toolbar} />
          <Switch>
              <Route exact path="/" render={() => <Redirect to="/popular" />} />
              {Discovers.map(discover => (<Route exact path={`/${discover.name.toLowerCase()}`} key={discover.id} component={Discover} />))}
              {Categories.map(category => (<Route exact path={`/${category.name.toLowerCase()}`} key={category.id} component={Genre} />))}
              <Route exact path='/results' component={SearchResult} />
              <Route exact path='/movie/:id' component={Movie} />
              <Route path='*' component={PageNotFound} />
            </Switch>
        </main>
      </Scroll>
    </div>
  );
}


export default ResponsiveDrawer;