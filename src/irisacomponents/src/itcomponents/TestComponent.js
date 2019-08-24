import React,{useState} from 'react'
import Lov from './NewComp/Lov'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

export default function TestComponent(props){

    const [webElement,setWebElement] = useState('popup')

    const TestLov = () =>(
        <div>
        <h2>Presentation of Component LOV</h2>
        <hr />    
        <RadioGroup  onChange={e=>setWebElement(e.target.value)}>
        <FormControlLabel value="popup" control={<Radio />} label="popup" />
        <FormControlLabel value="list" control={<Radio />} label="list" />
        <FormControlLabel value="multiple" control={<Radio />} label="multiple" />
        </RadioGroup>

        <hr />    
        <br />
        
        <Lov label={"label1"} name={"txt1"} datas={
        [
         {cod:'1',val:'one 1'},
         {cod:'2',val:'two 2'},
         {cod:'3',val:'three 3'},
         {cod:'4',val:'four 4'},
         {cod:'5',val:'five 5'},
         {cod:'6',val:'six 6'}			 			 
         ]} 
         keyCodeToFire={17}
         hotSearch
         webElement={webElement}
         />
         </div>
         )

    return (
        <div>
            {TestLov()}
        </div>
    )
}