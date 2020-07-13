import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ProcessInfo(props){
    return (
        <Grid container spacing={0}> 

            <Grid item xs={12} md={12}>
                Type : <Typography variant="h4">Type 1</Typography>
            </Grid>

            <Grid item xs={12} md={12}>
                Process Info : <Typography variant="h4">Process Info</Typography>
            </Grid>

            <Grid item xs={12} md={12}>
                Task Id : <Typography variant="h4">Task Id</Typography>
            </Grid>

            <Grid item xs={12} md={12}>
                Flow Id : <Typography variant="h4">Flow Id</Typography>
            </Grid>

        </Grid>
    );
}

export default ProcessInfo;
