import React from 'react';
import {
  mount,shallow,render
} from '../../../enzymeConfig';
import IrisaDatePicker from '../../Components/IrisaComponents/Mydate/IrisaDatePicker';
import TimePicker from '../../Components/IrisaComponents/Mydate/IrisaTimePicker';
import {expect} from 'chai';
import { Calendar } from "react-modern-calendar-datepicker";

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

});


//expect(comp.find('.date1').exists()).to.equal(false);        

//expect(comp.prop('componentType')).to.equal('datetime');