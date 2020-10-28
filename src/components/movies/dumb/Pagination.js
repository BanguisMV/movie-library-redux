import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory,useLocation } from 'react-router-dom';
import queryString from 'query-string';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Pagination = () => {
    const history = useHistory()
    const location = useLocation()
    let page = 1
    const current = queryString.parse(location.hash)
    const currentPage = Number(current.page)
    let button;
    if(Number.isNaN(currentPage) ? page <= 1 : currentPage <= 1) {
       button =   <Button 
                    variant="contained" 
                    style={{ backgroundColor:'#441f8a' }}
                    color="primary"
                    onClick={() => {
                        history.push(`${window.location.pathname}#page=${currentPage ? currentPage + 1 : 2 }`)
                    }}>
                        Page {currentPage ? currentPage + 1 : + 2} <ArrowForwardIcon style={{fontSize:'1rem', marginLeft:'.5rem'}} />
                    </Button>
    } else if (page > 499 || currentPage > 499) {
       button = <Button 
                    variant="contained" 
                    color="primary"
                    style={{ backgroundColor:'#441f8a' }}
                    onClick={() => {
                        history.push(`${window.location.pathname}#page=${currentPage ? currentPage - 1 : -1}`)
                        }}>
                        <ArrowBackIcon style={{fontSize:'1rem', marginRight:'.5rem'}} />  Page {currentPage ? currentPage - 1 : -1}
                    </Button>
    } else if ( page > 1 || page < 499) {
       button = 
         <>
            <Button 
                    variant="contained" 
                    color="primary"
                    style={{ backgroundColor:'#441f8a' }}
                    onClick={() => {
                        history.push(`${window.location.pathname}#page=${currentPage ? currentPage - 1 : -1}`)
                        }}>
                        <ArrowBackIcon  style={{fontSize:'1rem', marginRight:'.5rem'}} />  Page {currentPage ? currentPage - 1 : -1} 
                </Button>
            <Button variant="outlined" disabled color="primary"  style={{ outlineColor:'#441f8a' }}>
                        {currentPage}
                    </Button >
            <Button 
                    style={{ backgroundColor:'#441f8a' }}
                    variant="contained" 
                    color="primary"
                    onClick={() => {
                        history.push(`${window.location.pathname}#page=${currentPage ? currentPage + 1 : + 1}`)
                        }}>
                        Page {currentPage ? currentPage + 1 : + 1} <ArrowForwardIcon style={{fontSize:'1rem', marginLeft:'.5rem'}}/>
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
