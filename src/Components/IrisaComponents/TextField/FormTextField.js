import React, { useState } from 'react'
import {
<<<<<<< HEAD
    Button,
    Select,
    FormControl,
    FormControlLabel,InputLabel,
    MenuItem,Paper,Checkbox,MuiThemeProvider
=======
  Button,
  Select,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Checkbox,
  MuiThemeProvider
>>>>>>> a25a41d8ba08d9297b3576502967b701e2c889de
} from '@material-ui/core'
import IrisaTextField from '../TextField/IrisaTextField'
//import {theme} from '../TextField/style'

//import { CheckBox } from '@material-ui/icons';

export default function Form1(props) {
  const [state, setState] = useState({
    select: 'standard'
  })
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
    </>
  )

  return (
    <div>
      <Paper style={{ width: 500, height: 500 }}>
        <FormControl>
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
          {/* <Checkbox label={"error"}/> */}
          <br />
          <hr />
          Components Test
          <div>
            <TestTextField />
          </div>
        </FormControl>
      </Paper>
    </div>
  )
}
