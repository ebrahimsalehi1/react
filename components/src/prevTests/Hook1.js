
import React from 'react';

class Counter extends React.Component{
	state= {count:1};
	handlerButtonCick = () =>{
		//console.log(`prev value is ${this.state.count}`);
		//prevStatus.count++;
		//this.setState(prevState=>({count:prevState.count+1}));
		//console.log(`current value is ${this.state.count}`);
		
		this.setState(prevState=>({count:prevState.count+1}));
	}

	render(){
		return (<button onClick={this.handlerButtonCick}>Click Me {this.state.count}</button>);
	}

} 

export default Counter;
