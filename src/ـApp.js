import ReactVirtualizedTable from './Components/IrisaComponents/MyGrid';

import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
 
class Tree extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      treeData: [
        { title: 'Chicken', children: [{ title: 'Egg' }] },
        { title: 'Fish', children: [{ title: 'fingerline'}] }
      ],
    };
  }
 
  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}

function App(props){
    return (
        <div>
            {/* <ReactVirtualizedTable /> */}
            <Tree />
        </div>
    )
}

export default App
