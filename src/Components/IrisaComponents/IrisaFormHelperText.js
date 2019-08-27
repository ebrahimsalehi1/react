import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

function IrisaFormHelperText(props){
    const { ...others } = props
    return (
        <FormHelperText
        {...others}
        />
    )
}

export default IrisaFormHelperText
