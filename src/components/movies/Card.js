import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import Pagination from './Pagination';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './movies.module.css';
import LazyLoad from 'react-lazyload';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
      avatarLoader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
  }));
const Cards = ({ data, setImageLoaded, didImageLoaded }) => {
    const classes = useStyles();
    return (
        <Fragment>
            {data.map(movie => (    
                    <Grid item  sm={6} md={4} lg={3} key={movie.id} className={styles.grid}>
                            <Card className={styles.card}>
                                <LazyLoad height={400} offset={100}>
                                        <CardMedia
                                            component="img"
                                            alt={movie.original_title}
                                            height="100%"
                                            className={didImageLoaded ? styles.loaded : styles.loading }
                                            image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                            title={movie.original_title}
                                            onLoad={() => setImageLoaded(true)}
                                        />
                                </LazyLoad>
                            { didImageLoaded ? null : <Skeleton animation='wave' variant="rect" className={classes.avatarLoader} /> }   
                            </Card>
                                <Typography gutterBottom variant="h6" component="h6"> {movie.original_title} </Typography>
                                <Rating name="half-rating-read" value={(movie.vote_average / 2)} precision={0.5} 
                                readOnly className={styles.rating} />
                        </Grid>
                ))}
        <Pagination />
        </Fragment>
    )
}

export default Cards
