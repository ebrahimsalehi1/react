
import React from 'react';

const getEmployees =  ()=>{
    const employees = [
        {emp_id:100,first_name:"ebi",last_name:"salehi",salary:3000},
        {emp_id:101,first_name:"mohammad",last_name:"karimi",salary:1700},
        {emp_id:102,first_name:"ehsan",last_name:"elahi",salary:1200}
    ]

    const styles1 =[
        {css:"background-color=black"},
        {css:"background-color=green"},
        {css:"background-color=red"}
    ]


//return null;
return employees.map(emp => 
    <div>
     <label>{emp.emp_id}</label>-
     <label>{emp.first_name}</label>-
     <label>{emp.last_name}</label>        
    </div>
    );

} 

function Employees(props){
    //const listEmployees = c;
    return (        
        <div>{getEmployees()}</div>
   );
}

export default Employees;
