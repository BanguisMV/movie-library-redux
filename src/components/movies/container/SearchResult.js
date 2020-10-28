import React,{ useEffect, useState } from 'react'
import { useLocation,useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { getMoviesBySearch } from '../../../redux/actions/getManyMovies';
import styles from '../movies.module.css';
import Cards from './Card';


const DiscoverMovies = (props) => {
    const location = useLocation()
    const history = useHistory()
    const { query } = useParams()
    const [imageLoaded, setImageLoaded] = useState(false)
    const dispatch = useDispatch()
    const { page } = queryString.parse(location.hash)
    const { movies, loading, search } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getMoviesBySearch(search ? search : query, page ? page : 1))
        },[dispatch,history,search,page,query])
    return (
        <div className={styles.root}>
                <Cards data={movies} 
                    isLoading={loading}
                    title={'Results for '+search }
                    setImageLoaded={setImageLoaded} 
                    didImageLoaded={imageLoaded}
                />
        </div>
    )
}

export default DiscoverMovies
