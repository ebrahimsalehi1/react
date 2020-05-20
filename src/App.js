import React,{useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IbxDatePicker2 from './Components/IrisaComponents/Mydate/IbxDatePicker2';
import TimePicker from './Components/IrisaComponents/Mydate/IbxTimePicker2';
//import {TimePicker} from 'material-ui-time-picker';
import CompositeTree from './Components/IrisaComponents/CompositeTree';
import TreeLargeData from './Components/IrisaComponents/TreeLargeData';
import UsersGroupsApprolesSearch from './Components/IrisaComponents/UsersGroupsApprolesSearch'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 2 * 3 ,height:0}}>
        {props.children}
      </Typography>
    );
  }

function App(){
    const [value,setValue] = useState(0)
    const [value1,setValue1] = useState(new Date())
    const [valDateTime,setValDateTime] = useState(new Date().getTime())

    const handleChange = (event, value) => {
        setValue(value);
        console.log(event,value)
      };



      const props1='1'
      const props2='1'

  return (
    <div>
           
        {/* <IbxTimePicker2
        value={value1}
        onChange={(e)=>{
          console.log("onChange",e);              
        }}
        /> */}

        {props1==='1' && props2==='1' &&
          <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Date Time Picker" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Tree Large Data" />
            <Tab label="User Groups Approles" />

          </Tabs>
        </AppBar>
        }
        {value === 0 && <TabContainer>
          <IbxDatePicker2
            componentType="datetime"
            value={valDateTime}
            handleDateChange={(e,name) => {
              //console.log("handleDateChange", e,name);
              setValDateTime(e);
            }}
            // handleTimeChange={e=>{
            //   console.log("handleTimeChange",e);
            // }}
            locale={"en"}
          />
        </TabContainer>}
        {value === 1 && <TabContainer>
            <CompositeTree 
              title="The title"
              handleReturnFunction={(e)=>{
                console.log(e)
              }}  
              />
            </TabContainer>}
        {value === 2 && <TabContainer>
            <TimePicker
            mode={"24h"}
            onChange={(e)=>{console.log("onChange",e)}}
            value={value1}
            //onMinutesSelected={e=>{console.log("onMinutesSelected",e)}}
            //ClockProps={this.handleClockChangeDone}
          />
            </TabContainer>}

        {value===3 && <TabContainer>
            <TreeLargeData />
          </TabContainer>}

          {value===4 && <TabContainer>
            <UsersGroupsApprolesSearch 
            selectSpecial="users"  
            data={[
                {"ID":"100","firstName":"LAB_Lubricant_PRJ.Reception","lastName":"z.rahimi, b.ghazi","email":"desc 1"},
                {"ID":"101","firstName":"LAB_Lubricant_PRJ.Reception","lastName":"z.rahimi, b.ghazi","email":"desc 1"},
            ]}  />
          </TabContainer>

          }    
        
        </div>        
    )
}

export default App
