import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import BackButton from './components/hoc/BackButton';
import SideNav from './components/sidebar/AppBar';
import Movie from './components/movie/container/Movie';
import Genre from './components/movies/container/Genre';
import Discover from './components/movies/container/Discover';
import SearchResult from './components/movies/container/SearchResult';
import PageNotFound from './components/movies/dumb/NotFound';
import { Discovers, Categories } from './components/sidebar/Categories';
import Scroll from './components/hoc/Scroll';
import Person from './components/person/Person';

const rootStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}));

const App = (props) => {
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
                <BackButton >
                  <Route exact path='/results' component={SearchResult} />
                  <Route exact path='/movie/:id' component={Movie} />
                  <Route exact path='/person/:id' component={Person} />
              </BackButton>
              <Route path='*' component={PageNotFound} />
            </Switch>
        </main>
      </Scroll>
    </div>
  );
}


export default App;