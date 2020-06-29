import React from 'react'
import { TextField, Card } from '@material-ui/core'

export default function Step2({ handleChange, mainInfo, stepTitle, classes }) {
  return (
    <Card
      className={classes.container}
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <span className={classes.title}>{stepTitle}</span>
      <TextField
        className={classes.field}
        variant='outlined'
        name='phone'
        value={mainInfo.phone.value}
        onChange={handleChange}
        label='شماره تلفن'
        margin='normal'
      />
      <TextField
        rows={3}
        maxRows={4}
        multiline={true}
        className={classes.field}
        variant='outlined'
        name='address'
        value={mainInfo.address.value}
        onChange={handleChange}
        label='آدرس'
        margin='normal'
      />
    </Card>
  )
}
