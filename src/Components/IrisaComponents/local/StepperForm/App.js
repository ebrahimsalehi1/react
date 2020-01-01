import React from 'react'
import StepperForm from './components/Stepper'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import RTL from './utils/RTL'

const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'ganjnameh'
  }
})
function App() {
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <link rel='stylesheet' href='http://cdn.font-store.ir/ganjnameh.css' />
        <div dir='rtl' className='App'>
          <StepperForm />
        </div>
      </ThemeProvider>{' '}
    </RTL>
  )
}

export default App
