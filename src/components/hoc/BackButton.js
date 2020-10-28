import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const BackButton = (props) => {
    const history = useHistory()
    return (
        <Fragment>
            <Button 
                    variant="contained" 
                    color="primary"
                    style={{ backgroundColor:'#441f8a', position:'fixed', bottom:'0',right:'0', zIndex:'100', margin:'1rem'}}
                    onClick={() => history.goBack()}>
                    <ArrowBackIcon  style={{fontSize:'1rem', marginRight:'.5rem'}} /> 
                        Back 
                   </Button>
            {props.children}
        </Fragment>
    )
}

export default BackButton
