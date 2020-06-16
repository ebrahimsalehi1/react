import React from 'react';
import { mount ,shallow ,render } from '../../../enzymeConfig';
import Dialog from '../../ComponentSamples/Dialog';
//import {expect} from 'jest';
import { Calendar } from "react-modern-calendar-datepicker";
import TextField from '@material-ui/core/TextField';
import DialogMaterial from '@material-ui/core/Dialog';
import IrisaButton from '../../Components/IrisaComponents/Button/IrisaButton';

describe('test dialog',()=>{

    // const MyDialog2 = () =>(
    //     <div>
    //             <button onClick={(e)=>{this.setState({open: true})}}>Show Dialog</button>
    //             <DialogNewComponent
    //                 open={this.state.open}
    //                 title={"Edit Customer"}
    //                 maxWidth={"lg"}
    //                 //fullScreen
    //                 TransitionComponent
    //                 eventClose={(e) => {
    //                     this.setState({open: false});
    //                 }}
    //                 actionBar={
    //                     <>
    //                         <Button color={"primary"} variant={"outlined"} style={{"width":"75px","margin":"2px"}}>Ok</Button>
    //                         <Button color={"primary"} variant={"outlined"} style={{"width":"75px","margin":"2px"}}>Cancel</Button>
    //                         <IrisaButton label={"Irisa Button"} variant={"outlined"} style={{"width":"75px","margin":"2px"}}/>
    //                     </>
    //                 }
    //             >
    //                 <Grid container spacing={16} >
    //                     <Grid item xs={6} md={6}>
    //                         <TextField  placeholder={"Email address"} variant={"outlined"}/>
    //                     </Grid>
    //                     <Grid item xs={6} md={6}>
    //                         <TextField  placeholder={"Full name"} variant={"outlined"}/>
    //                     </Grid>
    
    //                     <Grid item xs={6} md={6}>
    //                         <TextField  placeholder={"Phone Number"} variant={"outlined"}/>
    //                     </Grid>
    //                     <Grid item xs={6} md={6}>
    //                         <TextField  placeholder={"State/Region"} variant={"outlined"}/>
    //                     </Grid>
    
    //                     <Grid item xs={6} md={6}>
    //                         <TextField  placeholder={"Country"} variant={"outlined"}/>
    //                     </Grid>
    //                     <Grid item xs={6} md={6}>
    //                         <TextField  placeholder={"Address 1"} variant={"outlined"}/>
    //                     </Grid>
    
    //                     <Grid item xs={12} md={12}>
    //                         <TextField  placeholder={"Address 2"} variant={"outlined"}/>
    //                     </Grid>
    
    //                     <Grid item xs={6} md={6}>
    //                         <Typography gutterBottom variant={"h5"}>
    //                             Discounted Prices
    //                         </Typography>
    
    //                         <Typography gutterBottom component="h6" variant="h6">
    //                             This will give the user discountedprices for all products
    //                         </Typography>
    //                         <SwitchUI
    //                          checked={!this.state.checked}
    //                          value={"check box 1"}
    //                          color={"primary"}
    //                          onChange={(e)=>{
    //                              this.setState({checked:!this.state.checked});
    //                              console.log("checked 1",e);
    //                          }}
    //                         />
    //                     </Grid>
    //                     <Grid item xs={6} md={6}>
    
    //                         <Typography gutterBottom variant={"h5"}>
    //                             Email Verified
    //                         </Typography>
    
    //                         <Typography gutterBottom component="h6" variant="h6">
    //                             Disabling this will automatically send the user a
    //                             verification email
    //                         </Typography>
    //                         <SwitchUI
    //                          checked={this.state.checked}
    //                          value={"check box 2"}
    //                          color={"primary"}
    //                          onChange={(e)=>{
    //                              this.setState({checked:!this.state.checked});
    //                              console.log("checked 2",this.state.checked);
    //                          }}
    //                         />
    //                     </Grid>
    
    //                     <Grid item xs={6} md={6}>
    //                         <Typography variant={"h5"} gutterBottom>
    //                             The sample text in middle of form
    //                         </Typography>
    //                     </Grid>
    
    //                     <Grid item xs={6} md={6}>
    //                         <Typography variant={"h5"} gutterBottom>
    //                             This is a test
    //                         </Typography>
    //                     </Grid>
    
    //                     <Grid item xs={12} md={12}>
    //                         <Card style={{"min-height:":"100px","max-height:":"300px","overflow-y":"auto","border":"2px solid red"}}>
    //                         {/* <IbxDNDTree
    //                             data={
    //                               [{title:'A',children:[{title:'B',children:[{title:'B11'},{title:'B12',children:[{title:'B121'},{title:'B122'}]},{title:'B13'}]},{title:'C'}]}]
    //                             }/> */}
    //                         </Card>
    //                     </Grid>
    
    //                  </Grid>
    //             </DialogNewComponent>
    //         </div>
    // )
    
    const MyDialog = ()=> (<Dialog />);

    it('control number of render for Dialog',()=>{
        const comp = mount(<MyDialog />);
        expect(comp.find(Dialog).length).toBe(1);
    });

    it('control number of render for material-Dialog',()=>{
        const comp = mount(<MyDialog />);
        expect(comp.find(DialogMaterial).length).toBe(1);
    });

    it('control special button is render IrisaButton',()=>{
        const comp = mount(<MyDialog />);
        expect(comp.find(IrisaButton).length).toBe(0);
    });

    it('control component value props ',()=>{
        const comp = mount(<MyDialog myprops="hello"/>);    
        expect(comp.prop('myprops')).toBe('hello');
    });

    it('control component value props - actionBar include IrisaButton ',()=>{

        const comp = mount(<MyDialog />);    
        comp.find('.irisabutton').forEach(node=>{
            expect(node.find(IrisaButton)).to.have.lengthOf(1);
        });

    });    

});
