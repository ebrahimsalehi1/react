import React from 'react';
class Day03 extends React.Component{

    constructor(){
        super()
        console.log("constructor");
        this.state = {
            txt:''
        }
    }

    change1= (event)=>{
        const val = event.target.value
        const nam = event.target.name

        this.setState({txt:val})
    }

    render(){
        return (
            <>
            <input type='TEXT' value={this.state.txt} onChange={this.change1}
            placeholder="Write Something here !!!"/>
            </>
        );
    }
}

export default Day03;
