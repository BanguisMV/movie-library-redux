import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import Pagination from '../dumb/Pagination';
import Helmet from 'react-helmet';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../movies.module.css';
import LazyLoad from 'react-lazyload';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
      selection: {
          display:'flex',
          justifyContent:'space-between',
          alignItems:'flex-start',
          margin:'1rem 0',
          flexWrap:'wrap'
      },
      formControl: {
        margin: theme.spacing(1),
        width: 190,
      },
  }));

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


const Cards = ({ data, setImageLoaded, didImageLoaded, title, isLoading, isGenre, isRecommended }) => {
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()
    const { sort } = useSelector(state => state.movies)
    const handleChange = (e) => dispatch({type:'MOVIES_SORT', payload: {sort: e.target.value}})

    const SortBy =  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Sort By </InputLabel>
                    <Select defaultValue="popularity" 
                    value={sort} 
                    id="grouped-select"  
                    style={{color:' #441f8a'}}
                    onChange={handleChange}>
                        <MenuItem value='popularity'>Popularity</MenuItem>
                        <MenuItem value='release_date'>Release Date</MenuItem>
                        <MenuItem value='revenue'>Revenue</MenuItem>
                        <MenuItem value='vote_average'>Vote Average</MenuItem>
                        <MenuItem value='vote_count'>Vote Count</MenuItem>

                    </Select>
                </FormControl>
    return (
        <Fragment>
            <Helmet>
              {!isRecommended &&  <title>{toTitleCase(title)}</title>}
            </Helmet>
            <div className={classes.selection}>
                {!isLoading && <h1 className={styles.page}>{toTitleCase(title)}</h1>}
                {isGenre && !isLoading ? SortBy : null}
            </div>
            
            {isLoading ? <div className='Spinner'><CircularProgress/></div> :  <Grid container spacing={6}>
                {data.map(movie => (    
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id} className={styles.grid}>
                                <Card className={didImageLoaded ? styles.card : styles.cardLoading }>
                                    <LazyLoad height={200} once>
                                            <CardMedia
                                                component="img"
                                                alt={movie.original_title}
                                                height="100%"
                                                onClick={() => history.push('/movie/'+movie.id)}
                                                className={didImageLoaded ? styles.loaded : styles.loading }
                                                image={movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=338&ext=jpg'}
                                                title={movie.original_title}
                                                onLoad={() => setImageLoaded(true)}
                                            />
                                    </LazyLoad>
                                    <Skeleton variant="rect" className={didImageLoaded ? styles.skeletonLoaded : styles.skeletonLoading } />
                                </Card>
                                    <Typography gutterBottom variant="h6" component="h6"> {movie.original_title} </Typography>
                                    <Rating 
                                    name="half-rating-read" 
                                    max={5} 
                                    value={(movie.vote_average / 2)} 
                                    precision={0.5} 
                                    readOnly className={styles.rating} />
                            </Grid>
                            
                    ))}
                { isLoading || isRecommended ? null : <Pagination /> }
                </Grid> }
        </Fragment>
    )
}

export default Cards
