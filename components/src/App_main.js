import React,{useRef,useState,useEffect} from "react";
//import TestComponent from './itcomponents/TestComponent'
//import FormControl from '@material-ui/core/FormControl'
//import InputLabel from '@material-ui/core/InputLabel'
//import Input from '@material-ui/core/Input'
//import FormHelperText from '@material-ui/core/FormHelperText'
import {Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Grid,Paper} from '@material-ui/core'

import IrisaDatePicker from './itcomponents/NewComp/IrisaDatePicker'
import IrisaTextField from './itcomponents/NewComp/IrisaTextField'
import SampleValidation from './itcomponents/NewComp/SampleValidation'
//import IrisaDialogDatePicker from './itcomponents/NewComp/IrisaDialogDatePicker'
import IrisaDialogDatePicker from './itcomponents/NewComp/IrisaDialogDatePickerFa'

import IrisaOutcome from './itcomponents/NewComp/IrisaOutcome'
import IrisaSwitch from './itcomponents/NewComp/IrisaSwitch'
import IrisaCheckbox from './itcomponents/NewComp/IrisaCheckbox'
import IrisaDialog from './itcomponents/NewComp/IrisaDialog'
import IrisaSelect from './itcomponents/NewComp/IrisaSelect'
import IrisaTextFieldMask from './itcomponents/NewComp/IrisaTextFieldMask'
import IrisaTextFieldMask2 from './itcomponents/NewComp/IrisaTextFieldMask2'
import IrisaChart from './itcomponents/NewComp/IrisaChart'
import IrisaLov from './itcomponents/NewComp/IrisaLov'

