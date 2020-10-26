import React from 'react'
import styles from '../movie.module.css';
import Button from '@material-ui/core/Button';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
const Poster = ({movie ,handleToggle}) => {
    return (
        <div className={styles.CTA}>
        <Button 
        variant="contained" 
        color="primary" 
        href={movie.homepage ? movie.homepage : null}
        startIcon={<LanguageOutlinedIcon />}
        target="_blank" rel="noopener noreferrer"
        style={{backgroundColor: '#945ed3'}}>
            Official Website
        </Button>
        
        <Button 
        className={styles.TrailerButton}
        onClick={handleToggle}
        variant="contained" 
        color="primary" 
        startIcon={<PlayArrowOutlinedIcon />}
        style={{backgroundColor: '#945ed3'}}>
            Trailer
        </Button>
</div>
    )
}

export default Poster
