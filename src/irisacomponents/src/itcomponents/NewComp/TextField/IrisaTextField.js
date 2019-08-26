
import React,{useState,useEffect} from 'react'
import {TextField,withStyles} from '@material-ui/core'
import {createStyles} from '@material-ui/core/styles'
import validation from '../Validation'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import {useStyles} from './style'

IrisaTextField.defaultProps = {
  validationType: [],
  mask: null,
  format:null,
  type:'general',
  variant:'outlined'
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
      fullWidth, rows, value, multiline, variant,className
    } = props;

    const { rules, mask, inputRef, placeholderChar, onCustomValidation, 
      format,prefix,type,
      onChange, onBlur } =props

    let grules = rules   
    if(grules===undefined && validationType!==undefined )  {
      grules ={      
        trigger: 'blur' ,
        validationType:validationType,
        validationParams:validationTypeParam,
        onCustomValidation:true      
      }      
    }

    let resultValidation = undefined
    if(grules!==undefined){
      resultValidation = validation(props.value,grules.validationType,grules.validationParams)
    }

    const [allValidation,setAllValidation] = useState(grules===undefined ? true:resultValidation.isValid)

    function onChangeHandler(event){
        if(grules.trigger==='change' && onChange!==undefined )
          onChange(event);

        if(grules.trigger==='blur' && onBlur!==undefined )
          onBlur(event);

        const {name,value} =event.target
        if(grules!==undefined){
          resultValidation = validation(value,grules.validationType,grules.validationParams)
          setAllValidation(resultValidation.isValid && grules.onCustomValidation)
        }

        //console.log('on changed',resultValidation)        
    }      

    useEffect(()=>{
        console.log('refresh occured ....')
    },allValidation)

    return (<>
    { type==='general' && 
        <TextField 
        variant={variant} 
        //className={classes.textField}
        className={fullWidth ? classes.marginFullwidth : classes.margin2}
        fullWidth={fullWidth}        
        name={name} 
        value={value}
           //className={fullWidth ? classes.marginFullwidth : classes.margin2}
        onChange={grules!==undefined && grules.trigger==='change' ?  onChangeHandler:null } 
        onBlur={grules!==undefined && grules.trigger==='blur' ? onChangeHandler:null}
        error={!allValidation} 
        helperText={!allValidation && resultValidation.messages}
        />
    }
    {
      type==='mask' &&
       <MaskedInput
       variant={variant} 
       className={fullWidth ? classes.marginFullwidth : classes.margin2}
       fullWidth={fullWidth}        
       name={name} 
       value={value}
       ref={inputRef}
       mask={mask}
       placeholderChar={placeholderChar}
       showMask
       onChange={grules!==undefined && grules.trigger==='change' ?  onChangeHandler:null } 
       onBlur={grules!==undefined && grules.trigger==='blur' ? onChangeHandler:null}
     />   
    }
    {
      type==='number' &&
      <NumberFormat
      variant={variant} 
      className={fullWidth ? classes.marginFullwidth : classes.margin2}
      fullWidth={fullWidth}        
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

export default withStyles(useStyles)(IrisaTextField)
