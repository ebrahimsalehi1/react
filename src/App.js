import React from 'react'
import NodeJS from './NodejsSample/index';
import ComponentSamples from './ComponentSamples/index';

function App(props){

    const { type } = props;

  return (
    <div>
    {
        type==='NODEJS' && <NodeJS />
    }
    {
        type==='COMPONENT_SAMPLE' && <ComponentSamples />
    }
    </div>        
    )
}

export default App
