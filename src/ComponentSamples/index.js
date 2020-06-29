import React from 'react';
import Dialog from './Dialog';
import TreeViewSample from './TreeViewSample';
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
    DirectionsRun,
} from '@material-ui/icons';

import ButtonSample from '../ComponentSamples/Button';


export default function ComponentSamples(props){

    const [selectedValue,setSelectedValue] = React.useState('');

    function onClick(type){
        setSelectedValue(type);
        console.log('values is ',selectedValue);        
    }

    return (
        <>
           <MiniDrawer data={
            [
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
            ]}
            onClick={onClick}
            >

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

            </MiniDrawer>

           {/* <Dialog />  */}

           {/* <TreeViewSample /> */}

        </>
    )
}
