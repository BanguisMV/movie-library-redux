import React, { useState, Fragment} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Categories, Discover } from './Categories';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { SwipeableDrawer } from '@material-ui/core';
import { useDispatch } from 'react-redux';
const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  genre:{
    margin:'1rem 0 0 .8rem',
    color:'#804ddf',
    fontSize:'1rem'
  }
}));

const NavBar = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(prevState => !prevState);

  const loopCategory = (array, path) => {
      return array.map(arr => (
        <ListItem button key={arr.id} 
          component = { NavLink }
          selected = { location.pathname.toLowerCase() === `/${path}/${arr.name.toLowerCase()}` ? true : false } 
          autoFocus = { location.pathname.toLowerCase() === `/${path}/${arr.name.toLowerCase()}` ? true : false } 
          to={`/${path}/${arr.name.toLowerCase()}`}>
          <ListItemText primary={arr.name} value={arr.id} />
       </ListItem>
    ))
  }
    const drawer = (
      <div>
        {/* <img src="https://movie.banguismv.wtf/static/media/Poster.66bbb98a.png" alt="" style={{width:'100%'}} /> */}
        <Divider />
        <Typography className={classes.genre} variant="h5" noWrap>
           Discover
          </Typography>
        <List>
            {loopCategory(Discover,'discover')}        
        </List>
        <Divider />
          <Typography className={classes.genre} variant="h5" noWrap>
            Genre
          </Typography>
        <List>
          {loopCategory(Categories,'genre')}        
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <Fragment> 
        <AppBar position="fixed" className={`${classes.appBar} sidebar-scrollbar`} color='secondary'>
            <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie Library 2.0
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
        
        </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            onOpen={handleDrawerToggle}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper}}
            ModalProps={{ keepMounted: true}}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <SwipeableDrawer 
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper, }} 
          variant="permanent" 
          open >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
      </Fragment>
    )
}

export default NavBar
