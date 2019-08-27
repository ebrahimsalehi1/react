import React,{useState} from 'react';

function Counter2(props){
    const [count,count1] = useState(0);
    function increment(){
        count1(prevVal=>prevVal+1);
    }
    return (<button onClick={increment}>Text {count}</button>);
}

export default Counter2;
