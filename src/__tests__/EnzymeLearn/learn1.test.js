import React from 'react';
import { mount ,shallow ,render } from '../../../enzymeConfig';
import { ExpansionPanelActions } from '@material-ui/core';

describe('learn enzyme',()=>{

    const Ebi1 = (props)=> {

        const [show,setShow] = React.useState(false);

        return (
            <div id="ebrahimsalehi" className=".ebrahimsalehi.style">
                <label>This is a test component</label>
                <input type="TEXT" />
                {props.ebrahim}
                <button id="btn1" onClick={()=>{setShow(true)}}>test</button>
                {
                    show &&
                    <div id="div1">test</div>
                }
            </div>
        )
    };

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
        const comp1 = mount(<Ebi1 />).find("button#btn1");
        comp1.simulate('click');
        const comp2 = mount(<Ebi1 />).find("div#div1");
        expect(comp2.length).toBe(1);
    });

    it("6>part 6",()=>{
        // https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675
        const onClick = jest.fn();
        const comp1 = mount(<Ebi1 />).find("button#btn1");
        comp1.simulate('click');
        //const comp2 = mount(<Ebi1 />).find("div#div1");
        expect(onClick).toHaveBeenCalled();
    });

    it('7>part 7',()=>{
        const MyComp = (props) => (<button id={'button1'} onClick={props.onClick}>Click me</button>);
        const onClick = jest.fn();
        const comp1 = shallow(<MyComp onClick={onClick} />);
        // { target: {value: moment('2018-01-22')} }
        //expect(comp1.length).toBe(1);
        comp1.find('button#button1').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

});
