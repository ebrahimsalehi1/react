import React,{useState} from 'react';

function TODO(props){
    //const [res,setRes] =useState(0);

    function doThings(op,m,n){
        m=parseInt(m);
        n=parseInt(n);
        let x;
        switch(op){
            case "+":
                x=(m+n);
                break;
            case "-":
                x=(m-n);
                break;
            case "*":
                x=(m*n);
                break;
            case "/":
                x=(m/n);
                break;
        }    
        return x;    
    }    

     return (
         <>
             <label >{
                doThings(props.operation,props.a,props.b)                
             }</label>
         </>
     )
}

export default TODO;
