import React from 'react'
import {render} from '@testing-library/react'
import TextField from '../../../Components/IrisaComponents/TextField/IrisaTextField'
import Validation from '../../../Components/IrisaComponents/Utils/Validation'

const comp = render(
<TextField testId={'name1'} name={'name1'} value={'value1'} />)

it('validation ---> input values, validation for alpha',()=>{
    const msg = "123"
    const result = Validation(msg,['alpha'],null)

    expect(result.messages).toBe(undefined)
})
