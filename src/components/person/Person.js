import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import Cards from '../movies/container/Card'
import Divider from '@material-ui/core/Divider';
import queryString from 'query-string';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
const Person = () => {
    const location = useLocation()
    const [ person,  setPerson  ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const [ didImageLoaded, setImageLoaded ] = useState(false)
    const [ profile, setProfile ] = useState(false)

    const { page } = queryString.parse(location.hash)
    const { id } = useParams()

    useEffect(() => {
        Promise.all([
            fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`).then(resp => resp.json()),
            fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_cast=${id}&sort_by=popularity.desc&page=${page ? page : 1}`).then(resp => resp.json())
          ]).then(res => {
            setLoading(false)  
            setPerson(res)
        }).catch(err => console.log(err))
    },[id,page])
// Multiple checkings of loading below hahahha
    return (
        <div>
            <Helmet>
                    <title>{person && person[0] && person[0].name ? person[0].name : 'Loading...'}</title>
                    <meta name="description" content={person && person[0] && person[0].biography} />
            </Helmet>
    {!loading ?
            <>
            {person && person[0] ? 
            <div>
            <Paper className='Profile_Container' >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}  className={profile ?  'Profile_Grid_Hide' : 'Profile_Grid_Show' }>
                        <Avatar 
                        className={profile ? 'Profile_Avatar_Show' :  'Profile_Avatar_Hide' }
                        variant='square'
                        onLoad={() => setProfile(true)}
                        alt={person[0] && person[0].name} 
                        src={`https://image.tmdb.org/t/p/w500/${person[0] && person[0].profile_path}`} /> 
                  
            { !profile ? <Skeleton  
                            className={profile ? 'Profile_Skeleton_Show' : 'Profile_Skeleton_Hide'} 
                            variant="rect" width={210} height={118}     
                        /> : null}
                  </Grid>
                  <Grid item xs={12} sm={8}  className='Profile_Info'>
                   
                   <Typography gutterBottom variant="h5" component="h5">
                       {person[0].name} 
                    </Typography>
                    <p>Also Known As</p>
                    <div style={{display:'flex', flexWrap:'wrap' , justifyContent:'space-around'}}>
                        {person[0] && person[0].also_known_as && person[0].also_known_as.map((aka, index) => ( <Typography key={index} variant="subtitle2" gutterBottom> {index + 1}. {aka} </Typography>))}
                    </div>
                    <p>Born: {person[0].birthday} in {person[0].place_of_birth} </p>
                    <Divider style={{margin:'1rem 0'}} />   

                    <Typography gutterBottom variant="body1" >
                       {person[0].biography} 
                    </Typography>
                   <Button 
                        variant="contained" 
                        color="primary" 
                        href={`https://www.imdb.com/name/${person[0].imdb_id}`}
                        startIcon={<LanguageIcon />}
                        target="_blank" rel="noopener noreferrer"
                        style={{backgroundColor: '#945ed3', margin:'1rem 0'}}>
                            IMDB
                        </Button>
         
                  </Grid>
               </Grid>
            </Paper>

            </div> 
            : <h1>Loading</h1>}
                 { person && person[1] && person[1].results ? 
                <Cards 
                    isRecommended
                    isLoading={loading}
                    title='Also played in' 
                    data={person && person[1] && person[1].results}
                    didImageLoaded={didImageLoaded}
                    setImageLoaded={setImageLoaded}/> : 
                <div className='Spinner_center'> <CircularProgress /> </div>}

             </> : !person && !person[1] && !person[0] ? <div className='Spinner'><h1>Can't Find.</h1></div> :  <div className='Spinner'><CircularProgress/></div> 
        } 
        </div>
    )
}
export default Person
