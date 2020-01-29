import React,{useState,memo} from 'react';
import ReactDOM from 'react-dom';
import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

export default function InfiniteSample(props){
// This example assumes you have a way to know/load this information
const remoteRowCount=1;

// const list = [];
const [list,setList]= useState([1,2,3])

function isRowLoaded ({ index }) {
  return !!list[index];
}

function loadMoreRows ({ startIndex, stopIndex }) {
    console.log("loadMoreRows");
  return fetch(`http://localhost:8081/1/1000`)
    .then(response => {
      // Store response data in list...
      setList(response.data);
      console.log("fetch data",response.data);
    })
}

function rowRenderer ({ key, index, style}) {
    //console.log("rowRenderer",key,index,style)
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

// Render your list
return(
  <InfiniteLoader
    isRowLoaded={isRowLoaded}
    loadMoreRows={loadMoreRows}
    rowCount={remoteRowCount}
  >
    {({ onRowsRendered, registerChild }) => (
      <List
        height={200}
        onRowsRendered={onRowsRendered}
        ref={registerChild}
        rowCount={remoteRowCount}
        rowHeight={20}
        rowRenderer={rowRenderer}
        width={300}
    

  />
    )}
  </InfiniteLoader>)

}

