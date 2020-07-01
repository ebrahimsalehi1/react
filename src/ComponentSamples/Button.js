import React from 'react';
import Button from '../Components/EbiComponents/Button';
import Close from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button';

function ButtonSample(props){
    return (
    <>
            <Button type='SUBMIT' onClick={e=>{alert('SUBMIT');}} style={{'background-color':'yellow'}}><Close/></Button>
            <br />    
            <br />    
            <Button type='NO' onClick={e=>{alert('NO');}}/>
            <br />    
            <br />   
            <Button type='APPROVE' onClick={e=>{alert('APPROVE');}}/>
            <br />    
            <br />   
            <Button type='REJECT' onClick={e=>{alert('REJECT');}}/>
            <br />    
            <br />   
            <Button type='OK' onClick={e=>{alert('OK');}}/>
            <br />    
            <br />   
            <Button type='COMPLETED' onClick={e=>{alert('COMPLETED');}}/>
            <br />    
            <br />   
            <Button type='ACCEPT' onClick={e=>{alert('ACCEPT');}}/>
            <br />    
            <br />   
            <Button type='DEFFER' onClick={e=>{alert('DEFFER');}}/>
            <br />    
            <br />   
            <Button type='SENDTOEXPERT' onClick={e=>{alert('SENDTOEXPERT');}}/>
            <br />    
            <br />   
            <Button type='DEFFERFORCOMPLETING' onClick={e=>{alert('DEFFERFORCOMPLETING');}}/>
            <br />    
            {/* <br />   
            <MaterialButton>This is a test</MaterialButton> */}
    </>
    )
}

export default ButtonSample;
