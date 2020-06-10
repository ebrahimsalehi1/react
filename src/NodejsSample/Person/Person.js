import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import DatePicker from '../../Components/IrisaComponents/DatePicker/IrisaDatePicker';
import Card from '@material-ui/core/Card';

const styles = {

};

function Person(props){

    return (
        <Card>
        <Grid container spacing={2} >
            <Grid item xs={12} md={12}>
                First Name: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Last Name: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Birth Date: <DatePicker componentType="date"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Code Nationality: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Code Passport: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Code Economic: <TextField variant="outlined"/>
            </Grid>
            <Grid item xs={12} md={12}>
                Code Nationality Company: <TextField variant="outlined"/>
            </Grid>            
        </Grid>
        </Card>
    )
}

export default withStyles(styles)(Person);
