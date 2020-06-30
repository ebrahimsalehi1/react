import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core'

/*
export const useStyles = createStyles(theme=>({
    button: {
        margin: '0 5px',
        fontSize: 11,
    },     
    input: {
      display: 'none',
    },         
  }));
*/

const style={
    reg_send:{
        backgroundColor: '#7687e0',
        color: '#ffffff',
        boxShadow: 'none', 
        fontFamily: 'arial',       
        '&:hover': {
            backgroundColor: '#7687e0',
            color: '#ffffff',  
            boxShadow: 'none'        
        },
    },
    cancel:{
        backgroundColor: '#e33a35',
        color: '#ffffff',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#e33a35',
            color: '#ffffff',  
            boxShadow: 'none'        
        },
    },
    ok:{
        backgroundColor: '#42a145',
        color: '#ffffff',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#42a145',
            color: '#ffffff',  
            boxShadow: 'none'        
        },
    },
    not_ok:{
        backgroundColor: '#ffffff',
        color: '#9a5957',
        border: '2px solid #9a5957',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#9a5957',  
            border: '2px solid #9a5957',
            boxShadow: 'none'        
        },
    },
    saw:{
        backgroundColor: '#ffffff',
        color: '#4e557f',
        border: '2px solid #4e557f',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#4e557f',  
            border: '2px solid #4e557f',
            boxShadow: 'none'        
        },
    },
    complete:{
        backgroundColor: '#2b61ff',
        color: '#ffffff',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#2b61ff',
            color: '#ffffff',  
            boxShadow: 'none'        
        },
    },
    accept:{
        backgroundColor: '#ffffff',
        color: '#6c8669',
        border: '2px solid #6c8669',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#6c8669',  
            border: '2px solid #6c8669',
            boxShadow: 'none'        
        },
    },
    return_for_sending:{
        backgroundColor: '#ffffff',
        color: '#000000',
        border: '2px solid #000000',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000',  
            border: '2px solid #000000',
            boxShadow: 'none'        
        },
    },
    send_for_considering:{
        backgroundColor: '#ffffff',
        color: '#4865a1',
        border: '2px solid #4865a1',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#4865a1', 
            border: '2px solid #4865a1', 
            boxShadow: 'none'        
        },
    },
    return_for_completing:{
        backgroundColor: '#f6f4f5',
        color: '#000000',
        border: '2px solid #000000',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#f6f4f5',
            color: '#000000',  
            border: '2px solid #000000',
            boxShadow: 'none'        
        },
    },
}

function EbiButton(props){

    const {classes,type} = props

    function realizeType(){
        let res = {title:'',style:{}};
        switch(type.toLowerCase()){
            case 'reg_send':
                res = {title:'ثبت و ارسال',style:classes.reg_send};
                break;
            case 'cancel':
                res = {title:'انصراف از درخواست',style:classes.cancel};
                break;
            case 'ok':
                res = {title:'تایید',style:classes.ok};
                break;
            case 'not_ok':
                res = {title:'عدم تایید',style:classes.not_ok};
                break;
            case 'saw':
                res = {title:'مشاهده شد',style:classes.saw};
                break;
            case 'complete':
                res = {title:'تکمیل فرآیند',style:classes.complete};
                break;
            case 'accept':
                res = {title:'قبول',style:classes.accept};
                break;
            case 'return_for_sending':
                res = {title:'برگشت جهت ارسال',style:classes.return_for_sending};
                break;
            case 'send_for_considering':
                res = {title:'ارسال جهت کارشناسی',style:classes.send_for_considering};
                break;                
            case 'return_for_completing':
                res = {title:'ارسال جهت کارشناسی',style:classes.return_for_completing};
                break;                
            default:            
        }

        return res;
    }

    const resVal = realizeType();

    console.log('rendering',resVal);
    
    return (<Button
            className={resVal.style}
            variant={'contained'}
        >{resVal.title}</Button>
    )
}

EbiButton.propTypes = {
    //classes: PropTypes.object.isRequired,
    type: PropTypes.oneOf([
        'reg_send','cancel','ok','not_ok','saw',
        'complete','accept','return_for_sending','send_for_considering','return_for_completing'
    ]),
};

export default withStyles(style)(EbiButton);
