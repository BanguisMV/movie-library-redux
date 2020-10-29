import React, { useState, Fragment} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Categories, Discovers } from './Categories';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chilling from './watch.png';
const drawerWidth = 190;

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
    backgroundColor: ' #804ddf',
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
    backgroundColor: '#703ad3',
    transition:'all .4s ease-in-out',
    '&:hover': {
      backgroundColor: '#8e5af0',
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
    const history = useHistory()
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(prevState => !prevState);

  const loopCategory = (array,icon) => {
      return array.map(arr => (
        <ListItem button key={arr.id} 
          component = {NavLink}
          onClick={() => {
            setMobileOpen(false)
            setValue('')
            dispatch({type:'MOVIES_SORT', payload: {sort:'popularity'}})
          }}
          selected = { location.pathname.toLowerCase() === `/${arr.name.toLowerCase()}` ? true : false } 
          autoFocus = { location.pathname.toLowerCase() === `/${arr.name.toLowerCase()}` ? true : false } 
          to={`/${arr.name.toLowerCase()}`}>
         {icon} &nbsp; <ListItemText primary={arr.name} value={arr.id} />
       </ListItem>
    ))
  }
    const drawer = (
      <div className='sidebar'>
        <img src={Chilling} alt="Chilling" style={{width:'100%',padding:'1rem'}} />
        <Divider />
            <Typography className={classes.genre} variant="h5" noWrap>
              Discover
              </Typography>
            <List>
                {loopCategory(Discovers, '★')}        
            </List>
        <Divider />
            <Typography className={classes.genre} variant="h5" noWrap>
              Genre
            </Typography>
            <List>
              {loopCategory(Categories, '◉')}        
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
                    className={classes.menuButton}>
                    <MenuIcon />
              </IconButton>
              
              <Typography className={classes.title} variant="h5" noWrap>
                Movie Library 2.0
              </Typography>
              
              <form className={classes.search} onSubmit={(e) => {
                dispatch({type:'MOVIES_SEARCH', payload:{ search:value }})
                history.push(`/search/query=${value}`)
                e.preventDefault()
                setValue('') 
                }}>

                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  value={value}
                  placeholder="Search…"
                  onChange={(e) => setValue(e.target.value)}
                  classes={{ root: classes.inputRoot, input: classes.inputInput}}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
            
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
