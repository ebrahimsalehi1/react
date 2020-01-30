import React,{useState,useEffect} from 'react'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import {Checkbox,Button,Dialog,DialogTitle,TextField,Slide,AppBar,Toolbar,IconButton,Typography,Fab,InputBase} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

const styles = theme => ( {
    appBar: {
      position: 'static',
      height:'48px',
      margin:'0px',
      padding:'0px'

    },
    flex: {
      flex: 1,
    },
    root: {
        width: '100%',
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //   width: 120,
        //   '&:focus': {
        //     width: 200,
        //   },
        // },
      },
  });

function CompositeTree(props){
    const {url,classes,title,handleReturnFunction,value,canSearch,valueToShow} = props;

    const [data,setData] = useState([]);
    const [chkClick,setChkClick] = useState(value===undefined ? []:value);
    const [open,setOpen] = useState(false);
    const [compositeName,setCompositeName] = useState('');
    const [searchQuery,setSearchQuery] = useState('');

    useEffect(()=>{
        console.log('composite tree is rendering-useEffect')

        let isLoaded = false;
        async function callWebserviceGetPersonInfo(){
            if(!isLoaded){
                //const recievedData = [{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام","compositeName":"ACM_ActionAnalysis_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرایند ارزیابی","compositeName":"ACM_Assessment_PRJ"},{"applicationType":"ACM","persianName":"فرآیند شناسایی تغییرات","compositeName":"ACM_ChangeIdentify_PRJ"},{"applicationType":"ACM","persianName":"فرآیند مدیریت تغییرات پروژه های بهبود","compositeName":"ACM_ChangePrjPlan_PRJ"},{"applicationType":"ACM","persianName":"فرآیند پایش و اجرای پروژه","compositeName":"ACM_Monitoring_PRJ"},{"applicationType":"ACM","persianName":"فرآیند برنامه ریزی و تکمیل اطلاعات پروژه","compositeName":"ACM_Planing_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرایند پایش و اجرای QF","compositeName":"ACM_QF_Monitoring_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند پاداش پروژه","compositeName":"ACM_Reward_PRJ"},{"applicationType":"ACM","persianName":"فرآیند صورتجلسه","compositeName":"ACM_SessionFyi_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند تائید پروژه ویژه","compositeName":"ACM_SpecialPrjApproval_PRJ"},{"applicationType":"HSE","persianName":"Acm_Process","compositeName":"BpmProject1"},{"applicationType":"HSE","persianName":"درخواست تحویل دارو","compositeName":"HSE_DrugRequest_PRJ"},{"applicationType":"HSE","persianName":"فرایند اورژانس","compositeName":"HSE_Emergency_PRJ"},{"applicationType":"HSE","persianName":"فرایند کميسيون پزشکي","compositeName":"HSE_MedicalCommission_PRJ"},{"applicationType":"HSE","persianName":"HSE_ReferralExam_PROC","compositeName":"HSE_ReferralExam_PRJ"},{"applicationType":"HSE","persianName":"اندازه گيری جنبه هاي زيست محيطي(حادثه ای)","compositeName":"HSE_RequestEnvironmentalAspects_PRJ"},{"applicationType":"HSE","persianName":"درخواست اندازه گیری عوامل زیان آور شغلی","compositeName":"HSE_RequestMeasuringHarmfulFactors_PRJ"},{"applicationType":"HSE","persianName":"فرایند مدیریت ریسک","compositeName":"HSE_Risk_PRJ"},{"applicationType":"HSE","persianName":"اندازه گیری عوامل زیان آور شغلی","compositeName":"HSE_MeasuringHarmfulFactor_PRJ"},{"applicationType":"LAB","persianName":"LAB_DonNoneRoutinsSamples_PROC","compositeName":"LAB_NonRoutineSamples_PRJ"},{"applicationType":"LAB","persianName":"فرآیند آزمون نمونه روانکارها","compositeName":"LAB_Lubricant_PRJ"},{"applicationType":"HSE","persianName":"ارزیابی توسط چک لیست ها","compositeName":"HSE_CheckList_PRJ"},{"applicationType":"HSE","persianName":"ارزیابی جنبه های زیست محیطی(عادی و غیر عادی،حادثه ای)","compositeName":"hse_AssessmentEnvironmentalAspects_PRJ"},{"applicationType":"HSE","persianName":"فرایند سم پاشی","compositeName":"HSE_Spraying_PRJ"}];    
                const recievedData = [{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام","compositeName":"ACM_ActionAnalysis_PRJ"},{"applicationType":"HSE","persianName":"Acm_Process","compositeName":"BpmProject1"},{"applicationType":"HSE","persianName":"درخواست تحویل دارو","compositeName":"HSE_DrugRequest_PRJ"}];    

                const appTypes = new Set()
             
                recievedData.forEach(item=>{
                    appTypes.add(item.applicationType)
                })
                
                let jSonString = [];
                appTypes.forEach(item=>{
                    const filteredData = recievedData.filter(itemSub=>itemSub.applicationType===item)
                    jSonString = [...jSonString,{title:item,children:filteredData.map(obj=>{return {title:obj.persianName,compositeName:obj.compositeName,children:[]}})}]
                })

                //console.log("jSonString",JSON.stringify(jSonString))

                setData(jSonString);
                
                isLoaded = true;
            }
        }

        callWebserviceGetPersonInfo();
    },[])

    // useEffect(()=>{
    //     console.log("useEffect-->chkClick",chkClick);
    // },[chkClick])

    function handleOpen(event){
        setOpen(true);
    }

    function handleClose(event){
        setOpen(false);
    }

    function handleReturnFunc(){
        if(handleReturnFunction!==undefined){ 
            const res = chkClick.map(item=>item.split("/")[1]).filter(obj=>obj!=="" && obj!==undefined);
            setCompositeName(res.join("\n"));
            handleReturnFunction(res);
            setOpen(false);
        }
    }

    function handleSearchQueryChange(event){
        setSearchQuery(event.target.value);
    }

    //console.log('composite tree is rendering')

    return (
        <div>
        <TextField 
            value={compositeName} 
            multiline={true}
            onClick={handleOpen}/>
        {open && 
        <Dialog open={true}
        title={"title 1"}
        fullWidth={true}
        maxWidth={"md"}
        //TransitionComponent={Transition}
        onClose={handleClose}
        disableBackdropClick={true}	
        >   
       <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
          <div className={classes.grow} />
        {canSearch!==undefined && canSearch && 
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>            
            <InputBase
              placeholder="جستجو"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
        }
          <div className={classes.grow} />
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={handleReturnFunc}>
            <DoneIcon />
          </IconButton>  

          <IconButton className={classes.menuButton} color="inherit" aria-label="close drawer" onClick={handleClose}>
            <CloseIcon />
          </IconButton> 

        </Toolbar>
      </AppBar>
              <div style={{ height: 400 }}>
            
        <SortableTree
            rowDirection="rtl"
            treeData={data}
            onChange={treeData => setData( treeData )}
            canDrag={false}
            searchQuery={searchQuery}
            generateNodeProps={({ node, path }) => ({
                title: (    
                    <><Checkbox
                        value={node.title+(node.compositeName===undefined || node.compositeName===null ? "":"/"+node.compositeName)}
                        checked={chkClick.includes(node.title+(node.compositeName===undefined ? "":"/"+node.compositeName))}
                        onChange={(e)=>{       
                            if(path.length===1){
                                if(e.target.checked){        
                                    let res = data.filter(item=>item.title===e.target.value)[0].children.map(obj=>obj.title+"/"+obj.compositeName)
                                    if(!res.includes(e.target.value))
                                        res.push(e.target.value);
                                    chkClick.forEach(itm=>{
                                        if(!res.includes(itm))
                                            res.push(itm);
                                    })

                                    setChkClick(res)
                                }
                                else{
                                    let res = data.filter(item=>item.title===e.target.value)[0].children.map(obj=>obj.title+"/"+obj.compositeName)
                          
                                    if(!res.includes(e.target.value))
                                        res.push(e.target.value)
                                  
                                    setChkClick(chkClick.filter(item=>!res.includes(item)))
                                }
                            } 
                            else{
                                if(e.target.checked)                 
                                    setChkClick([...chkClick,e.target.value])
                                else{
                                    setChkClick(chkClick.filter(item=>item!==e.target.value))
                                }
                            }

                        }}
                    /><label>{node.title}</label></>
                ),
            })}
        />
       
        </div>
        </Dialog>
        }
        </div>
        )
}


CompositeTree.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    handleReturnFunction: PropTypes.func,
    buttonOkTitle: PropTypes.string,
    buttonCancelTitle: PropTypes.string,
    value: PropTypes.object,
};

export default withStyles(styles)(CompositeTree);
