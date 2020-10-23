import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import SideNav from './components/sidebar/AppBar';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideNav />
      <main className={classes.content}>
       
      
      </main>
    </div>
  );
}


export default ResponsiveDrawer;