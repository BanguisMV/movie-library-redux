import React,{ useEffect } from 'react'
import Helmet from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMoviesByDiscover } from '../../redux/actions/getManyMovies';
import { Discover } from '../sidebar/Categories';
import styles from './movies.module.css';
import Cards from './Card';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
const DiscoverMovies = (props) => {
    const dispatch = useDispatch()
    const { page }= useSelector(state => state.page)
    const { movies,loading } = useSelector(state => state.movies)
    const { id } = Discover.find(discover => props.match.params.by === discover.name.toLowerCase())

        useEffect(() => {
            props.history.push(`${window.location.pathname}?page=${page}`)
            dispatch(getMoviesByDiscover(id,page))
        },[page,dispatch,id,props.history])

    return (
        <div className={styles.root}>
            <Helmet>
                <title>{toTitleCase(props.match.params.by)}</title>
            </Helmet>
            <Grid container spacing={4}>
            {loading ? <h1>Loading</h1> : <Cards data={movies} />}
            </Grid>
        </div>
    )
}

export default withRouter(DiscoverMovies )
