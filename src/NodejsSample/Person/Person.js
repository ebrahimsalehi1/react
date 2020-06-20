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

            <Grid item xs={3} md={3}>
                First Name: 
            </Grid>
            <Grid item xs={9} md={9}>
                <TextField variant="outlined"/>
            </Grid>

            <Grid item xs={3} md={3}>
                Last Name: 
            </Grid>
            <Grid item xs={9} md={9}>
                <TextField variant="outlined"/>
            </Grid>

            <Grid item xs={3} md={3}>
                Birth Date: 
            </Grid>
            <Grid item xs={9} md={9}>
                <DatePicker componentType="date"/>
            </Grid>

            <Grid item xs={3} md={3}>
                Code Nationality: 
            </Grid>
            <Grid item xs={9} md={9}>
                <TextField variant="outlined"/>
            </Grid>

            <Grid item xs={3} md={3}>
                Code Passport: 
            </Grid>
            <Grid item xs={9} md={9}>
                <TextField variant="outlined"/>
            </Grid>

            <Grid item xs={3} md={3}>
                Code Economic: 
            </Grid>
            <Grid item xs={9} md={9}>
                <TextField variant="outlined"/>
            </Grid>

            <Grid item xs={3} md={3}>
                Code Nationality Company: 
            </Grid>
            <Grid item xs={9} md={9}>
                <TextField variant="outlined"/>
            </Grid>     

        </Grid>
        </Card>
    )
}

export default withStyles(styles)(Person);
