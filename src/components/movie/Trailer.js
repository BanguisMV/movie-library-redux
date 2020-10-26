import React, {Fragment} from 'react'
import styles from './movie.module.css';
import ReactPlayer from 'react-player'
import Backdrop from '@material-ui/core/Backdrop';

const Trailer = ({movie, OfficialTrailer, open, handleClose}) => {
    return (
        <Fragment>
                <Backdrop className={styles.backdrop} open={open} onClick={handleClose}>
                <ReactPlayer 
                className={styles.trailer}
                url={`https://www.youtube.com/watch?v=${movie && movie.genres && movie.videos.results && OfficialTrailer[0].key}&enablejsapi=1&origin=${window.location.href}`} />
            </Backdrop>
        </Fragment>
    )
}

export default Trailer
