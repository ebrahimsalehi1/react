import React,{useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IrisaDatePicker from './Components/IrisaComponents/DatePicker/IrisaDatePicker';
import TimePicker from './Components/IrisaComponents/DatePicker/IrisaTimePicker';
//import {TimePicker} from 'material-ui-time-picker';
import CompositeTree from './Components/IrisaComponents/CompositeTree';
import TreeLargeData from './Components/IrisaComponents/TreeLargeData';
import UsersGroupsApprolesSearch from './Components/IrisaComponents/UsersGroupsApprolesSearch'
import IrisaGrid from './Components/IrisaComponents/DXGrid';
import MiniDrawer from './ComponentSamples/MiniDrawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NodeJS from './NodejsSample/index';
import ComponentSamples from './ComponentSamples/index';

const dataComposite1 = [
  {
      "applicationType": "ثبت کارت سبز",
      "persianName": "ثبت کارت سبز",
      "compositeName": "GRN_GreenCard_PRJ",
      "dn": "GRN/GRN_GreenCard_PRJ!1.0.1*soa_d0c469dc-08c2-48b0-874a-8232add03b3c",
      "category": "سیستم کارت سبز",
      "processVersion": "1.0.1"
  },
  {
      "applicationType": "فرایند اورژانس",
      "persianName": "فرایند اورژانس",
      "compositeName": "HSE_Emergency_PRJ",
      "dn": "HSE/HSE_Emergency_PRJ!1.0*soa_140859a7-4b33-42b1-a3c5-cdc9638270d0",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0"
  },
  {
      "applicationType": "فرایند کميسيون پزشکي",
      "persianName": "فرایند کميسيون پزشکي",
      "compositeName": "HSE_MedicalCommission_PRJ",
      "dn": "HSE/HSE_MedicalCommission_PRJ!1.4*soa_aacb9900-1d16-4983-9b85-361d632e656a",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.4"
  },
  {
      "applicationType": "HSE_ReferralExam_PROC",
      "persianName": "HSE_ReferralExam_PROC",
      "compositeName": "HSE_ReferralExam_PRJ",
      "dn": "HSE/HSE_ReferralExam_PRJ!1.3*soa_77d07f41-70ce-443c-bbfc-e26840b9a451",
      "processVersion": "1.3"
  },
  {
      "applicationType": "درخواست تحویل دارو",
      "persianName": "درخواست تحویل دارو",
      "compositeName": "HSE_DrugRequest_PRJ",
      "dn": "HSE/HSE_DrugRequest_PRJ!1.1*soa_fd47fa43-41f8-46db-8e60-4288a415a6e1",
           "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.1"
  },
  {
      "applicationType": "سیستم اقدامات-فرآیند تائید پروژه ویژه",
      "persianName": "سیستم اقدامات-فرآیند تائید پروژه ویژه",
      "compositeName": "ACM_SpecialPrjApproval_PRJ",
      "dn": "ACM/ACM_SpecialPrjApproval_PRJ!1.0.0*soa_b694bee5-7368-4c6c-89fa-5c76d2cd4257",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "Acm_Process",
      "persianName": "Acm_Process",
      "compositeName": "BpmProject1",
      "dn": "HSE/BpmProject1!1.0*soa_0a8d58c0-5ec1-4b86-8626-6a30378594d0",
      "processVersion": "1.0"
  },
  {
      "applicationType": "فرآیند آزمون نمونه روانکارها",
      "persianName": "فرآیند آزمون نمونه روانکارها",
      "compositeName": "LAB_Lubricant_PRJ",
      "dn": "LAB/LAB_Lubricant_PRJ!2.0.0*soa_e9b4b5a2-ea6e-4b92-bd36-10cd6a2984c8",
      "category": "سیستم مدیریت آزمایشگاه ها",
      "processVersion": "2.0.0"
  },
  {
      "applicationType": "آزمون نمونه هاي غير روتين ",
      "persianName": "آزمون نمونه هاي غير روتين ",
      "compositeName": "LAB_NonRoutineSamples_PRJ",
      "dn": "LAB/LAB_NonRoutineSamples_PRJ!1.0.0*soa_358f0ecf-be5c-428f-b2ef-a00b3fa44de7",
      "category": "سیستم مدیریت آزمایشگاه ها",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "فرآيند درخواست خدمات مهندسي و ابلاغ دستور کار مشاور",
      "persianName": "فرآيند درخواست خدمات مهندسي و ابلاغ دستور کار مشاور",
      "compositeName": "PEM_ConsultingRequestAndWorkOrderCommunication_PRJ",
      "dn": "PEM/PEM_ConsultingRequestAndWorkOrderCommunication_PRJ!1.0.0*soa_7c786c71-bebf-4d55-8ece-094b2cf7bf1a",
      "category": "سيستم مديريت مهندسي کارخانه",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": " فرآیند ثبت گزارش پیشرفت ماهایانه مشاوران",
      "persianName": " فرآیند ثبت گزارش پیشرفت ماهایانه مشاوران",
      "compositeName": "PEM_WorkOrderMonthlyReport_PRJ",
      "dn": "PEM/PEM_WorkOrderMonthlyReport_PRJ!1.0.0*soa_9d790998-cf4c-4c24-83c3-1fabd01c6c96",
      "category": "سیستم مدیریت مهندسی کارخانه",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "ارزیابی توسط چک لیست ها",
      "persianName": "ارزیابی توسط چک لیست ها",
      "compositeName": "HSE_CheckList_PRJ",
      "dn": "HSE/HSE_CheckList_PRJ!1.0.0*soa_19fcfa65-531a-4f15-904e-ee3e1d95f17b",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "ارزیابی جنبه های زیست محیطی(عادی و غیر عادی،حادثه ای)",
      "persianName": "ارزیابی جنبه های زیست محیطی(عادی و غیر عادی،حادثه ای)",
      "compositeName": "hse_AssessmentEnvironmentalAspects_PRJ",
      "dn": "HSE/hse_AssessmentEnvironmentalAspects_PRJ!1.0.0*soa_28160bac-1682-4592-aa11-1c442e2f0b76",
      "category": "بهداشت،ایمنی و محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "فرایند سم پاشی",
      "persianName": "فرایند سم پاشی",
      "compositeName": "HSE_Spraying_PRJ",
      "dn": "HSE/HSE_Spraying_PRJ!1.0.0*soa_504f235e-aa31-4813-8a84-348da94a349a",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "اندازه گیری عوامل زیان آور شغلی",
      "persianName": "اندازه گیری عوامل زیان آور شغلی",
      "compositeName": "HSE_MeasuringHarmfulFactor_PRJ",
      "dn": "HSE/HSE_MeasuringHarmfulFactor_PRJ!1.0.0*soa_3d7bcefb-f684-419f-aa7d-e9de0fd54e36",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "اندازه گيری جنبه هاي زيست محيطي(حادثه ای)",
      "persianName": "اندازه گيری جنبه هاي زيست محيطي(حادثه ای)",
      "compositeName": "HSE_RequestEnvironmentalAspects_PRJ",
      "dn": "HSE/HSE_RequestEnvironmentalAspects_PRJ!1.0.0*soa_f14ff754-35a3-4165-b9f2-9f03065ea1f4",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "درخواست اندازه گیری عوامل زیان آور شغلی",
      "persianName": "درخواست اندازه گیری عوامل زیان آور شغلی",
      "compositeName": "HSE_RequestMeasuringHarmfulFactors_PRJ",
      "dn": "HSE/HSE_RequestMeasuringHarmfulFactors_PRJ!1.0.0*soa_384f4cb9-3d56-42f6-8385-e26c0a91dead",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "فرایند مدیریت ریسک",
      "persianName": "فرایند مدیریت ریسک",
      "compositeName": "HSE_Risk_PRJ",
      "dn": "HSE/HSE_Risk_PRJ!1.0.0*soa_2474c0e9-46ee-44b8-a0ba-23151ce8abed",
      "category": "سیستم ایمنی،بهداشت،محیط زیست",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "سیستم اقدامات-فرآیند پایش و اجرای پروژه",
      "persianName": "سیستم اقدامات-فرآیند پایش و اجرای پروژه",
      "compositeName": "ACM_Monitoring_PRJ",
      "dn": "ACM/ACM_Monitoring_PRJ!1.0.1*soa_49affaf7-2198-447d-8271-6a3f862d29f2",
      "category": "ACM_System",
      "processVersion": "1.0.1"
  },
  {
      "applicationType": "سیستم اقدامات-فرآیند برنامه ریزی و تکمیل اطلاعات پروژه",
      "persianName": "سیستم اقدامات-فرآیند برنامه ریزی و تکمیل اطلاعات پروژه",
      "compositeName": "ACM_Planing_PRJ",
      "dn": "ACM/ACM_Planing_PRJ!1.0.3*soa_c8606bb4-5922-42ba-a414-a3aecae654e5",
      "category": "ACM_SYSTEM",
      "processVersion": "1.0.3"
  },
  {
      "applicationType": "سیستم اقدامات-فرآیند پاداش پروژه",
      "persianName": "سیستم اقدامات-فرآیند پاداش پروژه",
      "compositeName": "ACM_Reward_PRJ",
      "dn": "ACM/ACM_Reward_PRJ!1.0.0*soa_5eb83190-7123-478c-8aad-d16af6e19d35",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "فرآیند صورتجلسه",
      "persianName": "فرآیند صورتجلسه",
      "compositeName": "ACM_SessionFyi_PRJ",
      "dn": "ACM/ACM_SessionFyi_PRJ!1.0.0*soa_57b135b7-779f-4ed3-8418-917af04256f3",
      "category": "ACM_System",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "سیستم اقدامات-فرایند پایش و اجرای QF",
      "persianName": "سیستم اقدامات-فرایند پایش و اجرای QF",
      "compositeName": "ACM_QF_Monitoring_PRJ",
      "dn": "ACM/ACM_QF_Monitoring_PRJ!1.0.0*soa_16e65444-879b-4581-bc5f-5632e0861b26",
      "processVersion": "1.0.0"
  },
  {
      "applicationType": "سیستم اقدامات-فرایند ارزیابی",
      "persianName": "سیستم اقدامات-فرایند ارزیابی",
      "compositeName": "ACM_Assessment_PRJ",
      "dn": "ACM/ACM_Assessment_PRJ!1.0.1*soa_0a0716a5-12fb-4fee-8183-4dda65651486",
      "category": "سیستم اقدامات",
      "processVersion": "1.0.1"
  },
  {
      "applicationType": "فرآیند شناسایی تغییرات",
      "persianName": "فرآیند شناسایی تغییرات",
      "compositeName": "ACM_ChangeIdentify_PRJ",
      "dn": "ACM/ACM_ChangeIdentify_PRJ!1.0.1*soa_0ed4f253-39ab-48ef-a4a1-aae5368f7c2b",
      "category": "ACM_Systems",
      "processVersion": "1.0.1"
  },
  {
      "applicationType": "فرآیند مدیریت تغییرات پروژه های بهبود",
      "persianName": "فرآیند مدیریت تغییرات پروژه های بهبود",
      "compositeName": "ACM_ChangePrjPlan_PRJ",
      "dn": "ACM/ACM_ChangePrjPlan_PRJ!1.0.3*soa_fcb627d2-fef1-416b-a251-c255c669cf50",
      "category": "سیستم اقدامات",
      "processVersion": "1.0.3"
  },
  {
      "applicationType": "سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام",
      "persianName": "سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام",
      "compositeName": "ACM_ActionAnalysis_PRJ",
      "dn": "ACM/ACM_ActionAnalysis_PRJ!1.0.0*soa_85eebb42-4266-41fb-b5c4-072a4e95ba7a",
      "category": "ACM",
      "processVersion": "1.0.0"
  }
]

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 2 * 3 ,height:0}}>
        {props.children}
      </Typography>
    );
  } 

