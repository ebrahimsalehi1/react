import React,{useState,useEffect} from 'react'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import {Checkbox,Button,Dialog,DialogTitle,Slide,AppBar,Toolbar,IconButton,Typography,Fab,InputBase} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
// import MenuIcon from '@material-ui/icons/Menu';
//import IrisaTextField from '../../Components/EbiComponents/Mydate/IbxTextField';
import TextField from '@material-ui/core/TextField';
// import IrisaDialog from "../../components/common/IbxDialog";
// import IbxDNDTree from "../../components/common/IbxDNDTree";
import Card from "@material-ui/core/Card";
//import {hideLoading, showLoading} from "../../redux/actions/openActions";
//import {API_BASE_URL} from "../../config/constants";
//import FetchSign from "../../config/FetchSign";
// import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

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
        width: '80%',
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
    tree:{
        height: "400px",//"100vh !important",
        paddingBottom: "100% !important",
        overflow: "auto !important",
}
});

function CompositeTree(props){
    const {url,rows,classes,title,handleReturnFunction,value,validationType,fieldName,disabled,label,valueToShow,
        canSearch,isActive} = props;

    const [data,setData] = useState([]);
    const [chkClick,setChkClick] = useState([]);
    const [open,setOpen] = useState(false);
    const [searchQuery,setSearchQuery] = useState('');
    const [isCompositeShow,setIsCompositeShow] = useState( isActive)

    // async function callWebserviceGetComposites(){

    //     if(data.length>0){
    //         return;
    //     }

    //     showLoading(null, null);

    //     const url = `${API_BASE_URL}/KAR/oraclebpm/compositeNames/?`;

    //     await FetchSign.readApi({url: url})
    //         .then(res => {
    //             console.log(res)
    //             if (res.status===200) {

    //                 //const recievedData = [{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام","compositeName":"ACM_ActionAnalysis_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرایند ارزیابی","compositeName":"ACM_Assessment_PRJ"},{"applicationType":"ACM","persianName":"فرآیند شناسایی تغییرات","compositeName":"ACM_ChangeIdentify_PRJ"},{"applicationType":"ACM","persianName":"فرآیند مدیریت تغییرات پروژه های بهبود","compositeName":"ACM_ChangePrjPlan_PRJ"},{"applicationType":"ACM","persianName":"فرآیند پایش و اجرای پروژه","compositeName":"ACM_Monitoring_PRJ"},{"applicationType":"ACM","persianName":"فرآیند برنامه ریزی و تکمیل اطلاعات پروژه","compositeName":"ACM_Planing_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرایند پایش و اجرای QF","compositeName":"ACM_QF_Monitoring_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند پاداش پروژه","compositeName":"ACM_Reward_PRJ"},{"applicationType":"ACM","persianName":"فرآیند صورتجلسه","compositeName":"ACM_SessionFyi_PRJ"},{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند تائید پروژه ویژه","compositeName":"ACM_SpecialPrjApproval_PRJ"},{"applicationType":"HSE","persianName":"Acm_Process","compositeName":"BpmProject1"},{"applicationType":"HSE","persianName":"درخواست تحویل دارو","compositeName":"HSE_DrugRequest_PRJ"},{"applicationType":"HSE","persianName":"فرایند اورژانس","compositeName":"HSE_Emergency_PRJ"},{"applicationType":"HSE","persianName":"فرایند کميسيون پزشکي","compositeName":"HSE_MedicalCommission_PRJ"},{"applicationType":"HSE","persianName":"HSE_ReferralExam_PROC","compositeName":"HSE_ReferralExam_PRJ"},{"applicationType":"HSE","persianName":"اندازه گيری جنبه هاي زيست محيطي(حادثه ای)","compositeName":"HSE_RequestEnvironmentalAspects_PRJ"},{"applicationType":"HSE","persianName":"درخواست اندازه گیری عوامل زیان آور شغلی","compositeName":"HSE_RequestMeasuringHarmfulFactors_PRJ"},{"applicationType":"HSE","persianName":"فرایند مدیریت ریسک","compositeName":"HSE_Risk_PRJ"},{"applicationType":"HSE","persianName":"اندازه گیری عوامل زیان آور شغلی","compositeName":"HSE_MeasuringHarmfulFactor_PRJ"},{"applicationType":"LAB","persianName":"LAB_DonNoneRoutinsSamples_PROC","compositeName":"LAB_NonRoutineSamples_PRJ"},{"applicationType":"LAB","persianName":"فرآیند آزمون نمونه روانکارها","compositeName":"LAB_Lubricant_PRJ"},{"applicationType":"HSE","persianName":"ارزیابی توسط چک لیست ها","compositeName":"HSE_CheckList_PRJ"},{"applicationType":"HSE","persianName":"ارزیابی جنبه های زیست محیطی(عادی و غیر عادی،حادثه ای)","compositeName":"hse_AssessmentEnvironmentalAspects_PRJ"},{"applicationType":"HSE","persianName":"فرایند سم پاشی","compositeName":"HSE_Spraying_PRJ"}];
    //                 const recievedData = res.data.items;//[{"applicationType":"ACM","persianName":"سیستم اقدامات-فرآیند شناسایی و تحلیل اقدام","compositeName":"ACM_ActionAnalysis_PRJ"},{"applicationType":"HSE","persianName":"Acm_Process","compositeName":"BpmProject1"},{"applicationType":"HSE","persianName":"درخواست تحویل دارو","compositeName":"HSE_DrugRequest_PRJ"}];

    //                 const appTypes = new Set();

    //                 recievedData.forEach(item=>{
    //                     appTypes.add(item.category)
    //                 });

    //                 let jSonString = [];
    //                 appTypes.forEach(item=>{
    //                     const filteredData = recievedData.filter(itemSub=>itemSub.category===item)
    //                     jSonString = [...jSonString,{title:item,children:filteredData.map(obj=>{return {title:obj.persianName,compositeName:obj.compositeName,children:[]}})}]
    //                 })

    //                 setData(jSonString);
    //             }
    //             hideLoading();
    //         })
    //         .catch(err=> {
    //                 console.log('error:',err.message);
    //             }
    //         );
    // }

    function handleOpen(event){
        if(isActive)
            setOpen(true);
    }

    function handleClose(event){
        setOpen(false);
    }

    function handleReturnFunc(){
        if(handleReturnFunction!==undefined){
            const res = chkClick.map(item=>({persianName:item.split("/")[0],compositeName:item.split("/")[1]})).filter(obj=>obj.compositeName!==undefined);
            handleReturnFunction(res);
            setOpen(false);
        }
    }

    function handleChangeCheckbox(e){
            if(isActive)
                setIsCompositeShow(e.target.checked);
    }

    return (
        <div>
            <Checkbox
                checked={isActive ? isCompositeShow:value.length===0}
                onChange={handleChangeCheckbox}
            />
            <label>تفویض کارتابل</label>
            <TextField
                name={fieldName}
                adornment
                multiline
                disabled={isActive ? isCompositeShow:value.length===0}
                //validationType={validationType}
                value={value.length>0 ? value.map(item=>item.persianName).join('\n') : chkClick.map(item=>item.persianName).join('\n')}
                onClick={handleOpen}
                icon={<IconButton disabled={disabled} >
                  <SearchIcon/>
                </IconButton>}
                label={label}
                //value={value ? value : this.state.selectedNode[this.props.displaySelected] ? this.state.selectedNode[this.props.displaySelected] : ""}
                />
            {open &&
            <Dialog open={true}
                    title={"title 1"}
                    fullWidth={true}
                    maxWidth={"md"}
                //TransitionComponent={Transition}
                    onClose={handleClose}
                    disableBackdropClick={true}
                    //className={classes.dialog}
            // <IrisaDialog
            //      open={true}
            //      useOwnDialog
            //      fullWidth={true}
            //      maxWidth={"md"}
            //      eventClose={handleClose}
            //      openModal={true}
            //      classes={classes}
            //      TransitionComponent
                 onKeyDown={(event) => {
                     if (event.key === "Tab") {
                         event.stopPropagation();
                     }
                 }}
                 onEntered={()=>{
                     //callWebserviceGetComposites();
                     if(data.length === 0)
                        setData(rows);

                     if(chkClick.length === 0) {
                         setChkClick(value.map(item => item.persianName + '/' + item.compositeName));
                     }
                 }}
                 >
                <DialogContent style={{"padding":"0px"}}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                {title}
                            </Typography>
                            <div className={classes.grow} />
                            {canSearch !== undefined && canSearch &&
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder="جستجو"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                />
                            </div>
                            }
                            <div className={classes.grow} />
                            {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={handleReturnFunc}>*/}
                            {/*    <DoneIcon />*/}
                            {/*</IconButton>*/}

                            <IconButton className={classes.menuButton} color="inherit" aria-label="close drawer" onClick={handleReturnFunc}>
                                <CloseIcon />
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    {/*<Grid container spacing={0} direction={"row"}>*/}
                    {/*<Grid item xs={12} md={12} style={{"height":"300px"}} >*/}
                    <Card style={{"height":"300px","position":"static"}}>
                            <SortableTree
                            rowDirection="rtl"
                            searchQuery={searchQuery}
                            treeData={data}
                            onChange={treeData => setData( treeData )}
                            canDrag={false}
                            generateNodeProps={({ node, path }) => ({
                                title: (
                                    <><Checkbox
                                        value={node.title+(node.compositeName===undefined || node.compositeName===null ? "":"/"+node.compositeName)}
                                        checked={chkClick.includes(node.title+(node.compositeName===undefined ? "":"/"+node.compositeName))}
                                        onChange={(e)=>{
                                            if(path.length===1){
                                                if(e.target.checked){
                                                    const filteredData = data.filter(item=>item.title===e.target.value);
                                                    if(filteredData.length === 0)
                                                        return;
                                                    let res = filteredData[0].children.map(obj=>obj.title+"/"+obj.compositeName)
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
                    </Card>
                    {/*</Grid>*/}
                    {/*</Grid>*/}
                    <DialogActions>
                        <Button onClick={handleReturnFunc}>بستن</Button>
                    </DialogActions>
                </DialogContent>

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
