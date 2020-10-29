import React, { useEffect, useState, Fragment } from 'react'
import Helmet from 'react-helmet';
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
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [cast, setCast] = useState();
    const [images, setImages] = useState();
    const [open, setOpen] = useState(false);
    const [ didImageLoaded, setImageLoaded ] = useState(false)

    const handleClose = () => setOpen(false);
    const handleToggle = () => setOpen(!open);

    const { page } = queryString.parse(location.hash)
    const { id } = props.match.params
    console.log(movie);

// Trying this Promise.all thingy.
useEffect(() => {
    Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`).then(res => res.json()),
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=${page ? page : 1}`).then(res => res.json()),
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&page=${page ? page : 1}`).then(res => res.json()),
        fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json()),
    ]).then(res => {
        setMovie(res[0])
        setSimilarMovies(res[1].results)
        setCast(res[2])
        setImages(res[3])
        setLoading(false)
    })
},[page,id])
 const OfficialTrailer = movie && movie.videos && movie.videos.results.filter(video => video.type === 'Trailer')
    
    return (
<Fragment>
        <Grid container spacing={3} className={loading ? styles.loading : styles.movie}>
                <Helmet>
                    <title>{movie && movie.original_title ? movie.original_title : '...'}</title>
                    <meta name={movie && movie.original_title ? movie.original_title : '...'} content={movie ? movie.overview : ""} />
                </Helmet>
        { loading ?  <div className='Spinner'><CircularProgress/></div> :
            <>
                <Grid item xs={12}  md={8} className={ styles.overviewContainer }>
                    <Poster movie={movie} images={images} />
                    <Details movie={movie} />
                    <CTA movie={movie} handleToggle={handleToggle}/>
                    <Trailer open={open} handleClose={handleClose} OfficialTrailer={OfficialTrailer} movie={movie} />
                </Grid>
                <Related movie={movie} cast={cast} images={images}/>
            </>
        }
        </Grid>

    { movie && similarMovies !== 0 ?  
        <Cards 
            isLoading={loading}
            isRecommended
            didImageLoaded={didImageLoaded}
            setImageLoaded={setImageLoaded}
            data={similarMovies} 
            title='Recommendations' /> 
            : similarMovies && similarMovies.length === 0 && <Typography variant="h6" > No Recommendation </Typography> }
</Fragment>

    )
}

export default Movie

