import React from 'react'
import {render} from '@testing-library/react'
import TextField from '../../../Components/IrisaComponents/TextField/IrisaTextField'
import Validation from '../../../Components/IrisaComponents/Utils/Validation'
import moment from 'moment'
import data from './ValidationData.json'

//import { DeviceSignalCellularConnectedNoInternet0Bar } from 'material-ui/svg-icons';

// function add(a,b){return a+b}

// it('check add --->',()=>{
//     expect([1,2].reduce((s,i)=>s+i,0)).toBe(3)
// })

describe('validation function ---> ',()=>{

    data.forEach(element => {

        it('validation ---> afterDate',()=>{
            const msg = "20191225"
            const result = Validation(msg,[element],null)
            const dat = moment(new Date(msg)).local('fa').format('YYYY/MM/DD HH:mm:ss')
        
            expect(result.messages).toBe('زمان حداقل:'+dat)
        })
            
        
    });

    it('validation ---> alpha',()=>{
        const msg = "123"
        const result = Validation(msg,['alpha'],null)
    
        expect(result.messages.replace('\n','')).toBe('کاراکترهای مجاز: حروف لاتین')
    })
    
})



/*
it('validation ---> ',()=>{
    const msg = "123"
    const result = Validation(msg,['alpha'],null)

    expect(result.messages).toBe(undefined)
})


it('validation ---> alphanumeric',()=>{
    const msg = "123"
    const result = Validation(msg,['alphanumeric'],null)

    expect(result.messages).toBe(undefined)
})


it('validation ---> alphanumericFa',()=>{
    const msg = "123"
    const result = Validation(msg,['alphanumericFa'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> equals',()=>{
    const msg = "123"
    const result = Validation(msg,['equals'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> email',()=>{
    const msg = "123"
    const result = Validation(msg,['email'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> lowercase',()=>{
    const msg = "123"
    const result = Validation(msg,['lowercase'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> matches',()=>{
    const msg = "123"
    const result = Validation(msg,['matches'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> mobilePhone',()=>{
    const msg = "123"
    const result = Validation(msg,['mobilePhone'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> number',()=>{
    const msg = "123"
    const result = Validation(msg,['number'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> numberFloat',()=>{
    const msg = "123"
    const result = Validation(msg,['numberFloat'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> numberInt',()=>{
    const msg = "123"
    const result = Validation(msg,['numberInt'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> required',()=>{
    const msg = "123"
    const result = Validation(msg,['required'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> uppercase',()=>{
    const msg = "123"
    const result = Validation(msg,['uppercase'],null)

    expect(result.messages).toBe(undefined)
})

it('validation ---> ELSE',()=>{
    const msg = "123"
    const result = Validation(msg,['ELSE'],null)

    expect(result.messages).toBe(undefined)
})
*/