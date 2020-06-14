import React from 'react';
import { mount ,shallow ,render } from '../../../enzymeConfig';
import Dialog from '../../ComponentSamples/Dialog';
import {expect} from 'chai';
import { Calendar } from "react-modern-calendar-datepicker";
import TextField from '@material-ui/core/TextField';
import DialogMaterial from '@material-ui/core/Dialog';
import IrisaButton from '../../Components/IrisaComponents/Button/IrisaButton';

const MyDialog = ()=> (<Dialog />);

describe('test dialog',()=>{

    it('control number of render for Dialog',()=>{
        const comp = mount(<MyDialog />);
        expect(comp.find(Dialog)).to.have.lengthOf(1);
    });

    it('control number of render for material-Dialog',()=>{
        const comp = mount(<MyDialog />);
        expect(comp.find(DialogMaterial)).to.have.lengthOf(1);
    });

    it('control special button is render IrisaButton',()=>{
        const comp = mount(<MyDialog />);
        expect(comp.find(IrisaButton)).to.have.lengthOf(0);
    });

    it('control component value props ',()=>{
        const comp = mount(<MyDialog myprops="hello"/>);    
        expect(comp.prop('myprops')).to.equal('hello');
    });

    it('control component value props - actionBar include IrisaButton ',()=>{

        const comp = mount(<MyDialog myprops="hello"/>);    
        comp.find('.irisabutton').forEach(node=>{
            expect(node.hasClass('irisabutton')).to.equal(true);
        });

        //    wrappingComponent:Dialog
        //});    

        //const myDialog =  comp.getWrappingComponent();
        //console.log(myDialog.prop('actionBar'));        

        //comp.instance().prop('actionBar');
        //expect(comp.state('IrisaButton')).to.equal(1);
        
        //expect(comp.find('DialogNewComponent').prop('actionBar')).to.equal('hello');



    });    

});
