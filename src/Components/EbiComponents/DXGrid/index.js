import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {createStyles, IconButton, Input, Switch, TableCell, withStyles} from '@material-ui/core';
import {styles} from '../../../assets/jss/style';
import {
    AccessTime,
    Add,
    CancelOutlined,
    Check,
    CheckBox,
    IndeterminateCheckBox,
    Restore,
    Save
} from '@material-ui/icons';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import {
    CustomPaging,
    CustomSummary,
    DataTypeProvider,
    EditingState,
    FilteringState, IntegratedFiltering,
    IntegratedSelection, IntegratedSorting,
    IntegratedSummary,
    PagingState,
    SelectionState,
    SortingState,
    SummaryState,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    PagingPanel,
    Table,
    TableColumnVisibility,
    TableEditColumn,
    TableEditRow,
    TableFilterRow,
    TableHeaderRow,
    TableSelection,
    TableSummaryRow,
    Toolbar
} from '@devexpress/dx-react-grid-material-ui';
//import Tooltip from "../Tooltip/Tooltip";
//import fetchSign from '../config/FetchSign';
//import DatePicker from "../DatePicker";
import moment from "jalali-moment";
//import {hideLoading, showLoading} from "../redux/actions/openActions";
//import Loading from "../Loading";
//import ConfirmationDialog from "../ConfirmationDialog";
//import LOV from "../LOV";
//import TextField from "../TextField";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
//import Select from "../Select";
import Select from "@material-ui/core/Select";
//import ToggleButtonGroup from "../ToggleButtonGroup";
//import DndTreeLov from "../DndTreeLOV";
import {numberWithCommas, numberWithoutCommas, objectEquality} from "./Helpers";

const ToggleButtonGroup = ()=>(<div></div>);
const Tooltip = ()=>(<div></div>);
const fetchSign = ()=>{}
const hideLoading = ()=>{}
const showLoading = ()=>{}

const rowStyle = theme => ({
    tableStriped: {
        '& tbody tr:nth-of-type(odd)': {
            backgroundColor: '#e3e3e3'
        },
        '& tbody tr td': {
            color: '#767676'
        },
        '& tbody tr:hover': {
            backgroundColor: '#a6d2e799'

        },
        '& thead tr': {
            borderBottom: '1px solid #c7c7c7'
        },
        '& thead tr td': {
            color: '#009ce6'
        }
    },
});

const AddButton = ({onExecute}) => (
    <div style={{textAlign: 'center'}}>
        <IconButton
            onClick={onExecute}
            title="ایجاد سطر جدید"
        >
            <Add style={{color: "#00a5ff"}}/>
        </IconButton>
    </div>
);

const EditButton = ({onExecute}) => (
    <IconButton onClick={onExecute} title="ویرایش سطر">
        <EditIcon style={{color: '#f5b91f'}}/>
    </IconButton>
);

const DeleteButton = ({onExecute}) => {
    const [open, setOpen] = useState(false);

    return (<span>
        <IconButton onClick={() => {
            setOpen(true);
        }}
                    title="حذف سطر">
            <DeleteIcon style={{color: '#fb8c87'}}/>
        </IconButton>

        {/* <ConfirmationDialog open={open}
                            setOpen={setOpen}
                            dialogTitle={"هشدار حذف"}
                            dialogContent={"آیا از حذف اطمینان دارید؟"}
                            onExecute={onExecute}/> */}
    </span>);
};

const CommitButton = ({onExecute}) => {
    const [open, setOpen] = useState(false);

    return (<span>
        <IconButton onClick={() => {
            setOpen(true);
        }}
                    title="ذخیره تغییرات">
            <Save style={{color: "#7fd41b"}}/>
        </IconButton>

        {/* <ConfirmationDialog open={open}
                            setOpen={setOpen}
                            dialogTitle={"تایید تغییرات"}
                            dialogContent={"آیا تغییرات را تایید می کنید؟"}
                            onExecute={onExecute}/> */}
    </span>)
};

const CancelButton = ({onExecute}) => (
    <IconButton onClick={onExecute} title="لغو تغییرات">
        <CancelIcon style={{color: '#fb8c87'}}/>
    </IconButton>
);

const commandComponents = {
    add: AddButton,
    edit: EditButton,
    delete: DeleteButton,
    commit: CommitButton,
    cancel: CancelButton,
};

const Command = ({id, onExecute}) => {
    const CommandButton = commandComponents[id];
    return (
        <CommandButton
            onExecute={onExecute}
        />
    );
};
//added

const UnitsFilterCellBase = ({filter, onFilter, classes, filteringEnabled}) => (
    <TableCell className={classes.cell}>
        {filteringEnabled ?
            <Input
                className={classes.input}
                onKeyUp={(e) => {
                    if (!e.target.value && (e.key === 'Backspace' || e.key === 'Delete'))
                        onFilter(null);
                    if (e.key === 'Enter')
                        onFilter(e.target.value ? {value: e.target.value, action: "contains"} : null)
                }}
                placeholder="فیلتر..."
                inputProps={{
                    style: {textAlign: 'center', height: 'inherit'},
                }}
            /> : null}
    </TableCell>
);

const UnitsFilterCell = withStyles(styles, {name: 'UnitsFilterCell'})(UnitsFilterCellBase);

const UnitsFilterComboListBase = ({value, filter, onFilter, classes, availableColumnValues, filteringEnabled}) => {
    //using valType for sending filter value; if it's string, send it in '. if it's number send without '
    let valType = availableColumnValues && Array.isArray(availableColumnValues) && availableColumnValues[0]
        ? typeof (availableColumnValues[0].value) : undefined;
    return <TableCell className={classes.cell}>
        {filteringEnabled ?
            <Select
                //value={value !== undefined && valType === "string" ? value.substring(1, value.length - 1) : value}
                //To send filter value in BackEnd projects in SpringBoot
                value={value}
                style={{width: "100%"}}
                onChange={e => {
                    onFilter(e.target.value === "" ? {
                        value: "",
                        action: "contains"
                    } : (e.target.value !== undefined ? {
                        //value: (valType === "string" ? "'" + e.target.value + "'" : e.target.value),
                        value: ( e.target.value),
                        action: "equals"
                    } : null))
                }}
                InputProps={(<Input classes={{root: classes.inputRoot}}/>)}
                items={availableColumnValues.map(item => ({
                    value: item.value, name: item.display
                }))}
            /> : null}
    </TableCell>
};

const UnitsFilterComboList = withStyles(styles, {name: 'UnitsFilterComboList'})(UnitsFilterComboListBase);

