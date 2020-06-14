
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import DialogNewComponent from "../Components/IrisaComponents/Dialog";

//import Dialog from '../components/common/IbxDialog';
import {Switch as SwitchUI} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
//import IbxDNDTree from "../components/common/IbxDNDTree";
import Card from "@material-ui/core/Card";
import IrisaButton from '../Components/IrisaComponents/Button/IrisaButton';

class MyDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
            checked: false,
        }
    }
    render() {
        return (
        <div>
            <button onClick={(e)=>{this.setState({open: true})}}>Show Dialog</button>
            <DialogNewComponent
                open={this.state.open}
                title={"Edit Customer"}
                maxWidth={"lg"}
                //fullScreen
                TransitionComponent
                eventClose={(e) => {
                    this.setState({open: false});
                }}
                actionBar={
                    <>
                        <Button color={"primary"} variant={"outlined"} style={{"width":"75px","margin":"2px"}}>Ok</Button>
                        <Button color={"primary"} variant={"outlined"} style={{"width":"75px","margin":"2px"}}>Cancel</Button>
                        <IrisaButton label={"Irisa Button"} variant={"outlined"} style={{"width":"75px","margin":"2px"}}/>
                    </>
                }
            >
                <Grid container spacing={16} >
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

                    <Grid item xs={12} md={12}>
                        <TextField  placeholder={"Address 2"} variant={"outlined"}/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Typography gutterBottom variant={"h5"}>
                            Discounted Prices
                        </Typography>

                        <Typography gutterBottom component="h6" variant="h6">
                            This will give the user discountedprices for all products
                        </Typography>
                        <SwitchUI
                         checked={!this.state.checked}
                         value={"check box 1"}
                         color={"primary"}
                         onChange={(e)=>{
                             this.setState({checked:!this.state.checked});
                             console.log("checked 1",e);
                         }}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>

                        <Typography gutterBottom variant={"h5"}>
                            Email Verified
                        </Typography>

                        <Typography gutterBottom component="h6" variant="h6">
                            Disabling this will automatically send the user a
                            verification email
                        </Typography>
                        <SwitchUI
                         checked={this.state.checked}
                         value={"check box 2"}
                         color={"primary"}
                         onChange={(e)=>{
                             this.setState({checked:!this.state.checked});
                             console.log("checked 2",this.state.checked);
                         }}
                        />
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Typography variant={"h5"} gutterBottom>
                            The sample text in middle of form
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Typography variant={"h5"} gutterBottom>
                            This is a test
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Card style={{"min-height:":"100px","max-height:":"300px","overflow-y":"auto","border":"2px solid red"}}>
                        {/* <IbxDNDTree
                            data={
                              [{title:'A',children:[{title:'B',children:[{title:'B11'},{title:'B12',children:[{title:'B121'},{title:'B122'}]},{title:'B13'}]},{title:'C'}]}]
                            }/> */}
                        </Card>
                    </Grid>

                 </Grid>
            </DialogNewComponent>
        </div>
        );
    }
}

export default MyDialog;
