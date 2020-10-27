import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import Cards from '../movies/container/Card'
import Divider from '@material-ui/core/Divider';
import queryString from 'query-string';

const Person = () => {
    const location = useLocation()
    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(true)
    const [ didImageLoaded, setImageLoaded ] = useState(false)
    const { page } = queryString.parse(location.hash)
    const { id } = useParams()
    useEffect(() => {
        Promise.all([
            fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`).then(resp => resp.json()),
            fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_cast=${id}&sort_by=popularity.desc&page=${page ? page : 1}`).then(resp => resp.json())
          ]).then(res => {
            setLoading(false)  
            setPerson(res)
        })
    },[id,page])

    return (
        <div>
            <Helmet>
                    <title>{person && person[0] && person[0].name ? person[0].name : '...'}</title>
                    <meta name="description" content={person && person[0] && person[0].biography} />
            </Helmet>
            <div>
                info
            </div>
            <Divider />
            {!loading && person && person[1] ?
                <Cards 
                    isRecommended
                    isLoading={loading}
                    title='Movies involved' 
                    data={person && person[1] && person[1].results}
                    didImageLoaded={didImageLoaded}
                    setImageLoaded={setImageLoaded}
                /> :  <h1>Loading</h1> 
            }
           
        </div>
    )
}

export default Person
