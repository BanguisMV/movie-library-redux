import React,{ useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesByDiscover } from '../../redux/actions/getManyMovies';
import { Discovers } from '../sidebar/Categories';
import styles from './movies.module.css';
import Cards from './Card';


const DiscoverMovies = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const dispatch = useDispatch()
    const { page } = useSelector(state => state.page)
    const { movies, loading } = useSelector(state => state.movies)
    const { id, name } = Discovers.find(discover => props.location.pathname === '/'+discover.name.toLowerCase())
        
    useEffect(() => {
            props.history.push(`${window.location.pathname}#page=${page}`)
            dispatch(getMoviesByDiscover(id,page))
        },[page,dispatch,id,props.history])

    return (
        <div className={styles.root}>
            <Cards data={movies} 
                title={name}
                isLoading={loading}
                setImageLoaded={setImageLoaded} 
                didImageLoaded={imageLoaded}
             />
        </div>
    )
}

export default withRouter(DiscoverMovies)
