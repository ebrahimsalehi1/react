
import React from 'react';

class LifeCycle extends React.Component{
    constructor(props){
        super(props);

        this.state={
            homeLink: "home",
            homeMount: true
        };

        console.log('constructor');
    }

    onChangeHomeMounted(){
        this.setState({
            homeMount: !this.state.homeMount
        });
    }

    onChangeInputText(event){
        console.log("input text changed "+event.target.value);
        this.setState({homeLink: event.target.value});
    }

    componentWillMount(){
        console.log("component will mount executed");
    }

    componentDidMount(){
        console.log("component did mount executed");
    }

    componentWillReceiveProps(nextProps){
        console.log("component will receive properties ",nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("should component update ",nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("component will update ",nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("component did update ",prevProps,prevState);
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        return (
        <div>
        <button 
            onClick={this.onChangeHomeMounted.bind(this)}            
        >clicking ...</button>
        <input type='text' onChange={this.onChangeInputText} />
        </div>);
    }
}

export default LifeCycle;
