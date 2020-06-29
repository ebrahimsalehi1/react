import React from 'react'
import TextField from '@material-ui/core/TextField';
import useOurTextField from '../itutility/HookUtils'

function OurTextField(props){

    const [text,changeHandler,person]=useOurTextField(props)
    //console.log(props)
    return (
    <div>
    <TextField  
        type={props.type} 
        inputProps={props.inputProps} 
        value={text == null ? '' : text} 
        onChange={changeHandler}
        onBlur={props.onBlur}
        name={props.name}
        id={props.id}
        multiline={props.multiline ? true : false}
        error={props.error}
        helperText={props.helperText}
        //onBlur={console.log('onBlur')}
        //onSelect={console.log('onSelect')}
        
        //validationType
    />

        <label name='EBI'>{text}</label>
        {person && <div>{person.name.first}</div>}

    </div>
    )    

}

export default OurTextField
