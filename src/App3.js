import ReactVirtualizedTable from './Components/IrisaComponents/MyGrid';

import React, { memo,Component,useState,useEffect,useRef } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import axios from 'axios';
import InfiniteSample from './Components/IrisaComponents/InfiniteSample';
import Sample from './Components/IrisaComponents/Sample1';
import { SelectValidator } from 'react-material-ui-form-validator';
import IrisaDateTime from './Components/IrisaComponents/IrisaDateTime';
import Moment from 'moment-jalaali';
//import IbxDatePicker2 from './Components/IrisaComponents/Mydate/IbxDatePicker2'

class Tree extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      treeData: 
      //[{"title":"ACM","children":[{"title":"سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام","children":[]},{"title":"سیستم اقدامات-فرایند ارزیابی","children":[]},{"title":"فرآیند شناسایی تغییرات","children":[]},{"title":"فرآیند مدیریت تغییرات پروژه های بهبود","children":[]},{"title":"فرآیند پایش و اجرای پروژه","children":[]},{"title":"فرآیند برنامه ریزی و تکمیل اطلاعات پروژه","children":[]},{"title":"سیستم اقدامات-فرایند پایش و اجرای QF","children":[]},{"title":"سیستم اقدامات-فرآیند پاداش پروژه","children":[]},{"title":"فرآیند صورتجلسه","children":[]},{"title":"سیستم اقدامات-فرآیند تائید پروژه ویژه","children":[]}]},{"title":"HSE","children":[{"title":"Acm_Process","children":[]},{"title":"درخواست تحویل دارو","children":[]},{"title":"فرایند اورژانس","children":[]},{"title":"فرایند کميسيون پزشکي","children":[]},{"title":"HSE_ReferralExam_PROC","children":[]},{"title":"اندازه گيری جنبه هاي زيست محيطي(حادثه ای)","children":[]},{"title":"درخواست اندازه گیری عوامل زیان آور شغلی","children":[]},{"title":"فرایند مدیریت ریسک","children":[]},{"title":"اندازه گیری عوامل زیان آور شغلی","children":[]},{"title":"ارزیابی توسط چک لیست ها","children":[]},{"title":"ارزیابی جنبه های زیست محیطی(عادی و غیر عادی،حادثه ای)","children":[]},{"title":"فرایند سم پاشی","children":[]}]},{"title":"LAB","children":[{"title":"LAB_DonNoneRoutinsSamples_PROC","children":[]},{"title":"فرآیند آزمون نمونه روانکارها","children":[]}]}]
       [
         //{title:"A",children:[{title:"B",children:[{title:"C",children:[{title:"D",children:[]},{title:"E",children:[]}]},{title:"F",children:[]}]},{title:"G",children:[{title:"H",children:[]},{title:"I",children:[]}]}]}
         {title:"A",id:1,children:[{title:"B",children:[],id:2}]}
       ]
    };
  }

  makeRandomData = ()=>{
    const dataBase=[] 
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

  const [dataRows,setDataRows] = useState([]);
  const [firstRendered,setFirstRendered] = useState(true);
  const num = useRef(0);
  const [val,setVal] = useState(0)

  // useEffect(()=>{
    // if(firstRendered){
    //   axios.get('http://localhost:8081/').
    //   then(res=>{
    //     if(res.status===200){
    //       setDataRows(res.data);
    //       console.log('data',dataRows)
    //     }
    //     else{
    //       alert('error in fetching the data')
    //     }
    //   })

      //setFirstRendered(!firstRendered)
    // }
    // console.log('useEffect');
    // if(firstRendered){
      // console.log('start of ....');
      // setFirstRendered(false);

      // return ()=>{
      //   setFirstRendered(false);
      // }
    // }
  // })
  // let x=''
  // onChange={e=>setVal(e.target.value)}

  // setTimeout(()=>{setVal(pval=>pval+1 )},5000);

  const [a,setA] = useState(0);
  useEffect(()=>{
    setA(1)
    // return ()=>{
    //   setA(1)
    // }
  },[]);

  const persianMonths = [
    {title:"January",id:1},
    {title:"February",id:2},
    {title:"March",id:3},
    {title:"April",id:4},
    {title:"May",id:5},
    {title:"June",id:6},
    {title:"July",id:7},
    {title:"August",id:8},
    {title:"September",id:9},
    {title:"October",id:10},
    {title:"November",id:11},
    {title:"December",id:12}
]
  console.log('component is running ...');
  const locale="fa"
  const calc = `${Moment(new Date()).toDate()}`
  function convertPersianDigitsToDigit(valueToConvert){
    return String(valueToConvert)
        .replace(/۰/g,"0")
        .replace(/۱/g,"1")
        .replace(/۲/g,"2")
        .replace(/۳/g,"3")
        .replace(/۴/g,"4")
        .replace(/۵/g,"5")
        .replace(/۶/g,"6")
        .replace(/۷/g,"7")
        .replace(/۸/g,"8")
        .replace(/۹/g,"9")
        .replace(/a/g,"A")
  }
  const res=convertPersianDigitsToDigit('aaaaa۳۳۳۳aaaa۷۷۷۷۷۷aaaaaa')
  const e = {year:1398,month:11,day:30}

  const enteredValue = Moment(`${e.year}/${(Number(e.month)<10 ? '0':'')+e.month}/${(Number(e.day)<10 ? '0':'')+e.day}`,'jYYYY/jMM/jDD')
  const currentDate = new Date(Number(enteredValue.local("en").format('YYYY')), Number(enteredValue.local("en").format('MM'))-1, Number(enteredValue.local("en").format('DD')));
  //new Date(enteredValue.format('YYYY'), enteredValue.format('MM'), enteredValue.format('DD'));
  
    return (
        <div>
          <label>number : {++num.current}</label>

          {/* <button>{`${String(currentDate)}`}</button>
          <IbxDatePicker2
          locale={"fa"}
          value={a}
          handleDateChange={setA}
          /> */}

          {/* <input type='text' value={val}  /> */}
            {/* <ReactVirtualizedTable 
            rows={dataRows}
            columns={
              [
                {
                  width: 200,
                  flexGrow: 1.0,
                  label: 'id',
                  dataKey: 'id',
                },
                {
                  width: 120,
                  label: 'first name',
                  dataKey: 'firstName',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'last name',
                  dataKey: 'lastName',
                  numeric: true,
                },
                {
                  width: 120,
                  label: 'salary',
                  dataKey: 'salary',
                  numeric: true,
                },
              ]
            }
            /> */}

            <Tree />

            {/* <InfiniteSample /> */}
{/* 
            <Sample /> */}
            {/* <IrisaDateTime /> */}
        </div>
    )
}

export default memo(App)
