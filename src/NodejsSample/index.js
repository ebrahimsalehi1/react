import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ActivityList from './ActivityList';

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

function NodeJS(props){
    const {classes} = props;
    const [openMenu,setOpenMenu] = React.useState(false);

    return (
        <div className={classes.root}>
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
                 //setOpenMenu(!openMenu)
                ;console.log(item);
             }}
            />
        }
        </div>
    );
}

export default withStyles(styles)(NodeJS);
