import React,{ useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesByDiscover } from '../../redux/actions/getManyMovies';
import { Discovers } from '../sidebar/Categories';
import FingerLoader from './HandLoader';
import styles from './movies.module.css';
import Cards from './Card';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


const DiscoverMovies = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const dispatch = useDispatch()

    const { page } = useSelector(state => state.page)
    const { movies,loading } = useSelector(state => state.movies)
    const { id, name } = Discovers.find(discover => props.location.pathname === '/'+discover.name.toLowerCase())
        
    useEffect(() => {
            props.history.push(`${window.location.pathname}?page=${page}`)
            dispatch(getMoviesByDiscover(id,page))
        },[page,dispatch,id,props.history])

    return (
        <div className={styles.root}>
            <Helmet>
                <title>{toTitleCase(name)}</title>
            </Helmet>
            {loading ? <FingerLoader /> : 
                <>
                    <h1 className={styles.page}>{toTitleCase(name)}</h1>
                            <Grid container spacing={4}>
                            <Cards data={movies} 
                            setImageLoaded={setImageLoaded} 
                            didImageLoaded={imageLoaded}/>     
                    </Grid>
                </> 
                }
               
            
        </div>
    )
}

export default withRouter(DiscoverMovies)
