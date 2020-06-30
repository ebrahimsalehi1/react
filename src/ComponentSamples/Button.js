import React from 'react';
import Button from '../Components/EbiComponents/Button';

function ButtonSample(props){
    return (
    <>
            <Button type='reg_send'/>
            <br />    
            <br />    
            <Button type='cancel'/>
            <br />    
            <br />   
            <Button type='ok'/>
            <br />    
            <br />   
            <Button type='not_ok'/>
            <br />    
            <br />   
            <Button type='saw'/>
            <br />    
            <br />   
            <Button type='complete'/>
            <br />    
            <br />   
            <Button type='accept'/>
            <br />    
            <br />   
            <Button type='return_for_sending'/>
            <br />    
            <br />   
            <Button type='send_for_considering'/>
            <br />    
            <br />   
            <Button type='return_for_completing'/>
            <br />    
            <br />   
    </>
    )
}

export default ButtonSample;
