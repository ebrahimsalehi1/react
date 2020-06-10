
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import IrisaDialog from "../Components/IrisaComponents/Dialog";

class MyDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
        }
    }
    render() {
        return (
        <div>
            <button onClick={(e)=>
                {
                    this.setState({open: true});
                    console.log(this.state.open);                    
                }
                }>Show Dialog</button>
            <IrisaDialog
                open={this.state.open}
                title={"Edit Customer"}
                maxWidth={"xs"}
                //fullScreen
                //useOwnDialog={true}
                TransitionComponent
                eventClose={(e) => {
                    this.setState({open: false});
                }}
                actionBar={
                    <>
                    <Grid item xs={6} md={6}>
                        <Button color={"primary"} variant={"outlined"}>Ok</Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button color={"primary"} variant={"outlined"}>Cancel</Button>
                    </Grid>
                    </>}
            >
                <Grid container spacing={4}>
                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"Email address"} variant={"outlined"}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"Full name"} variant={"outlined"}/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"Phone Number"} variant={"outlined"}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"State/Region"} variant={"outlined"}/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"Country"} variant={"outlined"}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"Address 1"} variant={"outlined"}/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <TextField  placeholder={"Address 2"} variant={"outlined"}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                    </Grid>

                    {/* <Grid item xs={6} md={6}>
                        <Switch/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Switch/>
                    </Grid> */}

                </Grid>
            </IrisaDialog>
        </div>
        );
    }
}

export default MyDialog;
