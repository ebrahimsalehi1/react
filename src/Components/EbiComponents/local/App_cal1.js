
import React from "react";
import ReactDOM from "react-dom";

import {Datepicker} from 'baseui/datepicker';
import {addDays} from 'date-fns';

import {BaseProvider, LightTheme} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";


const engine = new Styletron();


function Example ()  {
  const [singleDate, setSingleDate] = React.useState(null);
  const [rangeDate, setRangeDate] = React.useState([
    new Date(),
    addDays(new Date(), 4),
  ]);

  return (
    <React.Fragment>
      <Datepicker
        value={singleDate}
        onChange={({date}) => setSingleDate(date)}
      />
      <br />
      <Datepicker
        range
        value={rangeDate}
        onChange={({date}) => setRangeDate(date)}
        placeholder="YYYY/MM/DD - YYYY/MM/DD"
      />
    </React.Fragment>
  );
};


function App(props) {
  return (
    <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
        <Example />
        </BaseProvider>
      </StyletronProvider>
  )
  
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StyletronProvider value={engine}>
//     <BaseProvider theme={LightTheme}>
//       <App />
//     </BaseProvider>
//   </StyletronProvider>,
//   rootElement
// );

export default App;
