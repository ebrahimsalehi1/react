import React, { useState, useEffect } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

const accordingStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    color: '#FFF',
    width: 500,
    borderRadius: 3
  }
}))
const accordionSummaryStyles = makeStyles(() => ({
  root: {
    background: 'rgba(0,0,0,0.5)',
    borderRadius: 3
  }
}))
const accordionDetailsStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const SimpleAccordion = (props) => {
  let checked
  const [state, setstate] = useState(checked)

  useEffect(() => {
    checked = document.querySelectorAll('.PrivateSwitchBase-input-7')
    setstate(checked)
  }, [])

  const according = accordingStyles()
  const accordionDetails = accordionDetailsStyles()
  const accordionSummary = accordionSummaryStyles()

  const clickHandler = (e) => {
    // setstate(prevstate => [...prevstate, ...checked])
    // setstate(state)
    setstate([...state].filter((item) => e.target.value === item.value))
    // setstate(checked)
    // console.log(checked[0].checked)
    console.log(state)
  }

  return (
    <div>
      <Grid
        style={{
          marginTop: '5%',
        }}
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Accordion className={according.root}>
            <AccordionSummary
              className={accordionSummary.root}
              expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SettingsIcon style={{ marginLeft: '2%' }} />
              <Typography>تنظیمات</Typography>
            </AccordionSummary>
            <AccordionDetails className={accordionDetails.root}>
              <div>
                {
                  props.items &&
                  props.items.map((item, key) => {
                    return (
                      <div key={key}>
                        <FormControlLabel
                          style={{
                            padding: '2%'
                          }}
                          key={key}
                          aria-label="Acknowledge"
                          control={
                            <Checkbox color="default"
                              value={item.id}
                              defaultChecked={item.value}
                              onClick={clickHandler}
                            />}
                          label={item.title}
                        />
                      </div>
                    )
                  })
                }
              </div>
              <Divider />
              <div style={{
                padding: '3%',
                display: 'flex',
                flexFlow: 'row-reverse'
              }}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    margin: '1%'
                  }}>انصراف</Button>
                <Button
                  variant="contained"
                  style={{
                    margin: '1%'
                  }}>ذخیره</Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  )
}

export default SimpleAccordion
