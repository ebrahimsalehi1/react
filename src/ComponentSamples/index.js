import React from 'react';
//import Dialog from './Dialog';
//import TreeViewSample from './TreeViewSample';
import MiniDrawer from './MiniDrawer';
import {
    Brightness2 as IconButton,
    BrightnessHigh as IconCheckbox,
    Build as IconRadio,
    CardMembership as IconRadioGroup,
    CloudDone as IconTextField,
    Code as IconImage,
    ColorLens as IconDisplayTextField,
    Create as IconCombobox,
    DeleteOutline as IconTree,
    DepartureBoard as IconTabs,
    DirectionsBike as IconStackedCanvas,
    //DirectionsRun,
} from '@material-ui/icons';

import ButtonSample from '../ComponentSamples/Button';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {useTranslation} from 'react-i18next';

export default function ComponentSamples(props){

    const [selectedValue,setSelectedValue] = React.useState('');
    const dataItems = [
        {text: 'Button', icon:IconButton },
        {text: 'Checkbox', icon:IconCheckbox},
        {text: 'Radio Button', icon:IconRadio},
        {text: 'Radio Button Group', icon:IconRadioGroup},
        {text: 'TextField', icon:IconTextField},
        {text: 'Image', icon:IconImage},
        {text: 'DisplayTextField', icon:IconDisplayTextField},
        {text: 'Combobox', icon:IconCombobox},
        {text: 'Tree', icon:IconTree},
        {text: 'Tabs', icon:IconTabs},
        {text: 'StackedCanvas', icon:IconStackedCanvas},
    ];

    const {t} = useTranslation();

    function onClick(type){
        setSelectedValue(type);
        console.log('values is ',selectedValue);        
    }

    return (
        <>
           <MiniDrawer data={dataItems}
            onClick={onClick}
            >
            <Card style={{"padding":"24px","height":"600px"}}>
            <Grid container spacing={0}>
                    <Grid item xs={3} md={3}>

                        {selectedValue==='Button' && <ButtonSample/>}

                        {/* {selectedValue==='Checkbox' && <ButtonSample/>}

                        {selectedValue==='Radio Button' && <ButtonSample/>}

                        {selectedValue==='Radio Button Group' && <ButtonSample/>}

                        {selectedValue==='TextField' && <ButtonSample/>}

                        {selectedValue==='Image' && <ButtonSample/>}

                        {selectedValue==='DisplayTextField' && <ButtonSample/>}

                        {selectedValue==='Combobox' && <ButtonSample/>}

                        {selectedValue==='Tree' && <ButtonSample/>}

                        {selectedValue==='Tabs' && <ButtonSample/>}

                        {selectedValue==='StackedCanvas' && <ButtonSample/>} */}
                    </Grid>                    
                    <Grid item xs={9} md={9}>
                        
                    {selectedValue==='Button' && <>{String(t('Button_Desc.1'))}</>}
                                                                                      
                    </Grid>        
                </Grid>
                </Card>

            </MiniDrawer>

           {/* <Dialog />  */}

           {/* <TreeViewSample /> */}

        </>
    )
}
