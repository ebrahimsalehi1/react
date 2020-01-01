
import React,{useState} from 'react';

let maxLength = 6;

function useText(){
    const [{val,commaVal},setVal] = useState(null);
    function onChange(event){
        //console.log(props.maxLength)
        if(event.target.value.length > maxLength) {
            setVal(prevVal=>prevVal)  
            setCommaVal(prevVal=>prevVal)
        }
        else{    
            let s = event.target.value
            setVal(prevVal => !/[^\d]/.test(s) ? s:prevVal)
            setCommaVal(prevVal => prevVal.toLocaleString('en'))
        }
    }

    return [{val,commaVal},onChange]
}

function Currency(props){
    const [{s1,s2},m1] = useText();
    return (
        <>
        <input type='TEXT' value={s1} onChange={m1} maxLength={maxLength}/>
        <label>{s2}</label>
        </>
    );
}

export default Currency;
