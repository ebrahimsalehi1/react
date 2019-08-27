
import React,{useState} from 'react';

function useCopyText(){
    const [text,setText] = useState('');
    function copy(event){
        setText(event.target.value);
    }
    return [text,copy];
}

function myLabel(){
    const items=[1,2,3,4,5];
    return items.map(item => <label>{item} </label>);
}

function Form(props){
    const [text,copy] = useCopyText();

    // <input name="txt2"  value={text} >
    return (    
        <div>   
        <input name="txt1" onChange={copy}/>
         {myLabel()}
        </div> 
    );
}

export default Form;
