import React from 'react';
//import {withStyles,TextField} from '@material-ui/core';
//import {styles} from '../../assets/jss/style'
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'
import TextField from "@material-ui/core/TextField";

export default (IrisaTextFieldMask2);

function IrisaTextFieldMask2(props){
    const{classes,mask,placeholderChar,inputRef,label,name,fullWidth,rows,value,multiline,onChange,...other}=props;

    //const { inputRef, ...other } = props;

    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={mask}
        placeholderChar={placeholderChar}
        showMask
      />
    );

    /*
        return(

            
            <TextField
                    id="maskExample"
                    label="Mask Example"
                    //className={classes.textField}
                    margin="normal"
                    InputProps={{
                        inputComponent: MaskedInput,
                        value:value,
                        mask:{['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}

                        //onChange={onChange}
                    }}
            />
        )

        */
    
}

IrisaTextFieldMask2.propTypes = {
    //classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(IbxTextFieldMask);
