import React,{ useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMoviesByDiscover } from '../../redux/actions/getManyMovies';
import styles from './movies.module.css';

const Discover = (props) => {

    const dispatch = useDispatch()
    const { page }= useSelector(state => state.page)
    const movies = useSelector(state => state.movies)
    let byWhat = props.match.params.by
    if(byWhat === 'top rated') byWhat = 'top_rated';

        useEffect(() => {
            props.history.push(`${window.location.pathname}?page=${page}`)
            dispatch(getMoviesByDiscover(byWhat,page))
        },[page,dispatch,byWhat,props.history])

    return (
        <div className={styles.root}>
            <Grid container spacing={4}>
                {movies.movies.map(movie => (    
                    <Grid item sm={6} md={4} lg={3} key={movie.id} >
                        <Card className={styles.card} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={movie.original_title}
                                    height="90%"
                                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                    title={movie.original_title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h6"> {movie.original_title} </Typography>
                                        <Rating name="half-rating-read" value={(movie.vote_average / 2)} precision={0.5} 
                                        readOnly className={styles.rating} />
                                    </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default withRouter(Discover)
