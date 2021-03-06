import React from 'react';
import PropTypes from 'prop-types';
import {withStyles,Fab} from '@material-ui/core';
import {useStyles} from './style'

function IrisaOutcome(props){
    
        const {classes,outComeClass,disabled,type,children,...other}=props;
        return(
            <Fab {...other} className={[classes.outCome,outComeClass]} disabled={disabled}
                 variant="extended" >
                {children}
            </Fab>
        )    
}

IrisaOutcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(IrisaOutcome);
