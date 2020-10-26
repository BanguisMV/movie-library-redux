import React,{Fragment} from 'react'
import styles from './movie.module.css';
import Typography from '@material-ui/core/Typography';

function addCommas(num) {
    var characters = parseInt(num, 10).toString();
    var output = '';
    for (var offset = characters.length; offset > 0; offset -= 3) {
        output = characters.slice(Math.max(offset - 3, 0), offset) + (output ? ',' + output : '');
    }
    return output;
}


const Details = ({movie}) => {
    return (
        <Fragment>
            <div className={styles.overview}>
                <div className={styles.genre}>
                        <h3>Genre</h3>
                        <div className={styles.genreItems}>
                            {movie && movie.genres && movie.genres.map(genre => ( <Typography key={genre.id} variant="subtitle2" gutterBottom> ◉ {genre.name} </Typography>))}
                        </div>
                </div>  
                 <h3>Plot</h3>
                <Typography variant="subtitle2" gutterBottom> {movie.overview} </Typography>
                <Typography variant="body2"  gutterBottom style={{margin:'1rem 0', textAlign:'center'}}>
                    Runtime: {movie.runtime}min / Revenue: ${addCommas(movie.revenue)} / Language: {movie && movie.genres && movie.spoken_languages[0].name} 
                </Typography>
            </div>
        </Fragment>
    )
}

export default Details
