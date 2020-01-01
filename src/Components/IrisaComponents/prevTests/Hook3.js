
import React,{useState} from 'react';

function useKKK(defaultValue = 0){
    const [count,setCount] = useState(defaultValue);

    function increment(){
        setCount(x => x+1);
    }
    return {count,increment};
}

function Counter(props){
    const l = [{name:"ali",val:0},{name:"hassan",val:0},{name:"mohammad",val:0}];
    const l1 = ["one","two","three"];

    const {count, increment} = useKKK(10);
    //const sss=(<button onClick={increment}>Value Button {count}</button>);
    const x1 = l1.reduce((acum,item)=>{return acum+`<button onClick={increment}>${item.name}={count}</button>`},"");
    return (<button onClick={increment}>Val {l} {count}</button>);
}

export default Counter;
