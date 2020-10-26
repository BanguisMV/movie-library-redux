import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './movie.module.css';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Route, Switch, useLocation, useHistory, NavLink } from 'react-router-dom';
import Similar from './SimilarMovies';

const Related = ({movie}) => {
  const location = useLocation()
  const history = useHistory()

  console.log(location);
    const large = useMediaQuery('(min-width:959px)');
    const small = useMediaQuery('(max-width:300px)');
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);


    return (
      <Grid item xs={12} md={4}>
          <Paper className={styles.related}>
              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant={small || large ? 'scrollable' : 'fullWidth'}
                  scrollButtons="auto"
                  centered
              >
                  <Tab label="Reviews"  {...a11yProps(0)}/>
                  <Tab label="Gallery" {...a11yProps(1)}/>
                  <Tab label="Recommended"{...a11yProps(2)} />
              </Tabs>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Similar />
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
    <div
      role="tabpanel"
      style={{flexGrow:'1'}}
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}