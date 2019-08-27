import React from 'react';
//import {withStyles,TextField} from '@material-ui/core';
//import {styles} from '../../assets/jss/style'
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'
import TextField from "@material-ui/core/TextField";

export default (IrisaTextFieldMask);

function IrisaTextFieldMask(props){

        return(
            <MaskedInput
                mask={props.mask}
                render={(ref, props) =>{
                    const{classes,label,name,fullWidth,rows,value,multiline,onChange,...other}=props;
                    return (
                        <TextField {...props} name={name} label={label}
                                      inputRef={ref}  
                                      value={value===null?'':value} onChange={onChange}
                                      fullWidth={fullWidth}
                                      rows={rows}
                                      multiline={multiline}
                        />

                )}}
            />

        )
    
}
IrisaTextFieldMask.propTypes = {
    //classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(IbxTextFieldMask);
