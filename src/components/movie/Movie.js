import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/actions/getOneMovie';
import { withRouter } from 'react-router-dom';
import styles from './movie.module.css';
import { CardMedia } from '@material-ui/core';

const Movie = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const { id } = props.match.params
    const {loading, error, movie} = useSelector(state => state.movie)

    console.log(movie);
    const fetchMovie = useDispatch()
    useEffect(() => {
        fetchMovie(getMovie(id))
    },[fetchMovie,id])
    return (
        <div className={styles.movie}>
            <Helmet>
                <title>{movie.original_title}</title>
                <meta name="description" content={movie.overview} />
            </Helmet>
     
            <div className={styles.imageContainer}>
                <img 
                className={styles.image}
                onLoad={() => setImageLoaded(true)}
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} 
                alt={movie.original_title} 
                />
            </div>
            <h1>asdasd</h1>
        </div>
    )
}

export default withRouter(Movie)
