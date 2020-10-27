import React, { Fragment } from 'react'
import styles from '../movie.module.css';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Poster = ({movie ,images}) => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Fragment>
            <Carousel showArrows={true} autoPlay={true} 
                swiping={true} className="slider animated" >
                {images && images.backdrops && images.backdrops.length !== 0 ? images.backdrops.slice(0,8).map(img => (
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w780${img.file_path}`} alt="" />
                  </div >   
                )) : images && images.backdrops && images.backdrops.length !== 0 ? <h1>No image doung</h1> : <h1>Loading</h1> }
            </Carousel>

            {/* <picture>
                <source media="(max-width:500px)" srcSet={`https://image.tmdb.org/t/p/w780/${movie.poster_path && movie.poster_path !== null ? movie.poster_path : null }`} />
                <source media="(min-width:501px)" srcSet={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path && movie.backdrop_path !== null ? movie.backdrop_path : null }`} />
                <img src="/" alt={movie.original_title} className={styles.image} />
            </picture>  */}

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
