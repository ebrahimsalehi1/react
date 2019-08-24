
import React,{useState} from 'react';

function useInput(){
    const [val,setVal] =  useState('')
    function onChange(event){
        let s = event.target.value
        let newVal = s.substring(s.length-1,s.length)
        //console.log(!/[^\d]/.test(newVal))
        // !/[^\d]/.test(s)
        setVal(prevVal => '0123456789'.includes(newVal) ? s : prevVal)
    }

    return [val,onChange]
}

function TEST(props){
    const [s1,m1] = useInput()

    return <>
        <input type='TEXT' value={s1} onChange={m1} />
    </>
}

export default TEST