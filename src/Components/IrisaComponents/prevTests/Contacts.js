
import React,{useState} from 'react';

// function onHandlerInputKeyDown(event){
//     //let strVal = event.target.value;
//     console.log(event.keyCode);

//     if(event.keyCode>=48 && event.keyCode<=57)
//         event.returnValue = true;
//     else 
//         event.returnValue = false;
// }

// const Contacts =  creatReactClass({

//     componentShouldUpdate: function (){
//         console.log("componentShouldUpdate");
//     },

//     render: function(){
//         return
//     <div>
//         <label>Search Results</label>
//         <input  onKeyDown={onHandlerInputKeyDown} />
//     </div>
//     }
// });

function useMyInp(){
    const [val,setVal] = useState("");
    function onChange(event){
        setVal(event.target.value)
        return 
        <div>
            <label>TEST</label>
        </div>
    }

    return [val,onChange]
}

function Contacts(props){
    return (
        <>
            <input  {...useMyInp()} />
            <input  {...useMyInp()} />
        </>
    );
}

export default Contacts;
