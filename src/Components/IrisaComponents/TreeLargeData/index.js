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

  async function webServiceMain(){
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

  async function webService1(){
    console.log('webService1')
    let resAll =[]
    await axios.get(`http://localhost:8080/get1`).
    then(res=>{
      if(res.status===200){
        resAll = res.data;
        console.log('webService1 end')
      }
      else{
        alert('error in fetching the data')
      }
    })

    return resAll
  }

  async function webService2(){
    console.log('webService2')

    let resAll =[]
    await axios.get(`http://localhost:8080/get2`).
    then(res=>{
      if(res.status===200){
        resAll = res.data;
        console.log('webService2 end')

      }
      else{
        alert('error in fetching the data')
      }
    })

    return  resAll
  }

  async function webService3(){
    console.log('webService3')
    let resAll =[]
    await axios.get(`http://localhost:8080/get3`).
    then(res=>{
      if(res.status===200){
        resAll = res.data;
        console.log('webService3 end')

      }
      else{
        alert('error in fetching the data')
      }
    })
    return resAll
  }

  async function webService4(){
    console.log('webService4')

    //await window.setTimeout(async ()=>{console.log('wait')},5000)

    let resAll =[]
    await axios.get(`http://localhost:8080/get4`).
    then(res=>{
      if(res.status===200){
        resAll = res.data;
        console.log('webService4 end')
      }
      else{
        alert('error in fetching the data')
      }
    })

    return resAll
  }

  async function webServiceAll(){
    setIsCompleteDownload(true)

    const p1 = webService1();
    const p2 = webService2();
    const p3 = webService3();
    const p4 = webService4();

    Promise.all([p1,p2,p3,p4])
    .then(([p1,p2,p3,p4])=>{
      console.log("step 1",p1,p2,p3,p4)
      setIsCompleteDownload(false)

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
            <Button onClick={webServiceAll}>Load Data</Button>

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
