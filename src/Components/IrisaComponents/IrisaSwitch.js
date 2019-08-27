import React from 'react';
import {withStyles, Switch, FormControlLabel, Checkbox} from '@material-ui/core';
//import {styles} from '../../assets/jss/style'
import PropTypes from 'prop-types';

//export default withStyles(styles)(IbxSwitch);
export default (IrisaSwitch);

function IrisaSwitch(props) {

        const {classes, label, value, name, checked, onChange, ...other} = props;
        return (
                        <Switch
                            name={name}
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

IrisaSwitch.propTypes = {
    //classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};


