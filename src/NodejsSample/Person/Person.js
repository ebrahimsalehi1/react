import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import DatePicker from '../../Components/IrisaComponents/DatePicker/IrisaDatePicker';

const styles = {

};

function Person(props){

    return (
        <Grid container spacing={1} >
            <Grid item xs={12} md={12}>
                First Name: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Last Name: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Birth Date: <DatePicker componentType="date"/>
            </Grid>

        </Grid>
    )
}

export default withStyles(styles)(Person);
