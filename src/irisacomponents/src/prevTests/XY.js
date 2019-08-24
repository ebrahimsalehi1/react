
import React,{useState} from 'react';

function useHook(){
    const [val,setVal] = useState(null)

    function onClick(){
        setVal(prevVal => {prevVal.x+1,prevVal.y-1});
    }

    return [val,onClick]
}

function XY(props){
    const[{x,y},xEvent] = useHook()
    return (
        <>
          <button onClick={xEvent} >value {x},{y}</button>
        </>
    );
}

export default XY
