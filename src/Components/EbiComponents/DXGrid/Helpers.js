import React from 'react';

export const closePage = async () => {
    var m = null;
    if (window.document.querySelectorAll("[id^='ibxBTNClose']")[0]) {

        m = window.document.querySelectorAll("[id^='ibxBTNClose']")[0].getAttribute("closeMessage");
    }
    //await store.dispatch({type: "TOGGEL_PROCCESSVIEW", mount: false});
    if (m) {
        // showSnack(m, "success", true, 6000);
    }
}

export const converterForIbxSelect = (columnValue, columnName, data, exteraName) => {
    return data.map(d => {
        let name = exteraName ? d[columnName] + "-" + d[exteraName] : d[columnName];
        return {value: d[columnValue], name: name}
    });
};

export function objectEquality(obj1, obj2) {
    // Create arrays of property names
    let aProps = Object.getOwnPropertyNames(obj1);
    let bProps = Object.getOwnPropertyNames(obj2);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (obj1[propName] !== obj2[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

export function getNameByEmployeeNumber(employeeNumber) {
    return null;

}

export function numberWithCommas(){

}

export function numberWithoutCommas(){

}
