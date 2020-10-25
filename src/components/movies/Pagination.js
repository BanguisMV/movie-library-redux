import React from 'react'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Pagination = () => {
    const { page } = useSelector(state => state.page)
    const dispatch = useDispatch()
    let button; //Initialize button variable
    if(page <= 1) {
       button =   <Button 
                    variant="contained" 
                    style={{ backgroundColor:'#441f8a' }}
                    color="primary"
                    onClick={() => dispatch({type: 'PAGE_UP'})}>
                        Page {page + 1} <ArrowForwardIcon style={{fontSize:'1rem', marginLeft:'.5rem'}} />
                    </Button>
    }  else if(page > 499) {
       button = <Button 
                    variant="contained" 
                    color="primary"
                    style={{ backgroundColor:'#441f8a' }}
                    onClick={() => dispatch({type: 'PAGE_DOWN'})}>
                        <ArrowBackIcon style={{fontSize:'1rem', marginRight:'.5rem'}} />  Page {page - 1}
                    </Button>
   } else if ( page > 1 || page < 499) {
       button = 
         <>
             <Button 
                    variant="contained" 
                    color="primary"
                    style={{ backgroundColor:'#441f8a' }}
                    onClick={() => dispatch({type: 'PAGE_DOWN'})}>
                        <ArrowBackIcon  style={{fontSize:'1rem', marginRight:'.5rem'}} />  Page {page - 1} 
                </Button>
           
                <Button 
                    style={{ backgroundColor:'#441f8a' }}
                    variant="contained" 
                    color="primary"
                    onClick={() => dispatch({type: 'PAGE_UP'})}>
                        Page {page + 1} <ArrowForwardIcon style={{fontSize:'1rem', marginLeft:'.5rem'}}/>
                </Button>
       </>
   }
    return (
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%', margin:'2rem'}}>
            {button}
        </div>
    )
}

export default Pagination
