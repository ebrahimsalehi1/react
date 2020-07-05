import React from 'react';
import { mount ,shallow ,render } from '../../../enzymeConfig';
import { ExpansionPanelActions } from '@material-ui/core';

describe('learn enzyme',()=>{

    const Ebi1 = (props)=> (
    <div id="ebrahimsalehi" className=".ebrahimsalehi.style">
        <label>This is a test component</label>
        <input type="TEXT" />
        {props.ebrahim}
        <button className=".btn1">test</button>
    </div>
    );

    it("1>part 1",()=>{
        const comp1 = mount(<Ebi1 />);
        expect(comp1.find("#ebrahimsalehi").hasClass(".ebrahimsalehi.style")).toBe(true);
    });

    it("2>part 2",()=>{
        const comp1 = mount(<Ebi1 ebrahim="123"/>);
        expect(comp1.prop("ebrahim")).toBe("123");
    });

    it("3>part 3",()=>{
        const comp1 = mount(<Ebi1 ebrahim="123"/>);
        expect(typeof comp1.prop("ebrahim")==='string').toBeTruthy();
    });

    it("4>part 4",()=>{
        const comp1 = mount(<Ebi1 />);
        //const btn = ()=> (<button>Ok</button>)
        expect(comp1.find("button").length).toBe(1);
    });

    it("5>part 5",()=>{
        const comp1 = mount(<Ebi1 />);
        //const btn = ()=> (<button>Ok</button>)
        expect(comp1.find(".btn1").length).toBe(1);
    });

});
