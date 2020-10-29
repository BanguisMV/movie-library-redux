import React, {Fragment} from 'react'
import styles from '../movie.module.css';
import ReactPlayer from 'react-player'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Trailer = ({movie, OfficialTrailer, open, handleClose}) => {

    let VideoContainer =  <div className={styles.noTrailer}>
                            <h1>CANNOT FIND THE TRAILER.</h1>
                        </div>
                                                
    if(movie && movie.videos && movie.videos.results && OfficialTrailer.length !== 0) {
        VideoContainer = 
        <ReactPlayer 
        controls
        stopOnUnmount={true}
        className={styles.trailer}
        url={`https://www.youtube.com/watch?v=${movie && movie.genres && movie.videos.results && OfficialTrailer[0].key}&enablejsapi=1&origin=${window.location.href}`} />

    } 
    return (
        <Fragment>
            <Backdrop className={styles.backdrop} open={open} onClick={handleClose}>
                {open ? VideoContainer : <div className={styles.noTrailer}> <CircularProgress /></div> }
            </Backdrop>
        </Fragment>
    )
}
// <div className={styles.noTrailer}> <CircularProgress /></div>
export default Trailer
