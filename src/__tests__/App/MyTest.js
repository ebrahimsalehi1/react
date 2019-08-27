
import React from 'react'
import {render} from '@testing-library/react'
import TextField from '../../irisacomponents/src/itcomponents/TextField/IrisaTextField'

const comp = render(
<TextField testId={'name1'} name={'name1'} value={'value1'} />)

function add(a,b){return a+b}

it('test react component',()=>{
    expect(comp.getByTestId('name1').value).toBe('value1')

})

it('sum for two numbers',()=>{
    expect(add(1,2)).toBe(3)

})

