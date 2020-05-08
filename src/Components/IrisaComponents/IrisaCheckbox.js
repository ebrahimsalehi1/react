import React from 'react';
import {withStyles, Checkbox} from '@material-ui/core';
//import {styles} from '../../../assets/jss/style'
import PropTypes from 'prop-types';

function IrisaCheckbox(props) {

        const {classes, label, value, checked, onChange, ...other} = props;
        return (
                        <Checkbox
                            checked={checked}
                            onChange={onChange}
                            value={value}
                            label={label}
                            // classes={{
                            //     switchBase: classes.colorSwitchBase,
                            //     checked: classes.colorChecked,
                            //     bar: classes.colorBar,
                            // }}
                        /> 
                

            
        )
    
}

IrisaCheckbox.propTypes = {
    //classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func

};

//export default withStyles(styles)(IbxSwitch);
export default (IrisaCheckbox);