const UnitsFilterStatusBase = ({value, filter, onFilter, classes, availableColumnValues, filteringEnabled}) => {
    //using valType for sending filter value; if it's string, send it in '. if it's number send without '
    let valType = availableColumnValues && Array.isArray(availableColumnValues) && availableColumnValues[0]
        ? typeof (availableColumnValues[0].value) : undefined;
    return <TableCell className={classes.cell}>
        {filteringEnabled ?
            <ToggleButtonGroup exclusive
                               value={value !== undefined && valType === "string" ? value.substring(1, value.length - 1) :
                                   (value !== undefined && value !== "" && valType === "number" ? parseInt(value) : value)}
                               onChange={value => {
                                   onFilter(value === "" ? {
                                       value: "",
                                       action: "contains"
                                   } : (value !== undefined ? {
                                       value: (valType === "string" ? "'" + value + "'" : value),
                                       action: "equals"
                                   } : null))
                               }}
                               toggleButtonValues={availableColumnValues}/>
            : null}
    </TableCell>
};

const UnitsFilterStatus = withStyles(styles, {name: 'UnitsFilterStatus'})(UnitsFilterStatusBase);

const UnitsFilterDateBase = ({value, filter, onFilter, classes, filteringEnabled}) => {
    return <TableCell className={classes.cell}>
        {filteringEnabled ?
            <span style={{display: "inline-flex", margin: 0}}>
                {/* <DatePicker lang="fa" dateType="jalaali"
                            style={{width: "100%", margin: 2}}
                            handleDateChange={(date, name) => {
                                onFilter({
                                    value: (new Date(date).getTime()),
                                    action: "equalsDate"
                                })
                            }}
                            value={(value === null || value === "") ? null : value}
                /> */}
                <Tooltip color={"inherit"} title="حذف فیلتر" type="icon">
                    <IconButton
                        style={{margin: 0}}
                        onClick={() => {
                            onFilter({
                                value: "",
                                action: "contains"
                            })
                        }}>
                        <Restore/>
                    </IconButton>
                </Tooltip>
            </span>
            : null}
    </TableCell>
};

const UnitsFilterDate = withStyles(styles, {name: 'UnitsFilterDate'})(UnitsFilterDateBase);

const TableComponentBase = ({classes, ...restProps}) => (
    <Table.Table
        {...restProps}
        className={classes.tableStriped}
    />
);

export const TableComponent = withStyles(rowStyle, {name: 'TableComponent'})(TableComponentBase);

const useStyles = createStyles(theme => (
    {
        colorBar: {},
        colorChecked: {},
        iOSSwitchBase: {
            '&$iOSChecked': {
                color: theme.palette.common.white,
                '& + $iOSBar': {
                    backgroundColor: '#52d869',
                },
            },
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.sharp,
            }),
        },
        iOSChecked: {
            transform: 'translateX(15px)',
            '& + $iOSBar': {
                opacity: 1,
                border: 'none',
            },
        },
        iOSBar: {
            borderRadius: 13,
            width: 42,
            height: 26,
            marginTop: -13,
            marginLeft: -21,
            border: 'solid 1px',
            borderColor: theme.palette.grey[400],
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        iOSIcon: {
            width: 24,
            height: 24,
        },
        iOSIconChecked: {
            boxShadow: theme.shadows[1],
        },
    }));

const CustomCell = (props) => {
    const {classes, availableColumnValues, editingEnabled, onValueChange} = props;
    switch (props.type) {
        case "ComboList":
            return (
                <TableCell>
                    <Select
                        {...props}
                        disabled={editingEnabled !== undefined ? !editingEnabled : false}
                        fullWidth {...props.cellProps}
                        style={{width: "100%"}}
                        onChange={event => onValueChange(event.target.value)}
                        items={availableColumnValues.map(item => ({
                            value: item.value, name: item.display
                        }))}
                    >
                    </Select>
                </TableCell>
            );
        case "Custom":
            if (props.cellProps.validColumn) {

                if (props.cellProps.state.id !== undefined && props.cellProps.state.validation !== undefined && (props.cellProps.state.id == props.row[props.cellProps.rowId])) {
                    props.row[props.cellProps.validColumn] = props.cellProps.state.validation;
                }
            }
            return (<TableCell>
                <props.cellComponent {...props} />
            </TableCell>);
        // case "Date":
        //     let cellProps = props.cellProps ? props.cellProps : {}
        //     return (<TableCell>
        //         <DatePicker
        //             {...cellProps}
        //             lang="fa" dateType="jalaali"
        //             disabled={props.editingEnabled !== undefined ? !props.editingEnabled : false}
        //             style={{width: "100%"}}
        //             handleDateChange={(date, name) => props.onValueChange(new Date(date).getTime())}
        //             name={props.name}
        //             value={(props.value == null) ? null : new Date(props.value).getTime()}

        //         />
        //     </TableCell>);
        // case "LOV":
        //     let updatedLOVProps = {...props.LOVProps};
        //     if (props.LOVProps.gridPostUrl && props.LOVProps.gridPostUrl.data) {
        //         let postUrlParams = Object.entries(props.LOVProps.gridPostUrl.data);
        //         let postUrlParamsFromGrid = postUrlParams.filter(param => {
        //             return param[0].endsWith("fromgrid") ||
        //                 param[0].endsWith("FromGrid") ||
        //                 param[0].endsWith("fromGrid");
        //         });

        //         let gridColumnNameWithQualifier, gridColumnName;
        //         postUrlParamsFromGrid.map((params) => {
        //             gridColumnNameWithQualifier = params[0];
        //             gridColumnName = gridColumnNameWithQualifier.substring(0, gridColumnNameWithQualifier.length - 8);
        //             updatedLOVProps = {
        //                 ...updatedLOVProps, ...updatedLOVProps.gridPostUrl.data[gridColumnNameWithQualifier] = (props.row[gridColumnName] ? props.row[gridColumnName] : ''),
        //                 ...updatedLOVProps.gridPostUrl.data[gridColumnName] = (props.row[gridColumnName] ? props.row[gridColumnName] : '')
        //             }
        //         });
        //     }

        //     return (
        //         <TableCell>
        //             <LOV  {...updatedLOVProps}
        //                   value={props.value != null && typeof (props.value) === 'object' ? props.value[props.LOVProps.valueToShow] : props.row[props.columnName]}
        //                   disabled={props.editingEnabled !== undefined ? !props.editingEnabled : false}
        //                   fieldName={props.columnName}
        //                   returnFunction={async (LOVrow) => {
        //                       if (props.LOVProps.gridColumnsValFromLov) {
        //                           for (let i = 0; i < props.LOVProps.gridColumnsValFromLov.length; i++) {
        //                               if (LOVrow[props.LOVProps.gridColumnsValFromLov[i].lovCol]) {
        //                                   props.row[props.LOVProps.gridColumnsValFromLov[i].gridCol] = LOVrow[props.LOVProps.gridColumnsValFromLov[i].lovCol];
        //                               }
        //                           }
        //                       }
        //                       props.onValueChange(LOVrow)
        //                   }}
        //             />
        //         </TableCell>);
        // case "TREE":
        //     return (
        //         <TableCell>
        //             <DndTreeLov
        //                 {...props.TREEProps}
        //                 modeSelecte data={props.TREEProps.data} showInfo={props.TREEProps.showInfo}
        //                 label={props.TREEProps.label} displaySelected={props.TREEProps.displaySelected}
        //                 title={props.TREEProps.title}
        //                 value={props.value && props.TREEProps.getAllValues && typeof props.value === 'object' ? props.value[props.TREEProps.displaySelected] : props.value}

        //                 returnFunc={async (TREErow) => {
        //                     if (props.TREEProps.gridColumnsValFromTree) {
        //                         for (let i = 0; i < props.TREEProps.gridColumnsValFromTree.length; i++) {
        //                             if (TREErow[props.TREEProps.gridColumnsValFromTree[i].treeCol]) {
        //                                 props.row[props.TREEProps.gridColumnsValFromTree[i].gridCol] = TREErow[props.TREEProps.gridColumnsValFromTree[i].treeCol];
        //                             }
        //                         }
        //                     }
        //                     if (props.TREEProps.getAllValues) {
        //                         //delete TREErow.children;
        //                         props.onValueChange(TREErow);
        //                     } else {
        //                         props.onValueChange(TREErow.title);
        //                     }
        //                 }}

        //             />
        //         </TableCell>);

        case "Radio":
            return (
                <TableCell>
                    <FormControl
                        disabled={props.editingEnabled !== undefined ? !props.editingEnabled : false}>
                        <RadioGroup
                            row={false}
                            value={props.value}
                            onChange={(event) => {
                                props.onValueChange(event.target.value)
                            }}>
                            {props.radioList && props.radioList.length > 0 ?
                                props.radioList.map(radio => {
                                    return (<FormControlLabel style={{margin: 0}}
                                                              value={radio.value.toString()}
                                                              control={<Radio/>}
                                                              label={radio.display}/>)
                                })
                                : "هیچ گزینه ای وجود ندارد"}
                        </RadioGroup>
                    </FormControl>
                </TableCell>

            );
        case "Status":
            return (<TableCell>

                <Switch
                    disabled={props.editingEnabled !== undefined ? !props.editingEnabled : false}
                    //disabled={!props.handleCanChange}  //change for adding validation to a switch
                    classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                    }}
                    checked={Boolean(props.value === undefined ? props.defaultValue : props.value)}
                    onChange={(event) => { //change for adding validation to a switch
                        props.onValueChange(event.target.checked)
                    }}
                    value={props.value === undefined ? props.defaultValue : props.value}/>
            </TableCell>);
        case "TextField":
            return (
                <TableCell style={{paddingLeft: 15}}>
                    <TextField disabled={props.editingEnabled !== undefined ? !props.editingEnabled : false}
                               fullWidth {...props.cellProps} {...props}
                               onChange={(event) => {
                                   if (!props.cellProps.currency) {
                                       props.onValueChange(event.target.value)
                                   }
                                   else{
                                       props.onValueChange(numberWithoutCommas(event.target.value))
                                   }
                               }}
                        //onKeyPress={}
                    />
                </TableCell>

            );
        default:
            return (
                <TableCell style={{paddingLeft: 15}}>
                    <TextField disabled={props.editingEnabled !== undefined ? !props.editingEnabled : false}
                               fullWidth {...props}
                               onChange={(event) => {
                                   props.onValueChange(event.target.value)
                               }}/>
                </TableCell>

            );
    }
};

