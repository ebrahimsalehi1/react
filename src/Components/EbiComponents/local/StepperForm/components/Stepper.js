import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button } from '@material-ui/core'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30',
    paddingLeft: 200,
    paddingRight: 200,
    width: '70%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    height: 400,
    padding: theme.spacing(5),
    paddingLeft: '30%',
    paddingRight: '30%'
  },
  buttonContainer: {
    marginRight: theme.spacing(5)
  }
}))

const useStepStyles = makeStyles(theme => ({
  field: {
    marginRight: theme.spacing(1)
  },
  container: {
    display: 'flex',
    paddingTop: theme.spacing(1),
    padding: theme.spacing(5),
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

function getSteps() {
  return ['اطلاعات اصلی', 'اطلاعات تکمیلی', 'پروفایل']
}

export default function HorizontalLinearStepper() {
  const classes = useStyles()
  const stepClasses = useStepStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [mainInfo, setMainInfo] = React.useState({
    name: { value: '' },
    family: { value: '' },
    email: { value: '' },
    gender: { value: 'male' },
    phone: { value: '' },
    address: { value: '' },
    username: { value: '' },
    imageUrl: '',
    imageFile: null
  })
  const steps = getSteps()
  function handleChange(event) {
    const { name, value } = event.target
    setMainInfo({
      ...mainInfo,
      [name]: {
        ...mainInfo[name],
        value: value
      }
    })
  }

  function handleGender(gender) {
    setMainInfo({ ...mainInfo, gender: { value: gender } })
  }

  function handleImageChange(url, file) {
    setMainInfo({ ...mainInfo, imageUrl: url, imageFile: file })
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Step1
            classes={stepClasses}
            stepTitle={getSteps()[step]}
            mainInfo={mainInfo}
            handleChange={handleChange}
            handleGender={handleGender}
          />
        )
      case 1:
        return (
          <Step2
            classes={stepClasses}
            stepTitle={getSteps()[step]}
            mainInfo={mainInfo}
            handleChange={handleChange}
          />
        )
      case 2:
        return (
          <Step3
            classes={stepClasses}
            stepTitle={getSteps()[step]}
            mainInfo={mainInfo}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
          />
        )
      default:
        return 'Unknown step'
    }
  }

  function handleNext() {
    if (activeStep + 1 === steps.length) {
      console.log(mainInfo)
      alert('check log for info!')
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        <div>
          <div className={classes.instructions}>
            {getStepContent(activeStep)}
          </div>
          <div style={{ marginRight: 20 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}>
              قبلی
            </Button>

            <Button
              variant='contained'
              color='primary'
              onClick={handleNext}
              className={classes.button}>
              {activeStep === steps.length - 1 ? 'پایان' : 'بعدی'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
