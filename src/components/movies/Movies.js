import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign:'center',
      padding:'1rem'
    },
    rating: {
       marginBottom:'5px',
       position:'sticky'
    },
    card : {
      height:'auto'
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
                              <Card className={classes.card}>
                                <CardActionArea>
                                  <CardMedia
                                    component="img"
                                    alt={movie.original_title}
                                    height="80%"
                                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                    title={movie.original_title}
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                    {movie.original_title}
                                    </Typography>
                                    <Rating name="read-only" value={(movie.vote_average / 2)} readOnly className={classes.rating} />
                                  </CardContent>
                                </CardActionArea>
                          </Card>
                        </Grid>

                    ))}
              {/* {movies.movies.map(movie => (
                <Grid item xs={12} sm={4} md={3} key={movie.id}>
                    <Paper className={classes.paper}>
                        <img 
                          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                            alt="" style={{width:'100%', height:'100%'}} />
                          <p>{movie.original_title}</p>
                        <Rating name="read-only" value={5} readOnly className={classes.rating} />
                    </Paper>
                </Grid>
              ))} */}
            </Grid>
      </div>
    )
}
export default Movies


