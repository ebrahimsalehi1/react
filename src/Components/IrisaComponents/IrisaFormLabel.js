import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';

function IrisaFormLabel(props){
    const { ...others } = props
    return (
        <FormLabel
        {...othres}
        />
    )
}

export default IrisaFormLabel