function App(props){

    const [value,setValue] = useState(0)
    const [value1,setValue1] = useState(new Date())
    const [valDateTime,setValDateTime] = useState(new Date().getTime())

    const {type} = props;

    const handleChange = (event, value) => {
        setValue(value);
        console.log(event,value)
    };

      const props1='1'
      const props2='1'

      const recievedData = dataComposite1;//[{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام","compositeName":"ACM_ActionAnalysis_PRJ"},{"applicationType":"HSE","persianName":"Acm_Process","compositeName":"BpmProject1"},{"applicationType":"HSE","persianName":"درخواست تحویل دارو","compositeName":"HSE_DrugRequest_PRJ"}];

      const appTypes = new Set();

      recievedData.forEach(item=>{
          appTypes.add(item.category)
      });

      let jSonString = [];
      appTypes.forEach(item=>{
          const filteredData = recievedData.filter(itemSub=>itemSub.category===item)
          jSonString = [...jSonString,{title:item,children:filteredData.map(obj=>{return {title:obj.persianName,compositeName:obj.compositeName,children:[]}})}]
      })

      const dataComposite = jSonString

      console.log("dataComposite",dataComposite)

  return (
    <div>
        {
            type==='NODEJS' && <NodeJS />
        }
        {
            type==='COMPONENT_SAMPLE' && <ComponentSamples />
        }

        {type==='OTHERS' && props1==='1' && props2==='1' &&
          <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Date Time Picker" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Tree Large Data" />
            <Tab label="User Groups Approles" />
            <Tab label="Composite Tree" />
            <Tab label="DX Grid" />

          </Tabs>
        </AppBar>
        }

        {type==='OTHERS' &&  value === 0 && <TabContainer>
          <IrisaDatePicker
            componentType="datetime"
            value={valDateTime}
            handleDateChange={(e,name) => {
              setValDateTime(e);
            }}
            locale={"en"}
          />
        </TabContainer>}
        
        {type==='OTHERS' && value === 1 && <TabContainer>
            <CompositeTree 
              title="The title"
              handleReturnFunction={(e)=>{
                console.log(e)
              }}  
              />
            </TabContainer>}
        
        {type==='OTHERS' && value === 2 && <TabContainer>
            <TimePicker
            mode={"24h"}
            onChange={(e)=>{console.log("onChange",e)}}
            value={value1}
          />
            </TabContainer>}

        {type==='OTHERS' && value===3 && <TabContainer>
            <TreeLargeData />
          </TabContainer>}

          {type==='OTHERS' && value===4 && <TabContainer>
            <UsersGroupsApprolesSearch 
            selectSpecial="users"  
            data={[
                {"ID":"100","firstName":"LAB_Lubricant_PRJ.Reception","lastName":"z.rahimi, b.ghazi","email":"desc 1"},
                {"ID":"101","firstName":"LAB_Lubricant_PRJ.Reception","lastName":"z.rahimi, b.ghazi","email":"desc 1"},
            ]}  />
          </TabContainer>

          }    
        

        {type==='OTHERS' && value===5 && <TabContainer>
          <p>this is a test</p>
        <CompositeTree
            title="لیست فرآیندها"
            rows={dataComposite}
            value={[]}
            disabled={false}
            valueToShow={"persianName"}
            handleReturnFunction={(e)=>{
                console.log(e)
            }}
            isActive={true}
        /></TabContainer>
        }

        {type==='OTHERS' && value===6 && <TabContainer>
          <p>DXGrid</p>
          <IrisaGrid
            gridReload={true}
            columns={[
                {name: 'codAssignedType', title: ' ', getCellValue: null},
                {name: 'desAction', title: 'نام فعالیت'},
                {name: 'desStatus', title: 'وضعیت'},
                {name: 'datAssigned', title: 'تاریخ ایجاد'},
                {name: 'datDone', title: 'تاریخ تکمیل'},
                {name: 'datExpire', title: 'تاریخ انقضا'},
                {name: 'member', title: 'مشارکت کنندگان'  , getCellValue:
                        function(row){
                        let memArray=[];
                        if(row!==null && row.member!==null){
                            return row.member.map(member =>  <label>{member.displayName}<br/></label>)
                            //return memArray
                        }else{
                            return''
                        }

                        },},
            ]}
            tableColumnExtensions={[
                {columnName: 'codAssignedType',align: 'center',wordWrapEnabled: true,filteringEnabled: false },
                {columnName: 'desAction',align: 'center',wordWrapEnabled: true,filteringEnabled: false },
                {columnName: 'desStatus',align: 'center',wordWrapEnabled: true,filteringEnabled: false },
                {columnName: 'datAssigned',align: 'center',wordWrapEnabled: true,filteringEnabled: false },
                {columnName: 'datDone',align: 'center',wordWrapEnabled: true,filteringEnabled: false },
                {columnName: 'datExpire',align: 'center',wordWrapEnabled: true,filteringEnabled: false },
                {columnName: 'member',align: 'center',wordWrapEnabled: true,filteringEnabled: false},
            ]}
            typeColumnsShow={[
                {columnName: 'datAssigned', type: "DatePersian"},
                {columnName: 'datExpire', type: "DatePersian"},
                {columnName: 'datDone', type: "DatePersian"},
            ]}
            editable={false}
            showAddCommand={false}
            showDeleteCommand={false}
            showEditCommand={false}
            url={`/KAR/api/v1.0/logSearch/?`}
        />

        </TabContainer>
        }

        </div>        
    )
}

export default App
