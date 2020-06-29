import React from 'react';
import {withStyles, FormControl} from '@material-ui/core';
//import {styles} from '../../../assets/jss/style'
import PropTypes from 'prop-types';

function IrisaFormControl(props) {

        const {classes, disabled, error, fullWidth, margin, required, variant, ...other} = props;
        return ( 
                        <FormControl
                            disabled={disabled}
                            error={error}
                            fullWidth={fullWidth}
                            margin={margin}                            
                            required={required}
                            variant={variant}
                            // classes={{
                            //     switchBase: classes.colorSwitchBase,
                            //     checked: classes.colorChecked,
                            //     bar: classes.colorBar,
                            // }}
                        /> 
            
        )
    
}

IrisaFormControl.propTypes = {
    classes: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    margin: PropTypes.oneOf(['none','dense','normal']),
    required: PropTypes.bool,
    variant: PropTypes.oneOf(['standard','outlined','filled'])
};

//export default withStyles(styles)(IbxSwitch);
export default (IrisaFormControl);
