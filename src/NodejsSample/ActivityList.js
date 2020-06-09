import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
//import ListSubheader from '@material-ui/core/ListSubheader';
import {
    Tram as IconTram,
    Tonality as IconTonality,
    Transform as IconTransform,
    Wc as IconWc,
    Toll as IconToll,
    ExpandLess as IconExpandLess,
    ExpandMore as IconExpandMore,
} from '@material-ui/icons';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';

import Person from './Person/Person';

const style = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
      },
});

function ActivityList(props){
    const {onChangeHandler,classes} = props;

    const [selectedItem,setSelectedItem] = React.useState('');
    const [open,setOpen] = React.useState('');

    const data = [
        {id:'PERSON',text:'Person Module',icon:<IconTram/>,isPerform:false,
        children:[{id:'one',text:'one'},{id:'two',text:'two'},{id:'three',text:'three'}]},

        {id:'AUTHENTICATION',text:'Authentication Module',icon:<IconTonality/>,isPerform:false,
        children:[]},

        {id:'AUTHORIZATION',text:'Authorization Module',icon:<IconTransform/>,isPerform:false,
        children:[]},
        
        {id:'ORGANIZATION',text:'Organization Module',icon:<IconWc/>,isPerform:false,
        children:[]},
                
    ]   ;


    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
      <Switch>
        <List
        component="nav"
        //subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        className={classes.root}
        >
          {
                data.map((item,index)=>( 
                <>                 
                <ListItem button onClick={(e)=>{
                    console.log(item.id);
                    
                    setOpen(prev=>prev===item.id ? '':item.id);
                    
                    //if(!item.isPerform){
                        if(onChangeHandler)
                            onChangeHandler(e,item);
                    //}                
                }} key={item.id}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text} - {index}</ListItemText>
                    {open===item.id ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open===item.id} timeout="auto" unmountOnExit>                      
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        {/* <ListItemText inset primary="Starred" /> */}
                        <Link to="/person"> EBI </Link>
                        </ListItem>
                    </List>
                    </Collapse>
                    </>
                    ))
          }

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      </Switch>
    )
}

export default withStyles(style)(ActivityList);
