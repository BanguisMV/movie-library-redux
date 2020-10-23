import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign:'center'
    },
    paper: {
      padding: theme.spacing(2),
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
            textAlign:'center',
      color: theme.palette.text.secondary,
    },
    rating: {
       marginBottom:'5px',
       position:'sticky'
    }
  }));

const Movies = () => {
    const movies = useSelector(state => state.movies)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
<<<<<<< HEAD
              {movies.movies.map(movie => (
                <Grid item xs={12} sm={4} md={3} key={movie.id}>
                    <Paper className={classes.paper}>
=======
          {movies.movies.map(movie => (
                    <Grid item xs={12} sm={4} md={3} key={movie.id}>
                        <Paper className={classes.paper}>
>>>>>>> ec9e1db777d2d1741e98c579c4391ef1b1d0f0b8
                        <img 
                          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                            alt="" style={{width:'100%', height:'100%'}} />
                          <p>{movie.original_title}</p>
                        <Rating name="read-only" value={5} readOnly className={classes.rating} />
                    </Paper>
                </Grid>
              ))}
            </Grid>
      </div>
    )
}
export default Movies


