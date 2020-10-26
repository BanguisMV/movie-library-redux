import React,{ useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesByDiscover } from '../../redux/actions/getManyMovies';
import { Discovers } from '../sidebar/Categories';
import styles from './movies.module.css';
import Cards from './Card';
import queryString from 'query-string';


const DiscoverMovies = (props) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [imageLoaded, setImageLoaded] = useState(false)

    // Some deconstruction
    const { movies, loading } = useSelector(state => state.movies)
    const { id, name } = Discovers.find(discover => props.location.pathname === '/'+discover.name.toLowerCase())
    const { page } = queryString.parse(location.hash)
    
    useEffect(() => {
        dispatch(getMoviesByDiscover(id,page))
    },[page,dispatch,id,props.history])

    return (
        <div className={styles.root}>
            <Cards data={movies} 
                title={name}
                isLoading={loading}
                setImageLoaded={setImageLoaded} 
                didImageLoaded={imageLoaded}/>
        </div>
    )
}

export default DiscoverMovies
