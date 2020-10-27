import React, { useEffect, useState, Fragment } from 'react'
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, getSimilarMovie, getCast, getImages } from '../../../redux/actions/getOneMovie';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styles from '../movie.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Related from './Related';
import Trailer from '../dumb/Trailer';
import Poster from '../dumb/Poster';
import Details from '../dumb/Details';
import CTA from '../dumb/CTA';
import Grid from '@material-ui/core/Grid';
import Cards from '../../movies/container/Card'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';


const Movie = (props) => {
    const location = useLocation()
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleToggle = () => setOpen(!open);
    
    const { page } = queryString.parse(location.hash)
    const { loading, movie, similarMovies,cast, images } = useSelector(state => state.movie)
    const [ didImageLoaded, setImageLoaded ] = useState(false)
    const { id } = props.match.params

    const fetchMovie = useDispatch()

    useEffect(() => {
        fetchMovie(getMovie(id))
        fetchMovie(getSimilarMovie(id,page))
        fetchMovie(getCast(id,page))
        fetchMovie(getImages(id))
    },[fetchMovie,id,page])

 const OfficialTrailer = movie && movie.videos && movie.videos.results.filter(video => video.type === 'Trailer')
 
    return (
<Fragment>
        <Grid container spacing={3} className={loading ? styles.loading : styles.movie}>
                <Helmet>
                    <title>{movie.original_title}</title>
                    <meta name={movie.overview} content={movie.overview} />
                </Helmet>
        {loading ? <CircularProgress /> :
            <>
                <Grid item xs={12}  md={8} className={styles.overviewContainer }>
                    <Poster movie={movie} images={images} />
                    <Details movie={movie} />
                    <CTA movie={movie} handleToggle={handleToggle}/>
                    <Trailer open={open} handleClose={handleClose} OfficialTrailer={OfficialTrailer} movie={movie} />
                </Grid>
                <Related movie={movie} cast={cast} images={images}/>
            </>
        }
        </Grid>

        {movie && similarMovies && similarMovies.results && similarMovies.results.length !== 0 ?  <Cards 
            isLoading={loading}
            isRecommended
            didImageLoaded={didImageLoaded}
            setImageLoaded={setImageLoaded}
            data={similarMovies.results} 
            title='Recommendations' 
        /> : movie && similarMovies && similarMovies.results && similarMovies.results.length === 0 ? <Typography variant="h6" > No Recommendation </Typography> : <CircularProgress className={styles.spinner}/>
        }
       
</Fragment>

    )
}

export default withRouter(Movie)

