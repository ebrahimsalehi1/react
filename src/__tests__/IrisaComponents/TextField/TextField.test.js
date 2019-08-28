import React from 'react'
import { render } from '@testing-library/react'
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
})
