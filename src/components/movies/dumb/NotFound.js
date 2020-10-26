import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom'  
const useStyles = makeStyles((theme) => ({
    root: {
      color:'#441f8a',
      textAlign:'center',
      padding:'2rem',
      backgroundColor:'inherit',
    },
    button: {
      marginTop:'10rem'
    },
  }));
const NotFound = () => {
    const history = useHistory()
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <h1 style={{textTransform:'uppercase'}}>404 Page not found</h1>
           <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/')}
                style={{ backgroundColor:'#441f8a' }}
                className={classes.button}
                startIcon={<HomeIcon />}
            >
                Home
            </Button>
        </div>
    )
}

export default NotFound
