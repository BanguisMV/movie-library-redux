import React,{ useEffect } from 'react'
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMoviesByGenre } from '../../redux/actions/getManyMovies';
import Grid from '@material-ui/core/Grid';
import Cards from './Card';
import styles from './movies.module.css';
import { Categories } from '../sidebar/Categories';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
const Genre = (props) => {
    const dispatch = useDispatch()
    const { id } = Categories.find(category => props.match.params.id === category.name.toLowerCase())
    const { page }= useSelector(state => state.page)
    const { movies,loading } = useSelector(state => state.movies)
    useEffect(() => {
        props.history.push(`${window.location.pathname}?page=${page}`)
        dispatch(getMoviesByGenre(id,'popularity',page))
    },[page,dispatch,props.history,id ])

    return (
        <div className={styles.root}>
              <Helmet>
                <title>{toTitleCase(props.match.params.id)}</title>
            </Helmet>
            <Grid container spacing={6}>
                {loading ? <h1>Loading</h1> : <Cards data={movies} />}
            </Grid>
        </div>
    )
}

export default withRouter(Genre)
