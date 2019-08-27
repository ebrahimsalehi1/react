import React, { useState } from "react";
//import DateFnsUtils from "@date-io/date-fns"; // import
//import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
//import JalaliUtils from "@date-io/jalaali";
import IrisaNewDateDialog from "./itcomponents/NewComp/IrisaNewDateDialog";

function App() {
  //const [selectedDate, handleDateChange] = useState(new Date());

  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <label>this is a test</label>
    //   <DatePicker value={selectedDate} onChange={handleDateChange} />
    // </MuiPickersUtilsProvider>
    <div>
        <IrisaNewDateDialog />      
    </div>
  );
}

export default App;
