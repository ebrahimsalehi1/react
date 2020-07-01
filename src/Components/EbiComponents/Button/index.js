import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core'

const style={
    SUBMIT:{
        backgroundColor: '#424fb5',
        color: '#ffffff',
        boxShadow: 'none', 
        fontFamily: 'arial',       
        '&:hover': {
            backgroundColor: '#2f409a',
            color: '#ffffff',  
            boxShadow: '1px'        
        },
    },
    NO:{
        backgroundColor: '#e33a35',
        color: '#ffffff',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#c93532',
            color: '#ffffff',  
            boxShadow: '1px'        
        },
    },
    APPROVE:{
        backgroundColor: '#42a145',
        color: '#ffffff',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#3a853e',
            color: '#ffffff',  
            boxShadow: '1px'        
        },
    },
    REJECT:{
        backgroundColor: '#ffffff',
        color: '#9a5957',
        border: '1px solid #9a5957',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#f3f3f3',
            color: '#9a5957',  
            border: '1px solid #9a5957',
            boxShadow: '1px'        
        },
    },
    OK:{
        backgroundColor: '#ffffff',
        color: '#4e557f',
        border: '1px solid #4e557f',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#f3f3f3',
            color: '#4e557f',  
            border: '1px solid #4e557f',
            boxShadow: '1px'        
        },
    },
    COMPLETED:{
        backgroundColor: '#2b61ff',
        color: '#ffffff',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#224ecc',
            color: '#ffffff',  
            boxShadow: '1px'        
        },
    },
    ACCEPT:{
        backgroundColor: '#ffffff',
        color: '#6c8669',
        border: '1px solid #6c8669',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#f3f3f3',
            color: '#6c8669',  
            border: '1px solid #6c8669',
            boxShadow: '1px'        
        },
    },
    DEFFER:{
        backgroundColor: '#ffffff',
        color: '#000000',
        border: '1px solid #000000',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#f3f3f3',
            color: '#000000',  
            border: '1px solid #000000',
            boxShadow: '1px'        
        },
    },
    SENDTOEXPERT:{
        backgroundColor: '#ffffff',
        color: '#4865a1',
        border: '1px solid #4865a1',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#f3f3f3',
            color: '#4865a1', 
            border: '1px solid #4865a1', 
            boxShadow: '1px'        
        },
    },
    DEFFERFORCOMPLETING:{
        backgroundColor: '#f6f4f5',
        color: '#000000',
        border: '1px solid #000000',
        boxShadow: 'none',        
        '&:hover': {
            backgroundColor: '#ececec',
            color: '#000000',  
            border: '1px solid #000000',
            boxShadow: '1px'        
        },
    },
}

function EbiButton(props){

    const {classes,type,onClick} = props

    function realizeType(){
        let res = {title:'',style:{}};
        switch(type.toUpperCase()){
            case 'SUBMIT':
                res = {title:'ثبت و ارسال',style:classes.SUBMIT}; // SUBMIT
                break;
            case 'NO':
                res = {title:'انصراف از درخواست',style:classes.NO}; // NO
                break;
            case 'APPROVE':
                res = {title:'تایید',style:classes.APPROVE}; // APPROVE
                break;
            case 'REJECT':
                res = {title:'عدم تایید',style:classes.REJECT};// REJECT
                break;
            case 'OK':
                res = {title:'مشاهده شد',style:classes.OK}; // OK
                break;
            case 'COMPLETED':
                res = {title:'تکمیل فرآیند',style:classes.COMPLETED}; // COMPLETED
                break;
            case 'ACCEPT':
                res = {title:'قبول',style:classes.ACCEPT}; // ACCEPT
                break;
            case 'DEFFER':
                res = {title:'برگشت جهت ارسال',style:classes.DEFFER}; // DEFFER
                break;
            case 'SENDTOEXPERT':
                res = {title:'ارسال جهت کارشناسی',style:classes.SENDTOEXPERT}; // SENDTOEXPERT
                break;                
            case 'DEFFERFORCOMPLETING':
                res = {title:'بازگشت جهت تکمیل اطلاعات',style:classes.DEFFERFORCOMPLETING}; // 
                break;                
            default:            
        }

        return res;
    }

    const resVal = realizeType();
    
    return (<Button
            className={resVal.style}
            variant={'contained'}
            onClick={onClick}
        >{resVal.title}</Button>
    )
}

EbiButton.propTypes = {
    type: PropTypes.oneOf([
        'SUBMIT','NO','APPROVE','REJECT','OK',
        'COMPLETED','ACCEPT','DEFFER','SENDTOEXPERT','DEFFERFORCOMPLETING'
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default withStyles(style)(EbiButton);
