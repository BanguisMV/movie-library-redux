import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './movies.module.css';
import LazyLoad from 'react-lazyload';

const Cards = ({data}) => {
    return (
        <Fragment>
            {data.map(movie => (    
                    <Grid item  sm={6} md={4} lg={3} key={movie.id} >
                            <Card className={styles.card}>
                            <LazyLoad height={200} offset={100}>
                                    <CardMedia
                                        component="img"
                                        alt={movie.original_title}
                                        height="100%"
                                        image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                        title={movie.original_title}
                                        />
                            </LazyLoad>

                            </Card>
                                <Typography gutterBottom variant="h6" component="h6"> {movie.original_title} </Typography>
                                <Rating name="half-rating-read" value={(movie.vote_average / 2)} precision={0.5} 
                                readOnly className={styles.rating} />
                        </Grid>
                ))}
        </Fragment>
    )
}

export default Cards
