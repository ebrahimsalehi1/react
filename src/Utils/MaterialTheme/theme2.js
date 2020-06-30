import {createMuiTheme} from '@material-ui/core/styles';
//import {grey, lime} from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        background: {
            main: '#ffffff',
            second:'#eeeeee',
            default: '#eeeeee'
        },
        nav: {
            main: '#3f51b5'
        },
        fontColor:{
            main:'#263238'
        },
        menuFontColor: {
            main: "#546e7a",
            selected:'#5850EC'
        },
        type: "light",
    },
    body: {
        backgroundColor: '#eeeeee'
    },
    direction: 'rtl',
    typography: {
        fontFamily: [
            'IRANSans-web',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        useNextVariants: true,
    },
    overrides: {
        MuiSvgIcon: {
            root: {
                fontSize: 16
            }
        },
        MuiChip: {
            root: {
                color: 'inherit',
                fontSize: '0.75rem'
            },
            outlined: {
                backgroundColor: '#b3cde0'
            }
        },
        MuiToolbar: {
            regular: {
                minHeight: '49px !important'
            }
        },
        MuiListItem: {
            root: {
                paddingTop: '3px',
                paddingBottom: '3px',
            },
            button: {
                paddingRight: '0px',
                // hover menu item of sidebar
                '&:hover': {
                    backgroundColor: "#337ab786",
                    borderRadius: '5px 0 0 5px',
                    margin: 0,
                    width: '98%',
                },
            },
            gutters: {
                paddingLeft: '5px !important'
            }
        },
        MuiListItemText: {
            root: {
                padding: 0,
                paddingBottom: 7,
            }
        },
        MuiExpansionPanelSummary: {
            root:{
                minHeight:'2px',

            },
            expanded:{
                minHeight:'2px !important',
                margin:'2px 0px !important'
            },
            expandIcon: {
                right: 'auto',
                left: '5px',
            }
        },
        MuiExpansionPanel: {
            root: {
                '&:before': {
                    backgroundColor: '#eeeeee',
                },
            },
            expanded: {
                backgroundColor: "inherit",
                color: "inherit",
            },
            rounded: {
                borderBottomRightRadius: '0px !important',
                borderBottomLeftRadius: '0 !important',
            }

        },
        MuiExpansionPanelDetails:{
            root:{
                padding:' 1px',
            }
        },
        MuiTypography: {
            body1: {
                //text item in sidebar
                color: "grey[800]",
                fontSize: '11px',
                fontWeight: 'bold'
            },
            alignCenter: {
                fontSize: "0.85rem"
            },
            body2: {
                color: "inherit",
                fontSize: "10px",
                lineHeight: '2'
            }, subtitle1: {
                fontSize: '0.85rem',
                color: '#ffffff'
            }, h4: {
                fontSize: '1.3rem',
            }, h3: {
                fontSize: '1.2rem',
            }, h5: {
                color: 'inherit',
                fontSize: '1rem'
            }, h6: {
                color: '#263238',
                fontSize: '0.75rem',
                fontWeight: 'bold',
            }
        },
        MuiTab: {
            //Tab in sidbar

            root: {
                '&:hover': {
                    color: "#000000",
                    backgroundColor: "#337ab7"
                },
                fontSize: '11px'
                , backgroundColor: "#3b5998"
            },
            labelIcon: {
                paddingTop: 0,
                minHeight: '55px'
            },
            labelContainer: {
                paddingTop: '0px !important',
                paddingBottom: '0px !important',
            }
        },
        MuiDrawer: {
            root: {
                position: 'absolute',
            },
            paperAnchorDockedRight: {
                width: 225
            },
            paper: {
                //backgroundColor: '#18202c',
                //backgroundColor: '#f4f6f8',
                backgroundColor: '#ffffff',
                color:'#263238',
            },


        },
        MuiTableCell: {
            root: {
                padding: '0 4px',
                textAlign: "center"
            },
            body: {
                fontSize: '11px'
            },
            head: {
                fontSize: '0.7rem',
                height: 60
            },
        },
        MuiTablePagination: {
            caption: {
                fontSize: '11px'
            }
        },
        MuiIconButton: {
            root: {
                color: 'inherit',
                padding: 2,
                //margin: '0 12px'
                margin: '0 2px'
            },
        },
        MuiPickersToolbar: {
            root: {
                height: "auto",
                padding: "8px",
            }
        },
        MuiPickersYear: {
            root: {
                color: "#580dcc",
            },
            '&$selected': {
                backgroundColor: "#4ec4f7"
            }
        },
        MuiPickerDTHeader: {
            hourMinuteLabel:{
                top:-15
            }
        },
        MuiButton: {
            root: {
                color: 'inherit',
                padding: "0 16px",
                minHeight: 24,
                backgroundPosition: 'left',
                minWidth: 32,
                margin: '12px 16px 8px'

            },
            containedPrimary: {
                color: '#009ce6',
                border: '1px solid #009ce6',
                backgroundColor: '#e6f5fc',
                '&:hover': {
                    backgroundColor: '#009ce6',
                    color: '#ffffff',
                    transition: 'all 0.5s ease'
                },
            },
            containedSecondary: {
                color: '#e6f5fc',
                borderColor: '#3f51b5',
                backgroundColor: '#3f51b5',
                '&:hover': {
                    backgroundColor: '#3f51b5',
                    color: '#ffffff',
                    transition: 'all 0.5s ease'
                },
            },
            contained: {
                color: '#009ce6',
                borderColor: '#009ce6',
                backgroundColor: '#e6f5fc',
                boxShadow: 'none'
            },
            outlinedPrimary: {
                color: '#3f51b5',
                borderColor: '#3f51b5',
                backgroundColor: '#ffffff',
                '&:hover': {
                    backgroundColor: '#3c4ea7',
                    color: '#ffffff',
                    transition: 'all 0.5s ease'
                },
            },
            outlinedSecondary: {
                color: '#e10050',
                borderColor: '#e10050',
                backgroundColor: '#ffffff',
                '&:hover': {
                    backgroundColor: '#d1004e',
                    color: '#ffffff',
                    transition: 'all 0.5s ease'
                },
            },
            label: {
                fontSize: 10,
                fontFamily: 'IRANSans-web',
            },
            sizeSmall: {
                padding: "0 4px",
                fontSize: 9
            },
            sizeLarge: {
                padding: '4px 12px'
            }

        },
        MuiButtonBase:{
            root:{
                justifyContent:'none'
            }
        },
        MuiAvatar: {
            colorDefault: {
                backgroundColor: "#ffffff",
            },
        },
        MuiDialog: {
            paper: {
                backgroundColor: "white",
                overflowY: 'inherit',
                scrollbarWidth:'thin',
            }, container: {
                backgroundColor: "#0000006b",
            }
        },
        MuiDialogTitle: {
            root: {
                //backgroundColor: grey[800],
                backgroundColor: 'white',
                padding: "16px 24px"
            }
        },
        MuiDialogContent: {
            root: {
                margin: 0,//"16px 16px 16px 16px",
                padding: "16px",
                backgroundColor: '#FFFFFF',
                //borderRadius: 4
            }
        },
        MuiDialogAction: {
            root: {
                margin: 0,
                padding: "16px",
                backgroundColor: 'white',
                display:'flex',
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: 11
            }
        },
        MuiFab: {
            root: {
                boxShadow: '0'
            },
            extended: {
                height: 34
            }
        },
        MuiCardHeader: {
            root: {
                padding: '8px'
            }, title: {
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: '#263238'
            }, action: {
                marginTop: 0,
                color:'black'
            }, avatar: {
                marginRight: "auto",
                marginLeft: 5,
            }
        },
        Pagination: {
            activeButton: {
                color: '#009ce6',
                backgroundColor: '#e6f5fc !important'
            }
        },
        MuiCardContent: {
            root: {
                padding: 0,
                paddingBottom: '2px !important'
            }
        },
        MuiTableSortLabel: {
            root: {
                //color: "#009ce6",
                color: '#263238',
                alignContent:'center',
            },
        },
        MuiInputLabel: {
            root:{
                '&:outlined': {
                    transform: 'translate(12px, 12px) scale(1)',
                    color: "#666', // !important",
                    fontSize: 11,
                },
                focused: {
                    color: '#009ce6 !important',
                    fontSize: 11
                }
            },
            shrink: {
                top: 0,
                padding: '0px 8px',
                color: "#666",
                fontSize: '1rem'
            },
            // add by Mohsen

            formControl: {
                top: -8,
            },

        },
        MuiOutlinedInput: {
            input: {
                padding: '0 12px',
                backgroundColor: '#fafafa ',
                //color: '#009ce6'
            },
            notchedOutline: {
                border: '1px solid',
                color: '#e6e6e6',
            },
            root: {
                borderColor: '#e6e6e6 !important',
                backgroundColor: '#fafafa',
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    //border: "1px solid !important",
                    borderColor: "#89d1f3 !important",
                },
                '&$focused $notchedOutline': {
                    //borderColor: "#009ce6",
                    borderWidth: 1,
                    boxShadow: '0 0 8px #009ce680',
                }
            },
            inputAdornedEnd: {
                paddingRight: 8
            }

        },
        MuiPrivateNotchedOutline: {
            root: {
                borderWidth: 0,
            },
            legend: {
                textAlign: "-webkit-auto"
            }
        },
        MuiListItemIcon: {
            root: {
                color: 'none',
                display: 'inline',
                margin: '2px 8px',
                marginRight: 12
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: '0.75rem',
                color: '#9c9c9c',
                "&$focused": {
                    borderColor: "#009ce6",
                    color: '#009ce6 !important'
                },
            },

        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '0'
                },
                '&:after': {
                    borderBottom: '0'
                },

            }
        },
        MuiSelect: {
            root: {
                padding: 8,
            },
            selectMenu: {
                padding: '8px 12px',
            },
            icon: {
                right: 8,
                top: 'calc(50% - 10px)'
            }, select: {
                paddingRight: 24,
                height:17,
            }, outlined: {
                width: 'calc(100% - 32px)'
            }
        },
        MuiTableRow: {
            root: {
                height: 60
            },
            head: {
                height: 40,
                borderBottom: "1px solid #c7c7c7"
            }
        },
        MuiInputBase: {
            root: {
                color: 'inherit',
                lineHeight: '0.85em',
                '&$disabled':{
                    backgroundColor:"#dedede !important",
                    color:'#333 !important',
                    cursor:"no-drop"
                }
            },

            input: {
                height: 32,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'vazir',
                color: '#666'
            },
            inputType: {
                height: 'none'
            },
            fullWidth: {
                width: '97%'
            }

        },
        MuiAppBar: {
            colorPrimary: {
                //backgroundColor: '#009ce6'
                backgroundColor: '#3f51b5'
            }
        },
        MuiStepIcon: {
            root: {
                width: '2em',
                height: '2em'
            }
        },
        MuiMobileStepper: {
            root: {
                padding: 8
            },
            dot: {
                backgroundColor: '#ddd'
            },
            dotActive: {
                backgroundColor: '#009ce6'
            }
        },
        MuiPaper: {
            root: {
                borderRadius: 0
            },
            elevation2: {
                boxShadow: "0px 0px 5px #C7C7C7"
            }, elevation24: {
                boxShadow: '0'
            },
            elevation1: {
                boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.1)"
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }
        },
        MuiLink: {
            underlineHover: {
                '&:hover': {
                    textDecoration: 'none',
                    color: '#009ce6',
                    cursor: "pointer",
                    transition: 'all 0.5s ease'
                }
            }
        },
        MuiFormControlLabel: {
            root: {
                marginTop: 12,
                marginRight: 16,
                marginLeft: 16
            }
        },
        MuiFormControl: {
            fullWidth: {
                width: '98%'
            }
        },
        MuiSnackbarContent: {
            message: {
                fontSize: 11,
                fontWeight: 'bold'
            },
            action: {
                paddingLeft: 8
            }
        },
        MuiInputAdornment: {
            root: {
                color: "#009ce6"
            }
        },
        MuiBadge: {
            badge: {
                height: 16,
                fontSize: '0.7rem'
            }
        },
        MuiDrawerpaper:{
            AnchorLeft:{
                overflowX:'hidden',
                overflowY:'auto',
            }

        }
    }
});
