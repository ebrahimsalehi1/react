import React from 'react';
import PropTypes from 'prop-types';
//import {styles} from '../../assets/jss/style';
//import {FormControl, InputLabel, MenuItem, OutlinedInput, Select, withStyles} from '@material-ui/core';
//import InputAdornment from "@material-ui/core/InputAdornment";
//import IconButton from "@material-ui/core/es/IconButton";
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

export default (IrisaSelect);

IrisaSelect.defaultProps={
    required:false,
    items:null,       
    label:'Irisa Label',
    validationType: null, 
    useLov: null
}

function IrisaSelect(props) {

        const {classes, label, buttons, disabled, name, value, onChange, items, required, validationType, useLov, displayEmpty, ...other} = props;
        return (
            <>
                <FormControl disabled={disabled} error={required}> 
                <InputLabel >{label}</InputLabel>
                    <Select 
                        name={name}
                        disabled={disabled} 
                        displayEmpty={displayEmpty} 
                        onChange={onChange}
                        value={value}  >
                        {
                            items!==null && items.map(item=>
                                (<MenuItem value={item.value} key={item.value}>{item.name}</MenuItem>)                            
                            )
                        }
                    </Select>

                    {required && (value.length===0) ? 
                        (<FormHelperText>Error</FormHelperText>) : null}
                </FormControl>            
            </>
        )
    
}

IrisaSelect.propTypes = {
    //classes: PropTypes.object.isRequired,
    items:PropTypes.array,
    label:PropTypes.string,
    required:PropTypes.bool,
    name: PropTypes.string,
    disabled:PropTypes.bool,
    value:PropTypes.any,
    onChange:PropTypes.func,
    displayEmpty: PropTypes.bool

};



//export default withStyles(styles)(IbxSelect);
