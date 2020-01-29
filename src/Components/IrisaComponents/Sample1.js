import React,{useState} from 'react'

//const res = Array.from(Array(100000).keys());

export default function Sample(){
    //const [res ,setRes] = useState([1,2,3]);
    const [isLoaded,setIsLoaded] = useState(true);
    const [val,setVal] = useState('');

    let mdata = []

    function getData(){
        console.log('getData',isLoaded)

        if(isLoaded){
            console.log('load data')

            return fetch(`http://localhost:8081/`).
            then(res=>{
                mdata =  res.data;
                console.log(res.data);     
            });
            setIsLoaded(false);
        }
    }

    getData();
    
    return(
        <div>

            <p><input type='text' value={val} onChange={e=>{setVal(e.target.value)}} /></p>
            <p><input type='text' value={val} onChange={e=>{setVal(e.target.value)}} /></p>
            <p><input type='text' value={val} onChange={e=>{setVal(e.target.value)}} /></p>
            <p><input type='text' value={val} onChange={e=>{setVal(e.target.value)}} /></p>

            <hr/>
            <table>
            {
                mdata.map(item=> 
                (<tr>
                    <td>{item}</td>
                </tr>))
            }
            </table>
        </div>
    )
}