const App = props => {
/*
	ListAxios('GET').then((result)=>{
		console.log(result.data)
	})
*/

  const [valarray,setValarray] = useState(
    {
    'txt1':{value:'text 1'},
    'txt2':{value:'text 2'},
    'txt3':{value:'text 3'},
    'txt4':{value:''},
    //'RadioValue':'IrisaTextField',
    'IrisaDialog':{open:false},
    //'IrisaSelect':{value:''}
    }
  )

  const [radioValue,setRadioValue] = useState('IrisaTextField')
  const [irisaSelect,setIrisaSelect] = useState({value:''})
  const [irisaSwitch,setIrisaSwitch] = useState({value:false})
  const [irisaTextFieldMask,setIrisaTextFieldMask] = useState({value:''})

  function handlerTextField(event){
    const {name,value}=event.target
    setValarray({...valarray,[name]:{
      ...valarray[name],value:value
    }}) 
  }


  const TestTextField=()=>( 
    <>
    <IrisaTextField name={"txt1"} value={valarray.txt1.value}
    rules={
      {
        trigger: 'change' ,
      validationType:["alpha"],
      validationParams:[],
      onCustomValidation:true
    }} 
    onChange={handlerTextField}
     />
    <br />
    <IrisaTextField name={"txt2"} value={valarray.txt2.value} 
    rules={{trigger: 'blur' ,validationType:["equals"],validationParams:[100],onCustomValidation:true}}/>
    <br />
    <IrisaTextField name={"txt3"} value={valarray.txt3.value}  
    rules={{trigger: 'blur' ,validationType:["lowercase"],validationParams:[100],onCustomValidation:true}}/>

    <br />
    <IrisaTextField name={"txt4"} value={valarray.txt4.value}  type={"mask"}
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}    
    />
    <br />
    <IrisaTextField name={"txt5"} value={valarray.txt4.value}  type={"number"}
      prefix={"ریال"}/>
    <br /> 
    </>)


    useEffect(()=>{
      console.log('value ...> ',radioValue);

    },[radioValue])

  return (
    <div className="App">
       These component is created by Ebrahim Salehi <br />         
      <br />
      <Grid container direction="row">
        <Grid item xs={4}>
        <FormControl component="fieldset">
          <FormLabel>Slect a component please</FormLabel>
          <RadioGroup value={radioValue} onChange={(e)=>{
            setRadioValue(e.target.value);
          // if(radioValue==='IrisaDialog'){
          //   const {name} = e.target
          //   //setMP(true)
          //   //setValarray({...valarray,[name]:{...valarray[name],'IrisaDialog':{open:false}}})
          // }
        }} >          
          <FormControlLabel value={'IrisaTextField'} label={'IrisaTextField'} control={<Radio />} />
          <FormControlLabel value={'IrisaDatePicker'} label={'IrisaDatePicker'} control={<Radio />} />
          <FormControlLabel value={'SampleValidation'} label={'SampleValidation'} control={<Radio />} />
          <FormControlLabel value={'IrisaDialogDatePicker'} label={'IrisaDialogDatePicker'} control={<Radio />} />
          <FormControlLabel value={'IrisaOutcome'} label={'IrisaOutcome'} control={<Radio />} />
          <FormControlLabel value={'IrisaSwitch'} label={'IrisaSwitch'} control={<Radio />} />
          <FormControlLabel value={'IrisaCheckbox'} label={'IrisaCheckbox'} control={<Radio />} />
          <FormControlLabel value={'IrisaDialog'} label={'IrisaDialog'} control={<Radio />} />
          <FormControlLabel value={'IrisaSelect'} label={'IrisaSelect'} control={<Radio />} />   
          <FormControlLabel value={'IrisaTextFieldMask'} label={'IrisaTextFieldMask'} control={<Radio />} />   
          <FormControlLabel value={'IrisaTextFieldMask2'} label={'IrisaTextFieldMask2'} control={<Radio />} />   
          <FormControlLabel value={'IrisaChart'} label={'IrisaChart'} control={<Radio />} />                    
          <FormControlLabel value={'IrisaLov'} label={'IrisaLov'} control={<Radio />} />                    
          
          </RadioGroup>
        </FormControl>
        </Grid>

<Grid  item xs={8}>
  <Paper >
 {radioValue==='IrisaTextField' && <TestTextField />}  

 {radioValue==='IrisaDatePicker' && <IrisaDatePicker 
 //isJalaali
  type='date' 
  okLabel="تأیید" 
  cancelLabel="انصراف" 
  clearLabel="پاک کردن" 
  //value={val} 
  />  
  }

  {radioValue==='SampleValidation' && <SampleValidation />}

  {radioValue==='IrisaDialogDatePicker' && <IrisaDialogDatePicker />}

  {radioValue==='IrisaOutcome' && <IrisaOutcome>my outcome</IrisaOutcome>}

  {radioValue==='IrisaSwitch' && 
  <IrisaSwitch name={"IrisaSwitch1"} label={"my switch"} checked={irisaSwitch.value}  onChange={e=>setIrisaSwitch({value:e.target.checked})} />}
  
  {radioValue==='IrisaCheckbox' &&
   <IrisaCheckbox name={"IrisaCheckbox1"} label={"my check"} value={"my check"}  />}
  
{radioValue==='IrisaDialog' && 
<IrisaDialog name={'IrisaDialog'} eventClose={(e)=>{
  const {name} = e.target
  setValarray({...valarray,[name]:{...valarray[name],'IrisaDialog':{open:false}}})
  //setMP(false)
  //console.log(valarray)
}} openModal={valarray.IrisaDialog.open} title={'title'}/>}

{radioValue==='IrisaSelect' &&
   <IrisaSelect name={'IrisaSelct'} checked={irisaSelect.value} onChange={e=>setIrisaSelect({value:e.target.value})}
      items={[
        {name:'one',value:'1'},
        {name:'two',value:'2'},
        {name:'three',value:'3'},
        {name:'four',value:'4'},
        {name:'five',value:'5'},
        {name:'six',value:'6'},
      ]}  
/>}

{radioValue==='IrisaTextFieldMask' &&
<IrisaTextFieldMask 
  name={'IrisaTextFieldMask1'} 
  value={"value"}
  checked={irisaTextFieldMask.value} 
  onChange={e=>setIrisaTextFieldMask({value:e.target.value})}
  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  />}

{radioValue==='IrisaTextFieldMask2' &&
<IrisaTextFieldMask2 
  name={'IrisaTextFieldMask1'} 
  value={"value"}
  checked={irisaTextFieldMask.value} 
  onChange={e=>setIrisaTextFieldMask({value:e.target.value})}
  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  //placeholderChar={'\u2000'}  
  />}  

  {
    radioValue==='IrisaChart' &&
    <IrisaChart
    data={[
      { argument: 'Data 1', value: 10 },
      { argument: 'Data 2', value: 24 },
      { argument: 'Data 3', value: 30 },
      { argument: 'Data 4', value: 35 },
      { argument: 'Data 5', value: 20 },
      { argument: 'Data 6', value: 60 }

    ]}
    />
  }

{
    radioValue==='IrisaLov' &&
    <IrisaLov
    data={[
      { cod: 'Data 1', val: 10 },
      { cod: 'Data 2', val: 24 },
      { cod: 'Data 3', val: 30 },
      { cod: 'Data 4', val: 35 },
      { cod: 'Data 5', val: 20 },
      { cod: 'Data 6', val: 60 }

    ]}
    />
  }

  </Paper>
  </Grid>
  </Grid>
    </div>
  );
};

export default App;
