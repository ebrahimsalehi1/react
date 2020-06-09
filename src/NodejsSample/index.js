import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ActivityList from './ActivityList';

import {Route,BrowserRouter as Router,Switch,NavLink} from 'react-router-dom';
import Person from './Person/Person';

const styles = {
    root:{
        flexGrow: 1,
    },
    menuButton:{
        marginLeft: -12,
        marginRight: 20,
    },
    grow: {
        flexGrow: 1,
      },    
};

const About = ()=>(
    <div>About Something</div>
)

function NodeJS(props){
    const {classes} = props;
    const [openMenu,setOpenMenu] = React.useState(false);

    const PortalPage = ()=>{
        return (
            <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={(e)=>{setOpenMenu(!openMenu)}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Sample For NodeJS
                     </Typography>
                <Button color="inherit">Login</Button>                
                </Toolbar>
            </AppBar>
            {
                openMenu && 
                <ActivityList 
                 onChangeHandler={(e,item)=>{
                    //setOpenMenu(!openMenu);
                    console.log(item);
                 }}
                />
            }
            </>
        )
    }
    
    return (
        <div className={classes.root}>
        <Router>
            <Route path="/" component={PortalPage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/person" component={Person}></Route>
        </Router>
        </div>
    );
}

export default withStyles(styles)(NodeJS);
