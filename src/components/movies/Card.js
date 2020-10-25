import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import Pagination from './Pagination';
import Helmet from 'react-helmet';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './movies.module.css';
import LazyLoad from 'react-lazyload';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
      avatarLoader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
  }));

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

  const Cards = ({ data, setImageLoaded, didImageLoaded, title, isLoading }) => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <Fragment>
            <Helmet>
                <title>{toTitleCase(title)}</title>
            </Helmet>
        {isLoading ? <CircularProgress className={styles.spinner}/> : <h1 className={styles.page}>{toTitleCase(title)}</h1>}
            <Grid container spacing={6}>
                {data.map(movie => (    
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id} className={styles.grid}>
                                <Card className={styles.card} onClick={() => history.push(`movie/${movie.id}`)}>
                                    <LazyLoad height={200} offset={100}>
                                            <CardMedia
                                                component="img"
                                                alt={movie.original_title}
                                                height="100%"
                                                className={ didImageLoaded ? styles.loaded : styles.loading }
                                                image={movie.poster_path ? `https://image.tmdb.org/t/p/w780/${movie.poster_path}` : 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=338&ext=jpg'}
                                                title={movie.original_title}
                                                onLoad={() => setImageLoaded(true)}
                                            />
                                    </LazyLoad>
                                {didImageLoaded ? null : <Skeleton animation='wave' variant="rect" className={classes.avatarLoader} /> }   
                                </Card>
                                    <Typography gutterBottom variant="h6" component="h6"> {movie.original_title} </Typography>
                                    <Rating name="half-rating-read" value={(movie.vote_average / 2)} precision={0.5} 
                                    readOnly className={styles.rating} />
                            </Grid>
                    ))}
                { isLoading ? null : <Pagination /> }
                </Grid>
        </Fragment>
    )
}

export default Cards