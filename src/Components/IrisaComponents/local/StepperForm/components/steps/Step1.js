import React from 'react'
import { TextField, ButtonGroup, Button, Card } from '@material-ui/core'

export default function Step1({
  mainInfo,
  handleChange,
  handleGender,
  stepTitle,
  classes
}) {
  return (
    <Card className={classes.container}>
      <span className={classes.title}>{stepTitle}</span>
      <TextField
        variant='outlined'
        name='name'
        label='نام'
        margin='normal'
        value={mainInfo.name.value}
        onChange={handleChange}
        className={classes.field}
      />
      <TextField
        className={classes.field}
        variant='outlined'
        name='family'
        label='نام خانوادگی'
        value={mainInfo.family.value}
        onChange={handleChange}
        margin='normal'
      />
      <TextField
        variant='outlined'
        name='email'
        label='ایمیل'
        margin='normal'
        onChange={handleChange}
        value={mainInfo.email.value}
        className={classes.field}
      />
      <label className={classes.field} style={{ marginTop: 10 }}>
        جنسیت:
        <ButtonGroup
          size='medium'
          style={{ marginRight: 20 }}
          aria-label='جنسیت'
          color='primary'>
          <Button
            variant={
              mainInfo.gender.value === 'male' ? 'contained' : 'outlined'
            }
            color={mainInfo.gender.value === 'male' ? 'primary' : 'default'}
            onClick={e => {
              handleGender('male')
            }}>
            مرد
          </Button>
          <Button
            variant={
              mainInfo.gender.value === 'female' ? 'contained' : 'outlined'
            }
            color={mainInfo.gender.value === 'female' ? 'primary' : 'default'}
            onClick={e => {
              handleGender('female')
            }}>
            زن
          </Button>
        </ButtonGroup>
      </label>
    </Card>
  )
}
