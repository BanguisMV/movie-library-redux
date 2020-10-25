import React,{ useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { getMoviesBySearch } from '../../redux/actions/getManyMovies';
import styles from './movies.module.css';
import Cards from './Card';


const DiscoverMovies = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const dispatch = useDispatch()
    const parsed = queryString.parse(props.location.search)

    const { page } = useSelector(state => state.page)
    const { movies, loading} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getMoviesBySearch(parsed.search, page))
        },[page,dispatch,props.history,parsed.search])
    return (
        <div className={styles.root}>
        
                <Cards data={movies} 
                    isLoading={loading}
                    title={'Results for '+parsed.search}
                    setImageLoaded={setImageLoaded} 
                    didImageLoaded={imageLoaded}
                />
        </div>
    )
}

export default withRouter(DiscoverMovies)
