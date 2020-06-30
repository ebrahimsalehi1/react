import React,{useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IrisaDatePicker from './Components/EbiComponents/DatePicker/IrisaDatePicker';
import TimePicker from './Components/EbiComponents/DatePicker/IrisaTimePicker';
//import {TimePicker} from 'material-ui-time-picker';
import CompositeTree from './Components/EbiComponents/CompositeTree';
import TreeLargeData from './Components/EbiComponents/TreeLargeData';
import UsersGroupsApprolesSearch from './Components/EbiComponents/UsersGroupsApprolesSearch'
import IrisaGrid from './Components/EbiComponents/DXGrid';
import MiniDrawer from './ComponentSamples/MiniDrawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NodeJS from './NodejsSample/index';
import ComponentSamples from './ComponentSamples/index';
import {useTranslation} from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import './config/i18next';

function App(props){

    const { type } = props;

    const { i18n } = useTranslation();
    function handleChangeLanguage(lang){
        i18n.changeLanguage(lang);
    }

  return (
    <div>
        <Grid container spacing={0} direction={"row"}>
          <Grid item xs={12} md={12} style={{paddingLeft:"96px",margin:"24px"}}>
            <p>qwewqeq wqewqewqeqwe qwe wqe qwewq</p>

            <button onClick={e=>{
                handleChangeLanguage('en-US');
            }}>English</button>

            <button onClick={e=>{
                handleChangeLanguage('fa-IR');
            }}>Persian</button>
            </Grid> 
            <Grid item xs={12} md={12}>
            {
                type==='NODEJS' && <NodeJS />
            }
            {
                type==='COMPONENT_SAMPLE' && <ComponentSamples />
            }
            </Grid>
        </Grid>
    </div>        
    )
}

export default App
