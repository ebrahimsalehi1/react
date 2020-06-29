import React from 'react';
import {withStyles, Radio} from '@material-ui/core';
//import {styles} from '../../../assets/jss/style'
import PropTypes from 'prop-types';

function IrisaRadio(props) {

        const {classes, ...other} = props;
        //checked, disabled, onChange, value, 
        return (
                        <Radio
                            // checked={checked}
                            
                            // onChange={onChange}
                            // value={value}
                            // label={label}
                            // classes={{
                            //     switchBase: classes.colorSwitchBase,
                            //     checked: classes.colorChecked,
                            //     bar: classes.colorBar,
                            // }}
                            {...others}
                        /> 
                

            
        )
    
}

IrisaRadio.propTypes = {
    //classes: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,


    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func

};

//export default withStyles(styles)(IbxSwitch);
export default (IrisaRadio);
