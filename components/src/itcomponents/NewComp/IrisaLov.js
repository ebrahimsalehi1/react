import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import {FindInPage,Close} from '@material-ui/icons'
import { DialogActions } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       flexBasis: 200,
//     },
//   }));

export default function IrisaLov(props){

    const {id,name,label,datas,webElement,keyCodeToFire,hotSearch} = props

    //const {classes} = useStyles()

    const [open,setOpen] = React.useState(false)
    const [val,setVal] = useState({cod:'',val:''})
    const [searchVal,setSearchVal] = useState('')
    const [dataSearch,setDataSearch] = useState([{cod:'',val:'%'}, ...datas  ])

    const [selectData,setSelectData] = useState('')
    const [selectPagination,setSelectPagination] = useState('')
    const [dataMultiSelect,setDataMultiSelect] = useState([])

    function onHandlerClickItem(element){
        console.log(element)
        setVal(element)
    }
    
    function onHandlerClickSearch(){

        if(searchVal==='%')
             setSearchVal('')


        if(searchVal==='%' || searchVal.length === 0)
            setDataSearch([{cod:'',val:'%'}, ...datas])    
        else
            setDataSearch([{cod:'',val:'%'}, ...datas].filter(el=>el.val.startsWith(searchVal)))    

    }

    useEffect(()=>{
        if(typeof hotSearch!=='undefined' && hotSearch)
            onHandlerClickSearch()
    },[searchVal])

    return (
        <React.Fragment > {
            webElement.includes('popup') ?
           <div> 
            <TextField
            id={id}
            name={name}
            //className={classes}
            variant="outlined"
            label={label}
            fullWidth
            value={val.val==='%' ? '':val.val}
            onKeyDown={e=>{console.log(e.keyCode);e.keyCode===keyCodeToFire ? setOpen(true):setOpen(false)}}
            onChange={(e)=>{
                    setVal(e.target.value); 
                }
            }
            helperText={val==='' ? 'Required':''}
            InputProps={{
                endAdornment: <IconButton position="end" onClick={()=>setOpen(true)}><FindInPage/></IconButton>
            }}
            />
            <Dialog open={open} 
            disableBackdropClick={false}
            disableEscapeKeyDown={false}
            fullWidth
            aria-labelledby="confirmation-dialog-title"            
            onKeyDown={e=>
                {
                    e.keyCode===27 ? setOpen(false):setOpen(true);
                }}>               
                
                <DialogTitle disableTypography={false}>
                <Grid container>
                <Grid item xs={11}>
                <span>dialog title ....</span>
                </Grid>

                <Grid item xs={1}>
                <IconButton position="end" onClick={()=>setOpen(false)}><Close/></IconButton>
                </Grid>
                </Grid>
                </DialogTitle>
                <Grid container>
                <Grid item xs={10}>
                <TextField  fullWidth value={searchVal} onChange={(e)=>
                    {
                        setSearchVal(e.target.value);
                    }} 
                    onKeyDown={(e)=>{
                            if(e.keyCode===13)
                                onHandlerClickSearch()
                        }
                    }
                    />
                </Grid> 
                <Grid item xs={2}>     
                <Button onClick={()=>{
                    onHandlerClickSearch()
                    }}>Search</Button>
                </Grid>    
                </Grid>    
                <DialogContent>
                <List>
                    {
                        dataSearch.map(element=>( <ListItem button autoFocus divider key={element.cod} 
                            onClick={()=>{
                            onHandlerClickItem(element)
                            setOpen(false)
                        }}> {element.val}</ListItem>))
                    }
                </List>
                <DialogActions>
                    <Select value={selectPagination} onChange={e=>setSelectPagination(e.target.value)}>
                    {
                        datas.map(element=>{return <option key={element.cod} value={element.cod}>{element.cod}</option>})                                             
                    }                                                       
                    </Select>
                </DialogActions>
                </DialogContent>
            </Dialog>
            </div> : webElement.includes('list') ?
            <div>
                <Select displayEmpty fullWidth value={selectData} onChange={(e)=>{
                    setSelectData(e.target.value)
                }} >
                    {                        
                        dataSearch.map(element=>{return <MenuItem key={element.cod} value={element.cod}>{element.val}</MenuItem>})                                             
                    }                                                       
                </Select>                
            </div> : webElement.includes('multiple') ?
            <div>
                <Select
                  multiple
                  fullWidth
                  input={<Input />}
                  value={dataMultiSelect} 
                  onChange={e=>setDataMultiSelect(e.target.value)}  
                  renderValue={selected => selected.join(',')}
                  >
                    {                        
                        dataSearch.map(element=> 
                        (<MenuItem key={element.cod} value={element.val}>
                          <Checkbox checked={dataMultiSelect.indexOf(element.val)>-1}/>
                          <ListItemText primary={element.val}/>
                        </MenuItem>)                    
                    )                                             
                    }                                                       
                </Select>                   
            </div>  : <div>others</div>         
        }
        </React.Fragment>
    )
}

IrisaLov.propTypes = {
    columns: PropTypes.array,
    webElement: PropTypes.oneOf(["","list","popup","multiple"]),
    label: PropTypes.string,
    datas: PropTypes.array
}
