import React,{useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IrisaDatePicker from './Components/IrisaComponents/IrisaDatePicker';
import {Clock,TimePicker} from 'material-ui-time-picker';
import CompositeTree from './Components/IrisaComponents/CompositeTree';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 2 * 3 ,height:0}}>
        {props.children}
      </Typography>
    );
  }

function App(){
    const [value,setValue] = useState(0)
    const [value1,setValue1] = useState(0)

    const handleChange = (event, value) => {
        setValue(value);
        console.log(event,value)
      };

      const props1='1'
      const props2='1'

    return (
        <div>
           
        {props1==='1' && props2==='1' &&
          <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        }
        {value === 0 && <TabContainer>Item One 1111111111</TabContainer>}
        {value === 1 && <TabContainer>
            <CompositeTree 
              title="The title"
              buttonOkTitle="تایید"
              buttonCancelTitle="انصراف"
              handleReturnFunction={(e)=>{
                console.log(e)
              }}
              />
            </TabContainer>}
        {value === 2 && <TabContainer>
            <TimePicker
            mode={"24h"}
            onChange={(e)=>{console.log("onChange",e.getHours(),e.getMinutes())}}
            value={value1}
            //onMinutesSelected={e=>{console.log("onMinutesSelected",e)}}
            //ClockProps={this.handleClockChangeDone}
          />
            </TabContainer>}
        
        </div>        
    )
}

export default App
