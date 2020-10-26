import React, { Fragment } from 'react'
import styles from './movie.module.css';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';

const Poster = ({movie}) => {
    return (
        <Fragment>
                  
            <picture>
                <source media="(max-width:500px)" srcSet={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} />
                <source media="(min-width:501px)" srcSet={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
                <img src="/" alt={movie.original_title} className={styles.image} />
            </picture> 

            <div className={styles.info}>
                <Typography className={styles.title} variant="h5"> {movie.original_title} </Typography>
                <Typography variant="subtitle2" gutterBottom> {movie.tagline}  </Typography>
                <Rating name="half-rating-read" max={5} value={(movie.vote_average / 2)} precision={0.5} readOnly/>
            </div>
            <Divider />   

        </Fragment>
    )
}

export default Poster
