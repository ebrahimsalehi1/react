import ReactVirtualizedTable from '../MyGrid';

import React, { memo,Component,useState,useEffect,useRef } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import axios from 'axios';
import InfiniteSample from '../InfiniteSample';
import Sample from '../Sample1';
import { SelectValidator } from 'react-material-ui-form-validator';
import IrisaDateTime from '../IrisaDateTime';
import Moment from 'moment-jalaali';
//import IbxDatePicker2 from './Components/IrisaComponents/Mydate/IbxDatePicker2'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop';

const progress= ()=>(<CircularProgress/>)

function App(props){

  const [dataRows,setDataRows] = useState(   [] 
  );
  const [firstRendered,setFirstRendered] = useState(true);
  const num = useRef(0);
  const [val,setVal] = useState(1000)
  const [isCompleteDownload,setIsCompleteDownload] = useState(false)

  async function webService1(){
    // progress();
    setIsCompleteDownload(true)

    axios.get(`http://localhost:8080/getall/${val}`).
    then(res=>{
      if(res.status===200){
        setDataRows(res.data);
        //console.log('data',res.data)

        setIsCompleteDownload(false)
      }
      else{
        alert('error in fetching the data')
      }
    })
  }

  // useEffect(()=>{
  //   if(firstRendered){
  //     setFirstRendered(!firstRendered)
  //   }
  //   //console.log('useEffect');
  //   if(firstRendered){
  //     //console.log('start of ....');
  //     setFirstRendered(false);

  //     return ()=>{
  //       setFirstRendered(false);
  //     }
  //   }
  // })

    return (
        <div style={{height:400}}>
          {/* <label>number : {++num.current}</label> */}

            <TextField 
            type="number"
            label={"number of record which must load"}
            value={val}
            variant="outlined"
            onChange={e=>{setVal(e.target.value)}}

            />

        {/* <Backdrop open={isCompleteDownload} > */}
         {isCompleteDownload && <CircularProgress/>}
        {/* </Backdrop> */}
            {/* <input type='TEXT' onKeyDown={e=>{console.log(e.key)}}/> */}
            <Button onClick={webService1}>Load Data</Button>

        <SortableTree
          treeData={dataRows}
          onChange={treeData => setDataRows(treeData)}
          //onClick={e=>{console.log(e)}}
          // map={({
          //   treeData,
          //   getNodeKey,
          //   callback,
          //   ignoreCollapsed = true,
          // })=>({})}
        />



        </div>
    )
}

export default memo(App)
