import React from 'react';
import Button from '../Components/EbiComponents/Button';
import Card from '@material-ui/core/Card';

function ButtonSample(props){
    return (
    <>
        <Card style={{"padding":"24px"}}>
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
        </Card>
    </>
    )
}

export default ButtonSample;
