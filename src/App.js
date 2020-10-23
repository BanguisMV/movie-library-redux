import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideNav from './components/sidebar/AppBar';
import { useDispatch } from 'react-redux';
import { getMoviesByDiscover } from './redux/actions/getManyMovies';
import Movies from './components/movies/Movies';

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
  const dispatch = useDispatch()

  const classes = rootStyle();

  useEffect(() => {
    dispatch(getMoviesByDiscover('popular', 1))
},[dispatch])
  return (
    <div className={classes.root}>
      
      <CssBaseline />
      <SideNav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Movies />
      </main>
    </div>
  );
}


export default ResponsiveDrawer;