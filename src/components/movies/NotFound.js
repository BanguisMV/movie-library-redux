import React from 'react'
import notFound from '../../404.jpg';
const NotFound = () => {
    return (
        <div className='errorPage'>
           <img src={notFound} alt="404" style={{width:'100%', height:'100%'}} />
        </div>
    )
}

export default NotFound
