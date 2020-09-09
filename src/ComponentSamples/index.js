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
import EbiTableData from '../Components/EbiComponents/TableData';
import ObieeApperance from '../Components/EbiComponents/Appearance';

import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {useTranslation} from 'react-i18next';

export default function ComponentSamples(props){

    const [selectedValue,setSelectedValue] = React.useState('');
    const dataItems = [
        {text: 'Button', icon:IconButton,category: 1 },
        {text: 'Checkbox', icon:IconCheckbox,category: 1},
        {text: 'Radio Button', icon:IconRadio,category: 1},
        {text: 'Radio Button Group', icon:IconRadioGroup,category: 1},
        {text: 'TextField', icon:IconTextField,category: 1},
        {text: 'Image', icon:IconImage,category: 1},
        {text: 'DisplayTextField', icon:IconDisplayTextField,category: 1},
        {text: 'Combobox', icon:IconCombobox,category: 1},
        {text: 'Tree', icon:IconTree,category: 1},
        {text: 'Tabs', icon:IconTabs,category: 1},
        {text: 'StackedCanvas', icon:IconStackedCanvas,category: 1},
        {text: 'Appearance', icon:IconStackedCanvas,category: 1},
        {text: 'TableData', icon:IconStackedCanvas,category: 1},

        {text: 'Dialog', icon:IconStackedCanvas,category: 2},
    
    ];

    // Array.prototype.groupBy = function(k) {
    //     return this.reduce((acc, item) => ((acc[item[k]] = [...(acc[item[k]] || []), item]), acc),{});
    //   };
      
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

                        {selectedValue==='Tree' && <ButtonSample/>*/}

                        {selectedValue==='Appearance' && <ObieeApperance />}

                        {selectedValue==='TableData' && <EbiTableData />} 
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
