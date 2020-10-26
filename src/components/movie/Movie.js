import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/actions/getOneMovie';
import { withRouter } from 'react-router-dom';
import styles from './movie.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import Trailer from './Trailer';
import Poster from './Poster';
import Details from './Details';
import CTA from './CTA';
const Movie = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleToggle = () => setOpen(!open);

    const { loading, error, movie } = useSelector(state => state.movie)
    const [ imageLoaded, setImageLoaded ] = useState(false)
    const { id } = props.match.params

    const fetchMovie = useDispatch()
    useEffect(() => {
        fetchMovie(getMovie(id))
    },[fetchMovie,id])

 const OfficialTrailer = movie && movie.genres && movie.videos.results.filter(video => video.type === 'Trailer')
 
    return (
       
        <div className={loading ? styles.loading : styles.movie}>
                <Helmet>
                    <title>{movie.original_title}</title>
                    <meta name="description" content={movie.overview} />
                </Helmet>
        {loading ? <CircularProgress /> :
            <>
                <div className={styles.imageContainer}>
                    <Poster movie={movie} />
                    <Details movie={movie} />
                    <CTA movie={movie} handleToggle={handleToggle}/>
                    <Trailer open={open} handleClose={handleClose} OfficialTrailer={OfficialTrailer} movie={movie} />
                </div>
                <div className={styles.related}>
                        <h1>To be Filled</h1>
                </div>
            </>
        }
        </div>
    )
}

export default withRouter(Movie)

