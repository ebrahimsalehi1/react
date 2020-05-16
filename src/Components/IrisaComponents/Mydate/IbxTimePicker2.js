import React,{useState} from 'react'
import { MuiPickersUtilsProvider, TimePickerView } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns"; 
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
  root: {    
    justify: 'cener',    
    alignContent: 'center'  
  },
  buttonActive:{
    backgroundColor: 'blue',
    color: 'white'
  },
  buttonDeActive:{
    backgroundColor: 'blue',
    color: 'gray'
  }
};

function IbxTimePicker2(props){

    const {value,onChange,classes} = props;

    const [buttonPress,setButtonPrress] = useState(0);
    const [selectedDate,setSelectedDate] = useState(value ? value:new Date())

    function handleChangeButton(event,value){

        switch (value) {
          case 0:
            setButtonPrress(0);
            break;
          case 1:
            setButtonPrress(1);
            break;          
          default:
            break;
        }    
    }

    function handleChangeDate(event){

      setSelectedDate(event);

      if(onChange)        
        onChange(event);
                  
    }

    console.log("render-IbxTimePicker2",selectedDate);
    
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={12}>
              <BottomNavigation
              value={value}
              onChange={handleChangeButton}
              showLabels              
            >
              <BottomNavigationAction className={buttonPress===0 ? classes.buttonActive : classes.buttonDeActive} label={selectedDate.getHours()}  icon={<RestoreIcon />} />
              <BottomNavigationAction className={buttonPress===1 ? classes.buttonActive : classes.buttonDeActive} label={selectedDate.getMinutes()} icon={<FavoriteIcon />} />
            </BottomNavigation>          
        </Grid>
        <Grid item xs={12} md={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <>
            { buttonPress===0 &&
              <TimePickerView
              type="hours"
              date={selectedDate}
              ampm={false}
              onHourChange={handleChangeDate}
              onMinutesChange={handleChangeDate}
              onSecondsChange={handleChangeDate}
              />          
            
            }

            { buttonPress===1 &&
              <TimePickerView
              type="minutes"
              date={selectedDate}
              ampm={false}
              onHourChange={handleChangeDate}
              onMinutesChange={handleChangeDate}
              onSecondsChange={handleChangeDate}
              />          
            
            }
            </>

          {/* <BasePicker onChange={handleChangeDate} >
                  {({
                    date,
                    handleAccept,
                    handleChange,
                    handleClear,
                    handleDismiss,
                    handleSetTodayDate,
                    handleTextFieldChange,
                    pick12hOr24hFormat,
                  }) => {
                    handleChangeDate(date);                    

                    if(buttonPress===0)
                      return (                      
                        <TimePickerView
                          type="hours"
                          date={date}
                          ampm={false}
                          onHourChange={handleChange}
                          onMinutesChange={handleChange}
                          onSecondsChange={handleChange}
                        />          
                        )
                    else
                      return (                      
                        <TimePickerView
                          type="minutes"
                          date={date}
                          ampm={false}
                          onHourChange={handleChange}
                          onMinutesChange={handleChange}
                          onSecondsChange={handleChange}
                        />          
                        )
                      
                      }}
                      </BasePicker> */}
          </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  )

}

IbxTimePicker2.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func,
  mode: PropTypes.string,  
}

export default withStyles(styles)(IbxTimePicker2)
