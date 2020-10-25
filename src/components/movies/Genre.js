import React,{ useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMoviesByGenre } from '../../redux/actions/getManyMovies';
import Grid from '@material-ui/core/Grid';
import Cards from './Card';
import FingerLoader from './HandLoader';

import styles from './movies.module.css';
import { Categories } from '../sidebar/Categories';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
const Genre = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    const dispatch = useDispatch()
    const { id, name } = Categories.find(category => props.location.pathname === '/'+category.name.toLowerCase())
    const { page } = useSelector(state => state.page)
    const { movies,loading } = useSelector(state => state.movies)
    useEffect(() => {
        props.history.push(`${window.location.pathname}#page=${page}`)
        dispatch(getMoviesByGenre(id,'popularity',page))
    },[page,dispatch,props.history,id ])

    return (
        <div className={styles.root}>
              <Helmet>
                <title>{toTitleCase(name)}</title>
            </Helmet>
            {loading ?  <FingerLoader /> :
            <> 
             <h1 className={styles.page}>{toTitleCase(name)}</h1>
                <Grid container spacing={6}>
                <Cards data={movies} setImageLoaded={setImageLoaded} 
                                didImageLoaded={imageLoaded}/>
                </Grid>
            </>
            }
        </div>
    )
}

export default withRouter(Genre)
