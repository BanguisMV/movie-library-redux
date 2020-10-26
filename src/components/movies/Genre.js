import React,{ useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { getMoviesByGenre } from '../../redux/actions/getManyMovies';
import Cards from './Card';
import styles from './movies.module.css';
import { Categories } from '../sidebar/Categories';
import queryString from 'query-string';


const Genre = (props) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [imageLoaded, setImageLoaded] = useState(false)

     // Some deconstruction
    const { id, name } = Categories.find(category => props.location.pathname === '/'+category.name.toLowerCase())
    const { page } = queryString.parse(location.hash)
    const { movies, loading, sort } = useSelector(state => state.movies)
    
    useEffect(() => {
        dispatch(getMoviesByGenre(id,page))
    },[page,dispatch,props.history,id,sort ])

    return (
        <div className={styles.root}>
            
                <Cards data={movies} 
                title={name}
                isGenre={true}
                isLoading={loading}
                setImageLoaded={setImageLoaded} 
                didImageLoaded={imageLoaded} />
        </div>
    )
}

export default Genre
