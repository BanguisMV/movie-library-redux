import React, {  useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from '../movie.module.css';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import  { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const Related = ({cast, images}) => {
  const history = useHistory()
  const large = useMediaQuery('(min-width:959px)');
  const small = useMediaQuery('(max-width:300px)');
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
    return (
      <Grid item xs={12}  md={4} >
          <Paper className={styles.related}>
              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant={small || large ? 'scrollable' : 'fullWidth'}
                  scrollButtons="auto"
              >
                  <Tab label="Cast"  {...a11yProps(0)}/>
                  <Tab label="Crew" {...a11yProps(1)}/>
                  <Tab label="Posters" {...a11yProps(2)}/>
              </Tabs>
            <TabPanel value={value} index={0}>
                    <div className={styles.cast}>
                            {cast && cast.cast && cast.cast.length !== 0 ? 
                                cast.cast.map(x => (
                            <Avatar alt={x.character} key={x.id} 
                            onClick={() => history.push(`/person/${x.id}`)} 
                            className={styles.castAvatar} 
                            src={`https://image.tmdb.org/t/p/w92/${x.profile_path}`} />
                          )) : null }
                  </div >
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className={styles.cast}>
                        {cast && cast.crew && cast.crew.length !== 0 ? cast.crew.slice(0,50).map(x => (
                            <Avatar alt={x.character} key={x.credit_id} 
                                  onClick={() => history.push(`/person/${x.id}`)} 
                                  className={styles.castAvatar} 
                                  src={`https://image.tmdb.org/t/p/w92/${x.profile_path}`} />
                                )) : cast && cast.crew && cast.crew.length !== 0 ? <h1>Unable to find casts</h1> : <h1>Loading..</h1>}
                 </div >
                    
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className={styles.images}>
                  {images && images.posters && images.posters.length !==0 ? images.posters.slice(0,9).map(img => (
                    <img src={`https://image.tmdb.org/t/p/w92${img.file_path}`} alt={img.file_path} key={img.file_path} />
                  )) : null  }
              </div > 
            </TabPanel>
      </Paper>
    </Grid>

    )
}

export default Related


// Some material UI bloated structures 
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" style={{flexGrow:'1'}} hidden={value !== index} 
    id={`scrollable-auto-tabpanel-${index}`} 
    aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}