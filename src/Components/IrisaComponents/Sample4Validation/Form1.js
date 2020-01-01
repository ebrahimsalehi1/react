
import React,{useState} from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FormControlLabel, FormLabel,FormGroup } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import  RadioGroup  from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = (theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: 3, //theme.spacing(3),
    },
  });
  
export default function Form1(props){

    const classes = useStyles()

    const Section1 = () =>(
        <div className={classes.root}>
        <FormControl error={true}>
            <FormLabel component="legend">Employee Information</FormLabel>
            <FormControlLabel label="Employee Id" control={<TextField label={'employee id'}/>} />
            <FormControlLabel label="First Name" control={<TextField label={'First Name'}/>} />
            <FormControlLabel label="Last Name" control={<TextField label={'Last Name'}/>} />
            <RadioGroup row>
                <FormControlLabel label="male" value="male" control={<Radio />} />
                <FormControlLabel label="female" value="female" control={<Radio />} />
            </RadioGroup>
            <FormControlLabel label="educations" control={
                <Select value={10}>
                    <MenuItem value={10}>Diploma</MenuItem>
                    <MenuItem value={20}>Bachlur</MenuItem>
                </Select>}/>
        </FormControl>
        </div>
    )

    return (
        <div>
            <Section1 />                
        </div>

    )

}