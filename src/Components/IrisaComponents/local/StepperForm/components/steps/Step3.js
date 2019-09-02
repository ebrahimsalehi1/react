import React, { createRef } from 'react'
import { Button, TextField, Card } from '@material-ui/core'

export default function Step3({
  handleChange,
  mainInfo,
  handleImageChange,
  stepTitle,
  classes
}) {
  let fileInput = createRef()

  function _handleImageChange(e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      handleImageChange(reader.result, file)
    }

    reader.readAsDataURL(file)
  }

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
        name='username'
        value={mainInfo.username.value}
        onChange={handleChange}
        label='نام کاربری'
        margin='normal'
      />
      <span style={{ marginTop: 30 }}>آواتار:</span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10,
          alignItems: 'center'
        }}>
        <input
          ref={fileInput}
          accept='image/*'
          style={{ display: 'none' }}
          id='raised-button-file'
          multiple
          type='file'
          onChange={_handleImageChange}
        />
        {mainInfo.imageUrl ? (
          <img
            style={{ width: 150, height: 150 }}
            src={mainInfo.imageUrl}
            alt='عکس پروفایل'
          />
        ) : (
          <img
            style={{ width: 150, height: 150 }}
            src={require('./../img/profile.png')}
            alt='عکس پروفایل'
          />
        )}
        <label htmlFor='raised-button-file'>
          <Button
            style={{ marginTop: 20 }}
            variant='contained'
            color='primary'
            component='span'>
            انتخاب فایل
          </Button>
        </label>
      </div>
    </Card>
  )
}