const summaryCalculator = (type, rows, getValue, addedRows) => {
    if (!rows.length && !addedRows.length) {
        return "-";
    }

    let retVal = 0;
    let totalCorrectRows = 0;
    switch (type) {
        case 'avg':
            rows.map((row) => {
                let valRow = getValue(row);
                if (!isNaN(valRow) && valRow) {
                    retVal += parseFloat(valRow);
                    totalCorrectRows += 1;
                }
            });
            addedRows.map((row) => {
                let valRow = getValue(row);
                if (!isNaN(valRow) && valRow) {
                    retVal += parseFloat(valRow);
                    totalCorrectRows += 1;
                }
            });
            retVal = totalCorrectRows === 0 ? NaN : (retVal / totalCorrectRows).toFixed(3);
            return retVal;

        case 'sum':
            rows.map((row) => {
                let valRow = getValue(row);
                if (!isNaN(valRow) && valRow) {
                    retVal += parseInt(valRow);
                }
            });
            addedRows.map((row) => {
                let valRow = getValue(row);
                if (!isNaN(valRow) && valRow) {
                    retVal += parseInt(valRow);
                }
            });
            return retVal;

        case 'sumFloat':
            rows.map((row) => {
                let valRow = getValue(row);
                if (!isNaN(valRow) && valRow) {
                    retVal += parseFloat(valRow);
                }
            });
            addedRows.map((row) => {
                let valRow = getValue(row);
                if (!isNaN(valRow) && valRow) {
                    retVal += parseFloat(valRow);
                }
            });
            return retVal;

        default:
            return IntegratedSummary.defaultCalculator(type, rows, getValue);
    }
};

class DXGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingRows: [],
            columns: this.props.columns,
            tableColumnExtensions: this.props.tableColumnExtensions,
            defaultHiddenColumnNames: this.props.hiddenColumns,
            stringColumns: [this.props.selectedColumn],
            typeColumnsEdit: this.props.typeColumnsEdit !== undefined ? this.props.typeColumnsEdit : [],
            typeColumnsShow: props.typeColumnsShow !== undefined ? this.props.typeColumnsShow : [],
            comboColumns: this.props.comboColumns ? this.props.comboColumns : {},
            statusColumns: this.props.statusColumns ? this.props.statusColumns : {},
            rows: [],
            editable: props.editable ? props.editable : false,
            editingStateColumnExtensions: this.props.editingStateColumnExtensions ? this.props.editingStateColumnExtensions : [],
            showAddCommand: props.showAddCommand !== undefined ? props.showAddCommand : true,
            showEditCommand: props.showEditCommand !== undefined ? props.showEditCommand : true,
            showDeleteCommand: props.showDeleteCommand !== undefined ? props.showDeleteCommand : true,
            showSaveAllCommand: props.showSaveAllCommand !== undefined ? props.showSaveAllCommand : false,
            filterRowEnabled: props.filterRowEnabled !== undefined ? props.filterRowEnabled : true,
            onExecuteEditAll: undefined,

            editingRowIds: [],
            rowChanges: {},
            addedRows: [],
            changedRows: [],
            addedRowsDialog: false,
            editedRowsDialog: false,

            summaryRowTotalItems: props.summaryRowTotalItems ? props.summaryRowTotalItems : [],
            summaryFromServiceArray: [],

            selectionMode: props.selectionMode ? props.selectionMode : false,
            selectedRows: {},
            index: 0,
            sorting: this.props.sorting ? this.props.sorting : [],
            totalCount: 0,
            pageSize: props.pageSize ? props.pageSize : 10,
            pageSizes: [5, 10, 20],
            currentPage: 0,
            loading: false,
            filters: [],

        };
        this.changeSorting = this.changeSorting.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
        this.editCell = this.editCell.bind(this);
        this.changeEditingRowIds = this.changeEditingRowIds.bind(this);
        this.changeRowChanges = this.changeRowChanges.bind(this);
        this.changeAddedRows = this.changeAddedRows.bind(this);
    }

    messages = {
        avg: (this.props.summaryLabels && this.props.summaryLabels.avg ? this.props.summaryLabels.avg : 'میانگین'),
        count: (this.props.summaryLabels && this.props.summaryLabels.count ? this.props.summaryLabels.count : 'تعداد'),
        max: (this.props.summaryLabels && this.props.summaryLabels.max ? this.props.summaryLabels.max : 'حداکثر'),
        min: (this.props.summaryLabels && this.props.summaryLabels.min ? this.props.summaryLabels.min : 'حداقل'),
        sum: (this.props.summaryLabels && this.props.summaryLabels.sum ? this.props.summaryLabels.sum : 'جمع'),
        sumFloat: (this.props.summaryLabels && this.props.summaryLabels.sum ? this.props.summaryLabels.sum : 'جمع'),
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.comboColumns !== nextProps.comboColumns)
            return {
                comboColumns: nextProps.comboColumns
            };

        return null;
    }

    editCell(props) {
        const {column} = props;
        const {typeColumnsEdit, comboColumns} = this.state;

        if (props.editingEnabled !== undefined && typeof props.editingEnabled === "function") {
            let isThisColumnEditable = this.rowCommandColumnIsVisible(props.tableRow.row, props.editingEnabled);
            props = {...props, editingEnabled: isThisColumnEditable};
        }

        let type = [""];

        type = typeColumnsEdit !== undefined ? typeColumnsEdit.filter(typeColumn => (
                column.name == typeColumn.columnName
            )
        ) : [];

        if (type.length !== 0) {
            switch (type[0].type) {
                case 'ComboList':
                    if (comboColumns !== undefined && comboColumns[column.name]) {
                        return <CustomCell type={type[0].type} name={type[0].columnName} cellProps={type[0].cellProps}
                                           availableColumnValues={comboColumns[column.name]}
                                           {...props} />;
                    }
                    break;

                case 'Date':
                    return <CustomCell type={type[0].type} {...props} />;

                case 'Status':
                    return <CustomCell defaultValue={type[0].defaultValue}
                                       type={type[0].type} {...props} classes={this.props.classes}/>;

                case 'LOV':
                    return <CustomCell type={type[0].type} columnName={type[0].columnName} LOVProps={type[0].LOVProps}
                                       state={this.state} {...props} />;
                case 'TREE':
                    return <CustomCell type={type[0].type} columnName={type[0].columnName} TREEProps={type[0].TREEProps}
                                       state={this.state} {...props} />;
                case 'Custom':
                    return <CustomCell type={type[0].type} cellComponent={type[0].cellComponent}
                                       cellProps={type[0].cellProps}
                                       {...props} />;

                case 'TextField':
                    return <CustomCell type={type[0].type} name={type[0].columnName} cellProps={type[0].cellProps}
                                       {...props} />;

                case 'Radio':
                    return <CustomCell type={type[0].type} radioList={type[0].radioList} {...props} />;
            }
        }

        // default case
        return <CustomCell {...props} />;
    };

    FilterCell = (props) => {
        const {column} = props;
        const {typeColumnsEdit, comboColumns, statusColumns, tableColumnExtensions} = this.state;

        let type = [""];

        type = typeColumnsEdit !== undefined ? typeColumnsEdit.filter(typeColumn => (
                column.name == typeColumn.columnName
            )
        ) : [];

        if (type.length !== 0) {
            switch (type[0].type) {
                case 'ComboList':
                    if (comboColumns !== undefined && comboColumns[column.name]) {
                        return (<UnitsFilterComboList value={this.state[column.name]} {...props}
                                                      availableColumnValues={comboColumns[column.name]}/>);
                    }
                    break;

                case 'Status':
                    if (statusColumns !== undefined && statusColumns[column.name]) {
                        return (<UnitsFilterStatus value={this.state[column.name]} {...props}
                                                   availableColumnValues={statusColumns[column.name]}/>);
                    }
                    break;

                case 'Date':
                    return (<UnitsFilterDate value={props.filter ? props.filter.value : null} {...props}
                                             availableColumnValues={statusColumns[column.name]}/>);
                    break;
            }
        }

        // default case
        return (<UnitsFilterCell  {...props}/>);
    };

    getRowData = r => {
        if (this.props.handleClose !== undefined) {
            this.props.handleClose();
        }
        return this.props.returnFunction(r);
    };

    ActionFormatter = (row, name, props) => {
        const {buttons} = props.typeColumnShow;
        return (
            buttons.map((btn) => {
                    let isButtonEnabled = this.rowCommandColumnIsVisible(row,
                        btn.buttonEnableFunc ? btn.buttonEnableFunc : undefined);

                    return <IconButton disabled={!isButtonEnabled} onClick={() => {
                        btn.cb(row)
                    }} title={btn.title}
                    >
                        <btn.Icon style={{color: (isButtonEnabled ? btn.enableColor : btn.disableColor)}}/>
                    </IconButton>
                }
            ))

    };

    BooleanFormatter = ({row}) => <IconButton
        onClick={this.getRowData.bind(this, row)}>
        <Tooltip color={"inherit"} title="انتخاب" type="icon" icon={<Check/>}/></IconButton>;

    ComboFormatter = (row, name, props) => {
        return this.state.comboColumns[name].filter(item => item.value === row[name]).map((item, key) => {
            return item.display;
        });
    };

    LOVFormatter = (row, columnName, valueToShow) => <span dir={'ltr'}>
        {row[columnName] && row[columnName][valueToShow] ? row[columnName][valueToShow] :
            (typeof row[columnName] === "string" || typeof row[columnName] === "number" || typeof row[columnName] === "boolean" ? row[columnName] : '')}
    </span>;

    RadioFormatter = (row, name, props) => {
        let fArr = this.state.typeColumnsEdit.filter(typeColumn => {
            return typeColumn.columnName == name
        });
        return fArr[0].radioList.filter(item => item.value === row[name]).map((item, key) => {
            return item.display;
        });
    };

    TREEFormatter = (row, columnName, valueToShow) => <span dir={'ltr'}>
        {row[columnName] && row[columnName][valueToShow] ? row[columnName][valueToShow] :
            (typeof row[columnName] !== "object" ? row[columnName] : '')}
    </span>;

    PersianFormatter = (row, name) =>
        <span dir={"ltr"}>
            {(row[name]) ?
                <Tooltip
                    title={<span>{moment(new Date(row[name])).locale('fa').format('HH:mm:ss')}<AccessTime/></span>}
                    type="icon"
                    icon={<span>{moment(new Date(row[name])).locale('fa').format('YYYY/MM/DD HH:mm:ss')}</span>}/>
                :
                null
            }

    </span>;
    SimplePersianFormatter = (row, name) =>
        <span dir={"ltr"}>
            {(row[name]) ?
                <Tooltip
                    title={<span>{moment(new Date(row[name])).locale('fa').format('YYYY/MM/DD')}<AccessTime/></span>}
                    type="icon"
                    icon={<span>{moment(new Date(row[name])).locale('fa').format('YYYY/MM/DD')}</span>}/>
                :
                null
            }

    </span>;

    StatusFormatter = (row, name) => {
        if (row[name] == 'true' || row[name] == 1) {
            return <CheckBox style={{color: '#7dd41b'}}/>
        }
        return <IndeterminateCheckBox style={{color: '#ed453e'}}/>
    };

    NumberSeperatorFormatter = (row, name) => {
        return numberWithCommas(row[name]);
    };

    ColumnsTypeProviders = (props) => {

        switch (props.typeColumnShow.type) {
            case "DatePersian":
                return (<DataTypeProvider
                    formatterComponent={({row}) => (this.PersianFormatter(row, props.for))}
                    {...props}
                />);
            case "SimpleDatePersian":
                return (<DataTypeProvider
                    formatterComponent={({row}) => (this.SimplePersianFormatter(row, props.for))}
                    {...props}
                />);
            case "ComboList":
                return (<DataTypeProvider
                    formatterComponent={({row}) => (this.ComboFormatter(row, props.for, props))}
                    {...props}
                />);
            case "Action":
                return (<DataTypeProvider
                    formatterComponent={({row}) => (this.ActionFormatter(row, props.for, props))}
                    {...props}
                />);
            case "LOV":
                return (<DataTypeProvider
                    formatterComponent={({row}) => {
                        return (this.LOVFormatter(row, props.for, props.typeColumnShow.valueToShow))
                    }}
                    {...props}
                />);
            case "TREE":
                return (<DataTypeProvider
                    formatterComponent={({row}) => {
                        return (this.TREEFormatter(row, props.for, props.typeColumnShow.valueToShow))
                    }}
                    {...props}
                />);
            case "Radio":
                return (<DataTypeProvider
                    formatterComponent={({row}) => (this.RadioFormatter(row, props.for, props))}
                    {...props}
                />);
            case "Status":
                return (<DataTypeProvider
                    formatterComponent={({row}) => {
                        return (this.StatusFormatter(row, props.for))
                    }}
                    {...props}
                />);
            case "Currency":
                return (<DataTypeProvider
                    formatterComponent={({row}) => {
                        return (this.NumberSeperatorFormatter(row, props.for))
                    }}
                    {...props}
                />);
            default:
                return <DataTypeProvider

                    formatterComponent={({row}) => (row[props.for])}
                    {...props}
                />
        }

    };

    StringTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={this.BooleanFormatter}
            {...props}
        />
    );

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        const {rowChanges, rows} = this.state;

        if (this.props.gridReload !== prevProps.gridReload ||
            (this.props.postUrl && !objectEquality(this.props.postUrl.data, prevProps.postUrl.data))) {
            this.reloadData();
        }
        if (this.props.returnStates) {
            this.props.returnStates(this.state)
        }

        if (this.props.onAddedRowsChanges) {
            //if added rows are changing, send states to function
            if (prevState.addedRows !== this.state.addedRows) {
                this.props.onAddedRowsChanges(this.state.addedRows)
            }
        }

        if (this.props.onChangedRowsChanges) {
            //if changed rows are changing, send states to function
            if (prevState.rowChanges !== this.state.rowChanges) {
                let updatedRows = [];
                updatedRows = rows.map(row => (rowChanges[row[this.props.rowId]] ?
                    {...row, ...rowChanges[row[this.props.rowId]]} : row));
                this.setState({rows: updatedRows}, () => {
                    this.props.onChangedRowsChanges(updatedRows.filter(row => rowChanges[row[this.props.rowId]]));
                });

            }
        }
    }

    changeFilters = async (filters) => {
        await this.setState({
            filters
        });

        await this.loadData();
    };

    async changeSorting(sorting) {
        await this.setState({
            loading: true,
            sorting,
        });

        this.cancelAll();
    }

    async changeCurrentPage(currentPage) {
        await this.setState({
            loading: true,
            currentPage,
        });

        this.cancelAll("keepFilter");
    }

    async changePageSize(pageSize) {
        const {totalCount, currentPage: stateCurrentPage} = this.state;
        const totalPages = Math.ceil(totalCount / pageSize);
        const currentPage = Math.min(stateCurrentPage, totalPages - 1);
        await this.setState({
            loading: true,
            pageSize,
            currentPage,
        });
        this.cancelAll();
    }

    queryString() {
        const {sorting, pageSize, currentPage, url, filters} = this.state;
        var queryString = "";
        let filter = filters.reduce((acc, {columnName, value, action}) => {
            this.setState({
                [columnName]: value
            });
            acc.push(`["${columnName}", ${action}, "${encodeURIComponent(value)}"]`);
            return acc;
        }, []).join(',"and",');
        if (filters.length > 1) {
            filter = `[${filter}]`;
        }
        if (this.props.url) {
            queryString = `${this.props.url}&size=${pageSize}&page=${currentPage}&filter=${encodeURIComponent(filter)}`;
        } else if (this.props.postUrl) {
            queryString = `${this.props.postUrl.url}&size=${pageSize}&page=${currentPage}&filter=${encodeURIComponent(filter)}`;
        }
        const columnSorting = sorting[0];
        if (columnSorting) {
            const sortingDirectionString = columnSorting.direction === 'desc' ? ' DESC' : '';
            queryString = `${queryString}&orderby=${columnSorting.columnName}&direction=${sortingDirectionString}`;
        }
        return queryString;
    }

    async loadData() {
        const {currentPage, pageSize} = this.state;
        if (this.props.rows === undefined) {
            showLoading(null, null);
            const queryString = await this.queryString();
            if (queryString === this.lastQuery) {
                hideLoading();
                return;
            }
            if (this.props.url) {
                await fetchSign.readApi({url: queryString})
                    .then(res => {
                        if (res.status === 200) {
                            this.setState({
                                rows: res.data.content,
                                totalCount: res.data.totalElements,
                                summaryFromServiceArray: this.props.summaryFromService && res.data.summaryFromServiceArray ? res.data.summaryFromServiceArray : []
                            });
                            if (this.props.onTotalCountChanges) {
                                this.props.onTotalCountChanges(this.state.totalCount);
                            }
                            hideLoading();
                        } else if (res.status === 204) {
                            this.setState({
                                rows: [],
                                totalCount: 0,
                                summaryFromServiceArray: []
                            });
                            hideLoading();
                            if (this.state.currentPage !== 0) {
                                this.changeCurrentPage(0);
                            }
                        }
                    })
                    .catch(() => hideLoading());
            } else if (this.props.postUrl) {
                await fetchSign.createApi({url: queryString, data: this.props.postUrl.data})
                    .then(res => {
                        if (res.status === 200) {
                            this.setState({
                                rows: res.data.content,
                                totalCount: res.data.totalElements,
                                summaryFromServiceArray: this.props.summaryFromService && res.data.summaryFromServiceArray ? res.data.summaryFromServiceArray : []
                            });
                            if (this.props.onTotalCountChanges) {
                                this.props.onTotalCountChanges(this.state.totalCount);
                            }
                            hideLoading();
                        } else if (res.status === 204) {
                            this.setState({
                                rows: [],
                                totalCount: 0,
                                summaryFromServiceArray: []
                            });
                            hideLoading();
                            if (this.state.currentPage !== 0) {
                                this.changeCurrentPage(0);
                            }
                        }
                    })
                    .catch(() => hideLoading());
            }
            this.lastQuery = queryString;
        } else {
            this.setState({
                rows: (this.props.rows).slice(currentPage * pageSize, (currentPage + 1) * pageSize),
                totalCount: this.props.rows.length
            });
        }
    }

    async reloadData(typeAction) {
        const {currentPage, pageSize} = this.state;
        if (this.props.rows === undefined) {
            showLoading(null, null);
            if (typeAction === undefined) {
                await this.cancelAll();
            }
            const queryString = await this.queryString();
            if (this.props.url) {
                await fetchSign.readApi({url: queryString})
                    .then(res => {
                            if (res.status === 200) {
                                this.setState({
                                    rows: res.data.content,
                                    totalCount: res.data.totalElements,
                                    summaryFromServiceArray: this.props.summaryFromService && res.data.summaryFromServiceArray ? res.data.summaryFromServiceArray : []
                                });
                                if (this.props.onTotalCountChanges) {
                                    this.props.onTotalCountChanges(this.state.totalCount);
                                }
                                hideLoading();
                            } else if (res.status === 204) {
                                this.setState({
                                    rows: [],
                                    totalCount: 0,
                                    summaryFromServiceArray: []
                                });
                                hideLoading();
                            }


                        }
                    ).catch(() => hideLoading());
            } else if (this.props.postUrl) {
                await fetchSign.createApi({url: queryString, data: this.props.postUrl.data})
                    .then(res => {
                            if (res.status === 200) {
                                this.setState({
                                    rows: res.data.content,
                                    totalCount: res.data.totalElements,
                                    summaryFromServiceArray: this.props.summaryFromService && res.data.summaryFromServiceArray ? res.data.summaryFromServiceArray : []
                                });
                                if (this.props.onTotalCountChanges) {
                                    this.props.onTotalCountChanges(this.state.totalCount);
                                }
                                hideLoading()
                            } else if (res.status === 204) {
                                this.setState({
                                    rows: [],
                                    totalCount: 0,
                                    summaryFromServiceArray: []
                                });
                                hideLoading();
                            }
                        }
                    ).catch(() => hideLoading());
            }
            this.lastQuery = queryString;
        } else {
            this.setState({
                rows: (this.props.rows).slice(currentPage * pageSize, (currentPage + 1) * pageSize),
                totalCount: this.props.rows.length
            }, () => {
                if (typeAction === undefined) {
                    this.cancelAll();
                }
            });
        }
    }

    rowCommandColumnIsVisible = (row, CommandColumnFunc) => {
        return (CommandColumnFunc !== undefined ? CommandColumnFunc(row) : true);
    };

    async changeEditingRowIds(editingRowIds) {
        if (this.state.editingRowIds.length == 0) { //entering edit mode
            await this.setState({editingRowIds});

        } else { //exiting edit mode
            await this.setState({editingRowIds: []});
            await this.changeOnExecuteEditAll(undefined);
        }
    }

    changeRowChanges(rowChanges) {
        this.setState({rowChanges: {...rowChanges}});
    }

    async changeAddedRows(addedRowsArr) {
        if (addedRowsArr.length >= this.state.addedRows.length) { //entering single/multi row add mode
            await this.setState({addedRows: addedRowsArr});

            // }
            // else if (this.state.showSaveAllCommand) { //exiting multi row add mode
            //     // commented this line to keep added line after pressing saveAll button
            //     await this.setState({addedRows: []});
            //     await this.changeOnExecuteEditAll(undefined);

        } else { //existing single row add mode
            await this.setState({addedRows: addedRowsArr});
        }
    }

    editAll = async () => {
        let editingIds = [];

        await this.state.rows.map(row => {
            if (this.rowCommandColumnIsVisible(row,
                this.props.rowCommandColumnVisibility && this.props.rowCommandColumnVisibility.edit ? this.props.rowCommandColumnVisibility.edit : undefined)) {
                editingIds.push(row[this.props.rowId])
            }
        });

        await this.setState({editingRowIds: editingIds});
    };

    cancelAll = async (type) => {
        if (type === undefined) {
            await this.setState({
                addedRows: [], onExecuteEditAll: undefined,
                filters: [], editingRowIds: [], rowChanges: {}
            }, () => {
                this.reloadData("without cancel");
            });

        } else if (type === "keepFilter") {
            await this.setState({
                addedRows: [], onExecuteEditAll: undefined,
                editingRowIds: [], rowChanges: {}
            }, () => {
                this.reloadData("without cancel");
            });
        }
    };

    changeEditedRowsDialog = async (editedRowsDialog) => {
        await this.setState({editedRowsDialog});
    };

    async changeOnExecuteEditAll(onExecuteEditAllFunc) {
        await this.setState({onExecuteEditAll: onExecuteEditAllFunc});
    }

    render() {
        const PagingContainer = props => (
            <PagingPanel.Container {...props} className={classes.pagingPanel}/>
        );
        const {
            editingStateColumnExtensions,
            selectionMode,
            selectedRows,
            rows,
            columns,
            tableColumnExtensions,
            sorting,
            pageSize,
            pageSizes,
            currentPage,
            totalCount,
            stringColumns,
            defaultHiddenColumnNames,
            showAddCommand,
            showEditCommand,
            showSaveAllCommand,
            showDeleteCommand,
            typeColumnsShow,
            summaryRowTotalItems,
            summaryFromServiceArray,
            rowChanges,
            editingRowIds,
            addedRows,
            editedRowsDialog,
            filterRowEnabled
        } = this.state;
        const {
            classes,
            returnFunction,
            summaryFromService,
            disablePageContainer,
            defaultSelection,
            defaultSelectionRow,
            disableAddWithEdit,
            sortingRowEnabled
        } = this.props;
        const getRowId = (row) => (row[this.props.rowId]);

        return (
            <Grid
                getRowId={this.props.rowId ? getRowId : undefined}
                style={{backgroundColor: "#fffcfb"}}
                rows={rows}
                columns={columns}>
                {/* <Loading/> */}

                <FilteringState
                    columnExtensions={tableColumnExtensions}
                    onFiltersChange={this.changeFilters}
                />
                {this.props.rows ? <IntegratedFiltering/> : null}
                <SortingState
                    columnSortingEnabled={sortingRowEnabled? sortingRowEnabled: false}
                    sorting={sorting}
                    onSortingChange={this.changeSorting}
                />
                {this.props.rows ? <IntegratedSorting/> : null}
                <PagingState
                    currentPage={currentPage}
                    onCurrentPageChange={this.changeCurrentPage}
                    pageSize={pageSize}
                    onPageSizeChange={this.changePageSize}/>

                <CustomPaging
                    totalCount={totalCount}/>

                {/*<IntegratedPaging/> commented for paging correction*/}
                <this.StringTypeProvider
                    for={stringColumns}
                />

                <Table rowComponent={returnFunction ? ({row, ...restProps}) => (
                    <Table.Row
                        {...restProps}
                        onClick={() => {
                            this.getRowData(row)
                        }}
                        style={{cursor: 'pointer'}}
                    />
                ) : ({row, ...restProps}) => (<Table.Row
                    {...restProps}
                />)}
                       tableComponent={TableComponent} messages={{noData: 'داده ای برای نمایش وجود ندارد'}}
                       columnExtensions={tableColumnExtensions}/>

                <Toolbar rootComponent={() => (
                    <div style={{padding: "5px"}}>
                        {showSaveAllCommand && this.state.editingRowIds.length === 0 && showEditCommand && (!disableAddWithEdit || addedRows.length === 0) ?
                            <IconButton style={{padding: "5px"}} title="ویرایش همه"
                                        onClick={this.editAll}>
                                <EditIcon style={{color: "#ffba1d"}}/>
                            </IconButton>
                            : null}
                        {showSaveAllCommand && (this.state.editingRowIds.length > 0 || addedRows.length > 0) ?

                            <span style={{padding: "5px"}}>
                                <IconButton style={{padding: "5px"}} title="لغو"
                                            onClick={() => {
                                                this.cancelAll()
                                            }}>
                                    <CancelOutlined style={{color: "#ee453e"}}/>
                                </IconButton>
                                {this.props.onChangedRowsChanges || this.props.onAddedRowsChanges ? null :
                                    <IconButton style={{padding: "5px"}} title="ذخیره همه"
                                                onClick={async () => await this.changeEditedRowsDialog(true)}>
                                        <Save style={{color: "#7fd41b"}}/>
                                    </IconButton>}
                                {/* <ConfirmationDialog open={editedRowsDialog}
                                                    setOpen={this.changeEditedRowsDialog}
                                                    dialogTitle={"تایید تغییرات"}
                                                    dialogContent={"آیا تغییرات را تایید می کنید؟"}
                                                    onExecute={() => {
                                                        this.state.onExecuteEditAll();
                                                    }}/> */}
                            </span> : null}
                    </div>)}>
                </Toolbar>

                <TableHeaderRow showSortingControls/>
                {filterRowEnabled ? <TableFilterRow cellComponent={this.FilterCell}
                                                    messages={{filterPlaceholder: 'فیلتر...'}}/> : null}

                <TableColumnVisibility
                    defaultHiddenColumnNames={defaultHiddenColumnNames}
                />
                {disablePageContainer ? null :
                    <PagingPanel containerComponent={PagingContainer}
                                 messages={{
                                     showAll: 'همه', rowsPerPage: 'تعداد در صفحه:', info: ({from, to, count}) => {
                                         return from + "-" + to + " از " + count
                                     }
                                 }}
                                 pageSizes={pageSizes}
                    />
                }


                {typeColumnsShow.map((typeColumnShow, index) => {
                        return (
                            <this.ColumnsTypeProviders
                                key={index}
                                typeColumnShow={typeColumnShow}
                                for={typeColumnShow.columnName}/>)
                    }
                )
                }

                {this.state.editable ? <EditingState
                        editingRowIds={editingRowIds}
                        onEditingRowIdsChange={this.changeEditingRowIds}
                        rowChanges={rowChanges}
                        onRowChangesChange={this.changeRowChanges}
                        addedRows={addedRows}
                        onAddedRowsChange={this.changeAddedRows}
                        onCommitChanges={async ({added, changed, deleted}) => {
                            let changedRow = undefined;
                            let deletedRow = undefined;
                            let changedRows = undefined;

                            if (this.props.rows === undefined) {
                                let rowChangesArr = Object.entries(rowChanges);
                                if (rowChangesArr.length !== 0) {
                                    if (editingRowIds.length > 1) { //saving multi row edit mode
                                        changedRows = [];
                                        for (let i = 0; i < rowChangesArr.length; i++) {

                                            let editingRowsBeforeEdit = rows.filter(row => {
                                                return row[this.props.rowId] == rowChangesArr[i][0];
                                            });
                                            let updatedRow = Object.assign(editingRowsBeforeEdit[0], rowChangesArr[i][1]);
                                            changedRows.push(updatedRow);
                                        }

                                    } else if (changed) { //saving single row edit mode
                                        let editingRowsBeforeEdit = rows.filter(row => {
                                            return row[this.props.rowId] == Object.entries(changed)[0][0];
                                        });
                                        changedRow = Object.assign(editingRowsBeforeEdit[0], Object.entries(changed)[0][1]);

                                        // sending single row in SaveAll-mode; begin
                                        changedRows = [];
                                        changedRows.push(changedRow);
                                        // sending single row in SaveAll-mode; end
                                    }
                                }
                                if (deleted) {
                                    deletedRow = rows.filter(row => row[this.props.rowId] == deleted[0]);
                                }

                                this.props.commitChanges(addedRows.length !== 0 ? addedRows : undefined, changedRow, deleted, deletedRow ? deletedRow[0] : deletedRow, changedRows);

                            } else {
                                //(SaveAll,Single)-delete
                                if (deleted) {
                                    this.props.rows.map((row, index) => {
                                        if (row[this.props.rowId] == deleted[0]) {
                                            this.props.rows.splice(index, 1);
                                        }
                                    });

                                } else if (showSaveAllCommand) {
                                    //SaveAll-edit
                                    let rowChangesArr = Object.entries(rowChanges);
                                    if (rowChangesArr.length !== 0) {
                                        for (let i = 0; i < rowChangesArr.length; i++) {
                                            this.props.rows.map((row, index) => {
                                                if (row[this.props.rowId] == rowChangesArr[i][0]) {
                                                    this.props.rows.splice(index, 1, Object.assign(row, rowChangesArr[i][1]));
                                                }
                                            });
                                        }
                                    }

                                    //SaveAll-add
                                    if (addedRows.length !== 0) {
                                        addedRows.map(addedRow => {
                                            if (Object.entries(addedRow).length !== 0 && addedRow.constructor === Object) {
                                                this.props.rows.unshift(addedRow);
                                            }
                                        });
                                        return this.reloadData();
                                    }

                                } else if (!showSaveAllCommand) {
                                    //Single-edit
                                    if (changed) {
                                        let rowChangesArr = Object.entries(changed);
                                        Object.assign(this.props.rows.filter(row => {
                                            return row[this.props.rowId] == rowChangesArr[0][0];
                                        })[0], rowChangesArr[0][1]);
                                    }

                                    //Single-add
                                    if (added) {
                                        this.props.rows.unshift(added[0]);
                                    }
                                }

                                this.reloadData("without cancel");
                            }
                        }}
                        columnExtensions={editingStateColumnExtensions.length > 0 ? editingStateColumnExtensions : []}
                    />
                    : ""}
                {this.state.editable ?
                    <TableEditColumn
                        width={showSaveAllCommand
                            ? (showAddCommand || showDeleteCommand ? 60 : 10) :
                            (showEditCommand ? (showDeleteCommand ? 120 : 60) :
                                (showDeleteCommand || showAddCommand ? 60 : 10))}
                        showAddCommand={showAddCommand  && (!disableAddWithEdit || editingRowIds.length === 0)}
                        showEditCommand={showEditCommand}
                        showDeleteCommand={showDeleteCommand}
                        commandComponent={Command}
                        cellComponent={(props) => {
                            if (props.children[0] || props.children[1]) {// during rendering edit/delete buttons
                                let editIsEnable = this.rowCommandColumnIsVisible(props.tableRow.row,
                                    this.props.rowCommandColumnVisibility && this.props.rowCommandColumnVisibility.edit ? this.props.rowCommandColumnVisibility.edit : undefined);
                                let deleteIsEnable = this.rowCommandColumnIsVisible(props.tableRow.row,
                                    this.props.rowCommandColumnVisibility && this.props.rowCommandColumnVisibility.delete ? this.props.rowCommandColumnVisibility.delete : undefined);

                                let ids = [];
                                let children = [];
                                if (editIsEnable && deleteIsEnable) {
                                    ids = ['edit', 'delete'];

                                } else if (editIsEnable && !deleteIsEnable) {
                                    ids = ['edit'];

                                } else if (!editIsEnable && deleteIsEnable) {
                                    ids = ['delete'];

                                } else if (!editIsEnable && !deleteIsEnable) {
                                    ids = [];
                                }

                                if (ids.length > 0) {
                                    if (!showSaveAllCommand) {
                                        children.push(props.children[0] && ids.includes(props.children[0].props.id) ? props.children[0] : false);
                                    }
                                    children.push(props.children[1] && ids.includes(props.children[1].props.id) ? props.children[1] : false);
                                    children.push(props.children[2]);
                                    children.push(props.children[3]);
                                    return <Table.Cell {...props} children={children}/>

                                } else {
                                    return <Table.StubCell/>
                                }

                            } else {// during rendering commit/cancel buttons
                                if (showSaveAllCommand) {//entering multi row save mode
                                    if (this.state.onExecuteEditAll === undefined) { //get commit button from a row and send it to saveAll button
                                        if (props.children[2].props && props.children[2].props.onExecute) {
                                            this.changeOnExecuteEditAll(props.children[2].props.onExecute);
                                        }
                                    }

                                    let children = [];
                                    children.push(false);
                                    children.push(false);
                                    children.push(false);
                                    if (!editingRowIds.includes(props.tableRow.row[this.props.rowId])) {
                                        children.push(props.children[3]);
                                    }

                                    return <Table.Cell {...props} children={children}/>
                                } else {//entering single row add/edit mode
                                    return <Table.Cell {...props}/>
                                }
                            }
                        }}
                    />
                    : ""}
                {this.state.editable ?
                    <TableEditRow cellComponent={this.editCell}/>
                    : ""}
                {selectionMode ? <SelectionState
                    defaultSelection={defaultSelection}
                    onSelectionChange={(idsOfSelectedRowsInAllPages) => {
                        let selectedRowsOfThisPageObj = {};
                        let previousSelectedRowsObj = {};
                        rows.map(row => {
                            if (idsOfSelectedRowsInAllPages.includes(row[this.props.rowId])) {
                                selectedRowsOfThisPageObj[row[this.props.rowId]] = row;
                            }
                        });
                        if (defaultSelectionRow.length > 0) {
                            defaultSelectionRow.map(row => {
                                previousSelectedRowsObj[row[this.props.rowId]] = row;
                            });
                        }
                        let all = {...previousSelectedRowsObj, ...selectedRows, ...selectedRowsOfThisPageObj};

                        let idsOfSelectedRowsInAllPagesConvertedToString = [];
                        idsOfSelectedRowsInAllPages.map(function (rowId) {
                            idsOfSelectedRowsInAllPagesConvertedToString.push(rowId.toString());
                        });

                        //delete previously selected rows which are getting unselected; begin
                        Object.keys(all).map(key => {
                            if (!(idsOfSelectedRowsInAllPagesConvertedToString.includes(key.toString()))) {
                                delete all[key];
                            }
                        });
                        //delete previously selected rows which are getting unselected; end

                        this.setState({selectedRows: all});
                        this.props.changeSelectionRow(Object.values(all));
                    }}/> : ""
                }
                {selectionMode ? <IntegratedSelection/> : ""
                }
                {selectionMode ? <TableSelection highlightRow selectByRowClick showSelectAll={true}/> : ""
                }

                <SummaryState totalItems={summaryRowTotalItems}/>

                {summaryFromService && summaryFromServiceArray.length > 0 ?
                    <CustomSummary totalValues={summaryFromServiceArray}/> :
                    <IntegratedSummary calculator={(type, rows, getValue) => {
                        return summaryCalculator(type, rows, getValue, addedRows);
                    }}/>}

                <TableSummaryRow messages={this.messages}/>
            </Grid>
        )
    }
}

DXGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    editingStateColumnExtensions: PropTypes.array,
    columns: PropTypes.array.isRequired,
    hiddenColumns: PropTypes.array,
    selectedColumn: PropTypes.object,
    tableColumnExtensions: PropTypes.array,
    postUrl: PropTypes.object,
    url: PropTypes.string,
    sorting: PropTypes.array,
    editable: PropTypes.bool,
    disablePageContainer: PropTypes.bool,
    selectionMode: PropTypes.bool,
    defaultSelection: PropTypes.array,
    defaultSelectionRow: PropTypes.array,
    commitChanges: PropTypes.func,
    rows: PropTypes.array,
    rowId: PropTypes.string,
    changeSelectionRow: PropTypes.func,
    comboColumns: PropTypes.object,
    statusColumns: PropTypes.object,
    showAddCommand: PropTypes.bool,
    showEditCommand: PropTypes.bool,
    showDeleteCommand: PropTypes.bool,
    typeColumnsEdit: PropTypes.array,
    typeColumnsShow: PropTypes.array,
    summaryRowTotalItems: PropTypes.array,
    summaryLabels: PropTypes.object,
    summaryFromService: PropTypes.bool,
    rowCommandColumnVisibility: PropTypes.object,
    onAddedRowsChanges: PropTypes.func,
    onChangedRowsChanges: PropTypes.func,
    onTotalCountChanges: PropTypes.func,
    filterRowEnabled: PropTypes.bool,
    disableAddWithEdit: PropTypes.bool,
    sortingRowEnabled:PropTypes.bool
};

export default withStyles(Object.assign(styles, useStyles))(DXGrid);