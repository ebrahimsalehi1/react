
import React,{useState,useEffect} from 'react'
import {TextField,withStyles} from '@material-ui/core'
//import {styles} from './styles'
import validation from './Validation'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'


export default (IrisaTextField)


IrisaTextField.defaultProps = {
  validationType: [],
  mask: null,
  format:null,
  type:'general'
  //rules: null,
  //onChange: null,
  //onBlur: null,
}

function IrisaTextField(props){

    //const {rules,classes,fullWidth,onCustomValidation,onChange,onBlur} = props

    const {
      classes, useLov, label, name, disabled, required,
      validationType, validationTypeParam, adornment, icon, 
      select, InputProps, SelectProps,
      fullWidth, rows, value, multiline
    } = props;

    const { rules, mask, inputRef, placeholderChar, onCustomValidation, 
      format,prefix,type,
      onChange, onBlur } =props

    let resultValidation = undefined
    if(rules!==undefined){
      resultValidation = validation(props.value,rules.validationType,rules.validationParams)
    }

    const [allValidation,setAllValidation] = useState(rules===undefined ? true:resultValidation.isValid)

      function onChangeHandler(event){
        if(rules.trigger==='change' && onChange!==undefined )
          onChange(event);

        if(rules.trigger==='blur' && onBlur!==undefined )
          onBlur(event);

        const {name,value} =event.target
        if(rules!==undefined){
          resultValidation = validation(value,rules.validationType,rules.validationParams)
          setAllValidation(resultValidation.isValid && rules.onCustomValidation)
        }

        //console.log('on changed',resultValidation)
        
    }      

    useEffect(()=>{
        console.log('refresh occured ....')
    },allValidation)

    return (<>
    { type==='general' && 
        <TextField variant={'outlined'} 
        name={name} 
        value={value}
           //className={fullWidth ? classes.marginFullwidth : classes.margin2}
        onChange={rules!==undefined && rules.trigger==='change' ?  onChangeHandler:null } 
        onBlur={rules!==undefined && rules.trigger==='blur' ? onChangeHandler:null}
        error={!allValidation} 
        helperText={!allValidation && resultValidation.messages}
        />
    }
    {
      type==='mask' &&
       <MaskedInput
       name={name} 
       value={value}
       ref={inputRef}
       mask={mask}
       placeholderChar={placeholderChar}
       showMask
       onChange={rules!==undefined && rules.trigger==='change' ?  onChangeHandler:null } 
       onBlur={rules!==undefined && rules.trigger==='blur' ? onChangeHandler:null}
     />   
    }
    {
      type==='number' &&
      <NumberFormat
      name={name} 
      value={value}
      getInputRef={inputRef}
      format={format}
      thousandSeparator
      prefix={prefix}   
      onValueChange={values => {
        console.log(values.target)
      }}         
      //onChange={rules!==undefined && rules.trigger==='change' ?  onChangeHandler:null } 
      //onBlur={rules!==undefined && rules.trigger==='blur' ? onChangeHandler:null}
      />
    }
        </>
    )
}

IrisaTextField.propTypes = {
  rules: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.oneOf(['general','mask','number']),

  classes: PropTypes.object.isRequired,
  validationType: PropTypes.oneOf(['afterDate', 'alpha', 'alphaFa',
      'alphanumeric', 'alphanumericFa', 'email', 'equals', 'lowercase',
      'matches', 'mobilePhone', 'number', 'numberFloat', 'numberInt', 'required', 'uppercase']),
  validationTypeParam: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  adornment: PropTypes.bool,
  icon: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  rows: PropTypes.string,
  multiline: PropTypes.bool,
  useLov: PropTypes.bool

}


