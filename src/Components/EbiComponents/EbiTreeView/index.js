import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
// import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// const useStyles = makeStyles({  
//     root: {
//       height: 216,
//       flexGrow: 1,
//       maxWidth: 400,
//     },
//   });

function EbiTreeView(props){

    //const classes = useStyles();
    const {classes,nodes} = props;
    
    const [selected,setSelected] = React.useState([]);
    const [expanded,setExpanded] = React.useState([]);

    const handleToggle = (event,nodeIds)  => {
        setExpanded(nodeIds);
    }

    const handleSelect = (event,nodeIds) => {
        setSelected(nodeIds);
    }

    return (
        <TreeView 
        className={classes.root}
        defaultCollapseIcon = {<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        >
            <TreeItem nodeId="1" label="label 1" />
            <TreeItem nodeId="2" label="label 1" >
                <TreeItem nodeId="21" label="label 21">
                    <TreeItem nodeId="211" label="label 211" />
                </TreeItem>
            </TreeItem>
            <TreeItem nodeId="3" label="label 1" />
            <TreeItem nodeId="4" label="label 1" />
            <TreeItem nodeId="5" label="label 1" />
        </TreeView>
    );
}

export default EbiTreeView;
