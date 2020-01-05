import React,{useState, useEffect} from 'react';
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,
    Select,MenuItem,Grid,Button,List,TextField,Input,InputAdornment,IconButton,ListItem,
    Table,TableBody,TableCell,TableHead,TablePagination,TableRow,TableSortLabel,TableFooter,Checkbox,Chip,Avatar} from '@material-ui/core';
import {Search,Close} from '@material-ui/icons';

function UsersGroupsApprolesSearch(props){

    const {open,data,selectSpecial} = props

    const [selectedValueToSearch,setSelectedValueToSearch] = useState(selectSpecial===undefined ? '':selectSpecial);
    const [valueToSearch,setValueToSearch] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [ID,setID] = useState("");
    const [isShowList,setisShowList] = useState(false);
    const [rowsPerPage,setRowsPerPage] = useState(5);
    const [page,setPage] = useState(0);
    const [selectedID,setSelectedID] = useState([]);

    useEffect(()=>{
        if(firstName.length===0 && lastName.length===0 && email.length===0 && ID.length===0)
            setValueToSearch("")
        else
            setValueToSearch(`${firstName} , ${lastName} , ${email} , ${ID}`)                
    },[firstName,lastName,email,ID])    

    function resetFields(){
        setFirstName("")
        setLastName("")
        setEmail("")
        setID("")
    }

    return (
        <div>
        <Dialog open={open} fullWidth={true} maxWidth={'xl'}>
            <DialogTitle>جستجوی کاربران گروهها و نقش ها</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>کاربر می تواند جستجو کند</DialogContentText> */}
                <Grid container spacing={8}>
                    <Grid item xs={1}>
                        <Button onClick={e=>{resetFields()}}>ریست</Button>
                    </Grid>   

                    <Grid item xs={1}>
                        <Button onClick={e=>{}}>جستجو</Button>
                    </Grid>

                    <Grid item xs={6}>
                    <Input
                    value={valueToSearch}
                    fullWidth={true}
                    label={"serach use , groups , ..."}
                    onChange={e=>{setValueToSearch(e.target.value);}}
                    endAdornment={
                        <InputAdornment position="start">
                            <IconButton onClick={e=>{setisShowList(true);}}><Search/></IconButton>
                        </InputAdornment>
                    }
                    />
                    </Grid>

                    <Grid item xs={4}>
                        <Select 
                        value={selectedValueToSearch} 
                        autoWidth={true}
                        onChange={e=>{setSelectedValueToSearch(prev=>selectSpecial===undefined ? e.target.value:selectSpecial)}}>
                        <MenuItem value={"all"}>All</MenuItem>
                        <MenuItem value={"users"}>Users</MenuItem>
                        <MenuItem value={"groups"}>Groups</MenuItem>
                        <MenuItem value={"applicationRole"}>Application Role</MenuItem>
                        </Select>
                    </Grid>
                </Grid>    
                <Grid item xs={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">ایمیل</TableCell>  
                                <TableCell align="right">نام خانوادگی</TableCell>
                                <TableCell align="right">نام</TableCell>
                                <TableCell align="right">شناسه</TableCell>
                                <TableCell> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {   data!== undefined &&
                            data.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map(row=>{return (
                            <TableRow key={row.ID}>
                                <TableCell align="right">{row.email}</TableCell>        
                                <TableCell align="right">{row.lastName}</TableCell>        
                                <TableCell align="right">{row.firstName}</TableCell>        
                                <TableCell align="right"><Checkbox name={row.ID} checked={selectedID.includes(row.ID)} onChange={e=>
                                        {                 
                                            const {name,checked} = e.target  

                                            setSelectedID(checked? [...selectedID,name]: selectedID.includes(name)? selectedID.filter(itm=>itm!==name):console.log('nothing'))

                                            console.log(selectedID)
                                        }
                                    } /></TableCell>        
                            </TableRow>)})
                        }
                        </TableBody>   
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        native: true,
                                      }}
                                    onChangePage={(e,p)=>{setPage(p)}}
                                    onChangeRowsPerPage={e=>{setRowsPerPage(parseInt(e.target.value))}}
                                />
                            </TableRow>       
                        </TableFooter> 
                    </Table>
                    </Grid>
                    <Grid item >
                        Selected Items:

                        {selectedID!==undefined && selectedID.map(item=>{
                            return (
                                <Chip
                                key={item}    
                                name={item} 
                                id={item}                             
                                label={item}
                                onDelete={(e,obj={item})=>{setSelectedID(selectedID.filter(itemFilter=>itemFilter!==obj.item))}}
                                //className={classes.chip}  
                                variant="outlined"
                                deleteIcon={<Close/>}
                              />
                            )
                        })}
                    </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={(e,canOpen=open)=>{}}>OK</Button>
                <Button onClick={e=>{}}>Cancel</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={isShowList}>
            <List>
                <ListItem key="firstName"><TextField label="نام" value={firstName} onChange={e=>setFirstName(e.target.value)}/></ListItem>
                <ListItem key="lastName"><TextField label="نام خانوادگی" value={lastName}  onChange={e=>setLastName(e.target.value)}/></ListItem>
                <ListItem key="email"><TextField label="ایمیل" value={email}  onChange={e=>setEmail(e.target.value)}/></ListItem>
                <ListItem key="ID"><TextField label="شناسه جستجو" value={ID}  onChange={e=>setID(e.target.value)}/></ListItem>
                <ListItem key="button"><Button onClick={e=>{
                        setisShowList(false)
                        resetFields();
                    }}
                    >انصراف</Button> 
                    <Button onClick={e=>{
                        setisShowList(false) }}>تایید</Button>                               
                </ListItem>    
            </List>            
        </Dialog>                        
        </div>
    );
}

export default UsersGroupsApprolesSearch;
