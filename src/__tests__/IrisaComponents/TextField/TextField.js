
import React from 'react'
import {render} from '@testing-library/react'
import TextField from '../../../Components/IrisaComponents/TextField/IrisaTextField'

const comp = render(
<TextField testId={'name1'} name={'name1'} value={'value1'} />)

it('check value for inputs',()=>{
    expect(comp.getByTestId('name1').value).toBe('value1')
})
