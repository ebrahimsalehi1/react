
import React,{useState,useEffect,useRef} from 'react';

export function Generator(props){
    const {onGenerate} = props;
    //const [arr,setArr] = useState([]);
  
    // useEffect(()=>{
    //   onGenerate(arr)
    // },[arr]);
  
    return (
      <div>
        <button onClick={(()=>{
            const val = Math.floor(Math.random()*1000)
            //console.log(val)
            //setArr(prev=>prev.includes(val) ? prev:[...arr,val])
            //setArr(arr.includes(val) ? [...arr]:[...arr,val])
            //onGenerate(arr.includes(val) ? [...arr]:[...arr,val])
            onGenerate(val)
          })}>Gen</button>
      </div>
    );
  }
  
  export function UseGenerated(props){
    const {data,len} = props;

    const numOfRendered = useRef(0);
  
    return (
      <>
        <p ref={numOfRendered}>{++numOfRendered.current}</p>
        The data will be appeared:
        {
          data!==undefined &&
            data.map(item=>{return <label key={item}>{item}-</label>}) 
        }
      </>              
    );
  }

