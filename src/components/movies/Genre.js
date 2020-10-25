import React,{ useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMoviesByGenre } from '../../redux/actions/getManyMovies';
import Cards from './Card';
import styles from './movies.module.css';
import { Categories } from '../sidebar/Categories';


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
                <Cards data={movies} 
                title={name}
                isLoading={loading}
                setImageLoaded={setImageLoaded} 
                didImageLoaded={imageLoaded}/>
        </div>
    )
}

export default withRouter(Genre)
