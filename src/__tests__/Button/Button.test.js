import React from 'react';
import { mount ,shallow ,render } from '../../../enzymeConfig';
//import {expect} from 'jest';
import MaterialButton from '@material-ui/core/Button';
import Button from '../../Components/EbiComponents/Button/index';
import SampleButton from '../../ComponentSamples/Button';
describe('test dialog',()=>{


    it('control number of render for Dialog',()=>{
        const comp = mount(<SampleButton />);
        expect(comp.find(Button).length).toBe(10);
    });

    it('control number of render for Dialog',()=>{
        const comp = shallow(<SampleButton />);
        expect(comp.find(MaterialButton).length).toBe(0);
    });

    // it('control number of render for material-Dialog',()=>{
    //     const comp = mount(<MyDialog />);
    //     expect(comp.find(DialogMaterial).length).toBe(1);
    // });

    // it('control special button is render IrisaButton',()=>{
    //     const comp = mount(<MyDialog />);
    //     expect(comp.find(IrisaButton).length).toBe(0);
    // });

    // it('control component value props ',()=>{
    //     const comp = mount(<MyDialog myprops="hello"/>);    
    //     expect(comp.prop('myprops')).toBe('hello');
    // });

    // it('control component value props - actionBar include IrisaButton ',()=>{

    //     const comp = mount(<MyDialog />);    
    //     comp.find('.irisabutton').forEach(node=>{
    //         expect(node.find(IrisaButton)).to.have.lengthOf(1);
    //     });

    // });    

});
