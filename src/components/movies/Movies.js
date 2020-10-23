import React from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './movies.module.css';

const Movies = () => {
    const movies = useSelector(state => state.movies)
    return (
        <div className={styles.root}>
            <Grid container spacing={4}>
                        {movies.movies.map(movie => (    
                      <Grid item  sm={6} md={4} lg={3} key={movie.id}>
                              <Card className={styles.card}>
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
                                    <Rating name="half-rating-read" value={(movie.vote_average / 2)} precision={0.5} readOnly className={styles.rating} />
                                  </CardContent>
                                </CardActionArea>
                          </Card>
                        </Grid>
                    ))}
            </Grid>
      </div>
    )
}
export default Movies


