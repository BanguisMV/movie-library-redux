import React, { Fragment } from 'react'
import styles from '../movie.module.css';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CircularProgress from '@material-ui/core/CircularProgress';

const Poster = ({movie ,images}) => {
    return (
        <Fragment>

            <Carousel showArrows={true} autoPlay={true} 
                swiping={true} className="slider animated" >
                {images && images.backdrops && images.backdrops.length !== 0 ? images.backdrops.slice(0,15).map(img => (
                    <img src={`https://image.tmdb.org/t/p/w780${img.file_path}`} className={styles.image} alt={img.file_path} key={img.file_path} />
                )) : images && images.backdrops && images.backdrops.length === 0 ? <h1>No image </h1> : <CircularProgress /> }
            </Carousel>

            <div className={styles.info}>
                <Typography className={styles.title} variant="h5"> {movie.original_title ? movie.original_title : ''} </Typography>
                <Typography variant="subtitle2" gutterBottom> {movie.tagline ? movie.tagline : ''}  </Typography>
                <Rating name="half-rating-read" max={5} value={(movie.vote_average / 2)} precision={0.5} readOnly/>
            </div>
            <Divider />   
        </Fragment>
    )
}

export default Poster
