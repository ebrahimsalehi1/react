import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextField from '../../../Components/IrisaComponents/TextField/IrisaTextField'
import cases from './cases.json' //all cases

describe('<IrisaTextField />', () => {
  cases.forEach(item => {
    item.input.forEach(element => {
      it(item.type + ' Validation', () => {
        let comp
        switch (item.type) {
          // if validation type is either equality or match
          case 'equals':
          case 'matches':
            comp = render(
              <TextField
                testId={'field'}
                rules={{
                  trigger: 'change',
                  validationType: [item.type],
                  validationParams: ['match'],
                  onCustomValidation: true
                }}
                value={element}
              />
            )
            break
          //TODO: date validation
          //TODO: min, max, gt, lt validations
          //other kinds of validation
          default:
            comp = render(
              <TextField
                testId={'field'}
                rules={{
                  trigger: 'change',
                  validationType: [item.type],
                  validationParam: [],
                  onCustomValidation: true
                }}
                value={element}
              />
            )
            break
        }
        expect(comp.getByText(item.expected))
        comp.unmount() //unmount each component so we won't have repetitive components
      })
    })
  })

  it('onChange', () => {
    const f = jest.fn()
    const MyComp = function() {
      const [value, setValue] = React.useState('')
      return (
        <TextField
          testId='test'
          value={value}
          onChange={e => {
            setValue(e.target.value)
            f()
          }}
        />
      )
    }
    const comp = render(<MyComp />)
    const field = comp.getByTestId('test')
    fireEvent.change(field, { target: { value: 'ok' } })
    expect(f).toBeCalled()
    expect(field.value).toBe('ok')
  })

  it('onBlur', () => {
    const f = jest.fn()
    const comp = render(<TextField testId='test1' value='2' onBlur={f} />)
    const field = comp.getByTestId('test1')
    fireEvent.blur(field)
    expect(f).toBeCalled()
  })
})
