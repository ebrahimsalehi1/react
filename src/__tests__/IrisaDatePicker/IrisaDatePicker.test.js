import React from 'react';
import {
  mount,shallow,render
} from '../../../enzymeConfig';
import IrisaDatePicker from '../../Components/IrisaComponents/Mydate/IrisaDatePicker';
import TimePicker from '../../Components/IrisaComponents/Mydate/IrisaTimePicker';
import {expect} from 'chai';
import { Calendar } from "react-modern-calendar-datepicker";
import TextField from '@material-ui/core/TextField';

function MyTimeComp(props){
    return (<div><TimePicker
            mode={"24h"}
            className="time1"
        /></div>)
}

function MyDateComp(props){

    const [valDateTime,setValDateTime] = React.useState(new Date().getTime());

    return (<div><IrisaDatePicker                       
                componentType="datetime"
                value={valDateTime}
                handleDateChange={(e,name) => {
                    setValDateTime(e);
                }}
                locale={"en"}
            /></div>)
}

describe('IrisaDatePicker test suites',()=>{
    it('is render calendar ',()=>{

        const comp = mount(<MyDateComp className="date1" componentType="ebi"/>);    
        expect(comp.find(Calendar)).to.have.lengthOf(0);
    });

    it('is render TimePicker ',()=>{

        const comp = mount(<MyDateComp className="date1" componentType="ebi"/>);    
        expect(comp.find(TimePicker)).to.have.lengthOf(0);

    });

    it('component value props ',()=>{

        const currentTime = new Date().getTime();
        const comp = mount(<MyDateComp className="date1" componentType="ebi" value={currentTime}/>);    
        expect(comp.prop('value')).to.equal(currentTime);

    });

    it('search a special component in multi wrapper',()=>{

        const Comp1 = () => {
            const [val,setVal] = React.useState('Comp1')
            return (
            <div>
                <div>
                <div>
                <div>
                <div>
                    <TextField 
                        value={val} 
                        onChange={setVal} 
                        className="foo" 
                        data-point="IRISATEXTFIELD"/>
                </div>
                </div>
                </div>
                </div>
            </div>
            )
        }

        const Comp2 = ()=>{
            return (<Comp1/>)
        }

        const Comp3 = ()=>{
            return (<Comp2/>)
        }

        const Comp4 = ()=>{
            return (<Comp3/>)
        }

        const Comp5 = ()=>{
            return (<Comp4/>)
        }

        const Comp6 = ()=>{
            return (<Comp5/>)
        }

        const CompFinal = () =>{
            return (
            <>
            <Comp1 />
            {/* <Comp2 />
            <Comp3 />
            <Comp4 />
            <Comp5 /> */}
            </>
            )
        }

        const wrapper = mount(<CompFinal />);
        //expect(wrapper.find(TextField)).to.have.lengthOf(1);
        let count = 0;
        let countAll = 0;
        wrapper.find('.foo').forEach(node=>{
            countAll++;
            //if(node.prop('data-point')==='IRISATEXTFIELD')
            if(expect(node.hasClass('foo')).to.equal(true))
                count++;
        })

        console.log('number of is',count,countAll);   
        
        expect(wrapper.find(TextField)).to.have.lengthOf(1);

    });

});

//expect(comp.find('.date1').exists()).to.equal(false);        
//expect(comp.prop('componentType')).to.equal('datetime');
