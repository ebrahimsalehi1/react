import React, { useState } from 'react'
import {
// <<<<<<< HEAD
//     Button,
//     Select,
//     FormControl,
//     FormControlLabel,InputLabel,
//     MenuItem,Paper,Checkbox,MuiThemeProvider
// =======
  Button,
  TextField,
  Select,
  FormControl,
  FormControlLabel,
  InputLabel,
  InputBase,
  MenuItem,
  Paper,
  Checkbox,
  MuiThemeProvider,
  Grid,
  createMuiTheme
// >>>>>>> a25a41d8ba08d9297b3576502967b701e2c889de
} from '@material-ui/core'
import IrisaTextField from '../TextField/IrisaTextField'
//import {theme} from '../TextField/style'

//import { CheckBox } from '@material-ui/icons';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles2 = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});


export default function Form1(props) {
  const [state, setState] = useState({
    select: 'standard'
  })

  const classes = styles2(createMuiTheme({
    spacing: {unit:8},
    palette: {
      primary: green,
    },
    typography: { useNextVariants: true },    
  }))

  // setValarray({...valarray,[name]:{
  //     ...valarray[name],value:value
  //   }})

  function handlerStateChange(e) {
    const { name, value } = e.target
    setState({ [name]: value })
    console.log(name, value, state)
  }

  const [valarray, setValarray] = useState({
    txt1: { value: 'text 1' },
    txt2: { value: 'text 2' },
    txt3: { value: 'text 3' },
    txt4: { value: '' },
    txt6: { value: 'text 6' },
    //'RadioValue':'IrisaTextField',
    IrisaDialog: { open: false }
    //'IrisaSelect':{value:''}
  })

  function handlerTextField(event) {
    const { name, value } = event.target
    setValarray({
      ...valarray,
      [name]: {
        ...valarray[name],
        value: value
      }
    })
  }

  const TestTextField = () => (
    <>
      <IrisaTextField
        name={'txt1'}
        value={valarray.txt1.value}
        variant={state.select}
        fullWidth
        rules={{
          trigger: 'change',
          validationType: ['alpha'],
          validationParams: [],
          onCustomValidation: true
        }}
        onChange={handlerTextField}
      />
      <br />
      <IrisaTextField
        name={'txt2'}
        value={valarray.txt2.value}
        variant={state.select}
        rules={{
          trigger: 'blur',
          validationType: ['equals'],
          validationParams: [100],
          onCustomValidation: true
        }}
      />
      <br />
      <IrisaTextField
        name={'txt3'}
        value={valarray.txt3.value}
        variant={state.select}
        rules={{
          trigger: 'blur',
          validationType: ['lowercase'],
          validationParams: [100],
          onCustomValidation: true
        }}
      />

      <br />
      <IrisaTextField
        name={'txt4'}
        value={valarray.txt4.value}
        variant={state.select}
        type={'mask'}
        mask={[
          '(',
          /[1-9]/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ]}
      />
      <br />
      <IrisaTextField
        name={'txt5'}
        value={valarray.txt4.value}
        variant={state.select}
        type={'number'}
        prefix={'ریال'}
      />
      <br />
      <IrisaTextField
        name={'txt6'}
        value={valarray.txt4.value}
        variant={state.select}
      />
      <br />
    </>
  )

  const NewDesign = () => (
    <div>
      <Grid container >
        <Grid item xs={6}>
          <IrisaTextField 
          label={'نام'} 
          placeholder={'لطفا نام خود را وارد کنید'}  
          variant={'standard'}/>      
        </Grid>
        <Grid item xs={6}>
          <TextField  label={'*نام'} variant={'standard'} placeholder={'اطفا نام خود را وارد کنید'}  />      
        </Grid>

        <Grid item xs={6}>
          <FormControl className={classes.margin}>
          <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
            Bootstrap
          </InputLabel>
          <InputBase
            id="bootstrap-input"
            defaultValue="react-bootstrap"
            classes={{
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            }}
          />
      </FormControl> 
        </Grid>
        <Grid item xs={6}>
          <IrisaTextField  label={'نام'}/>      
        </Grid>

        <Grid item xs={6}>
          <IrisaTextField  label={'نام'}/>      
        </Grid>
        <Grid item xs={6}>
          <IrisaTextField  label={'نام'}/>      
        </Grid>

        <Grid item xs={6}>
          <IrisaTextField  label={'نام'}/>      
        </Grid>
        <Grid item xs={6}>
          <IrisaTextField  label={'نام'}/>      
        </Grid>

      </Grid>
    </div>
  )

  return (
    <div>
      <Paper style={{ width: 500, height: 500 }}>
        {/* <FormControl>
          <InputLabel>Variant</InputLabel>
          <Select
            label={'label1'}
            name={'select'}
            value={state.select}
            onChange={handlerStateChange}>
            <MenuItem value={'standard'} label={'standard'}>
              standard
            </MenuItem>
            <MenuItem value={'outlined'} label={'outlined'}>
              outlined
            </MenuItem>
            <MenuItem value={'filled'} label={'filled'}>
              filled
            </MenuItem>
          </Select>
          <InputLabel>error</InputLabel>
          { <Checkbox label={"error"}/> }
          <br />
          <hr />
          Components Test
          <div>
            <TestTextField />
          </div>
        </FormControl> */}
        <NewDesign />
      </Paper>
    </div>
  )
}
