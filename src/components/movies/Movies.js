import React, { useEffect } from 'react';
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
      height:'15rem',
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
          {movies.movies.map(movie => (
                    <Grid item xs={12} sm={4} md={3} key={movie.id}>
                        <Paper className={classes.paper}>
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


