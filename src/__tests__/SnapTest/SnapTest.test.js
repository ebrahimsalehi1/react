import React from 'react';
import { mount ,shallow ,render } from '../../../enzymeConfig';
import Dialog from '../../ComponentSamples/Dialog';
//import {expect} from 'jest';
import { Calendar } from "react-modern-calendar-datepicker";
import TextField from '@material-ui/core/TextField';
import DialogMaterial from '@material-ui/core/Dialog';
import IrisaButton from '../../Components/EbiComponents/Button/index';
import renderer from 'react-test-renderer';

describe('main test',()=>{
    // const MyComp = ()=>(
    //     <div>
    //         <label>This is a test</label>            
    //     </div>
    // )
    // it('test1',()=>{


    //     const TestedComp = renderer.create(<MyComp/>).toJSON();
    //     expect(TestedComp).toMatchSnapshot();

    // });

    it('4. Test events - sample component',()=>{
        const MyComp = () =>(
            <div>
                <h1>my title 1</h1>
                <input type={'TEXT'} />
                <button id={'button1'} onClick={e=>{console.log('click')}}>Click me</button>
            </div>
        );

        const onClick = jest.fn();
        const comp1 = render(<button id={'button1'} onClick={onClick}>Click me</button>);
        //comp1.find('#button1').simulate('click');
        comp1.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });



})