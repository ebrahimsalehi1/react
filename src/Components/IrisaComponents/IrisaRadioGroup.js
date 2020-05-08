//import React from 'react';
import {withStyles, RadioGroup} from '@material-ui/core';
//import {styles} from '../../../assets/jss/style'
import PropTypes from 'prop-types';

function IrisaRadioGroup(props) {

        const {classes, label, value, checked, onChange, ...other} = props;
        return (
                        <RadioGroup
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

IrisaRadioGroup.propTypes = {
    //classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func

};

//export default withStyles(styles)(IbxSwitch);
export default (IrisaRadioGroup);
