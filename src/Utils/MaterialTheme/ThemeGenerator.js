import RalewayWoff2 from 'assets/fonts/Ralisto.ttf.woff';
import {createMuiTheme} from "@material-ui/core";
import {grey, lime} from '@material-ui/core/colors';

/**
 * font face a font
 * @type {{fontFamily: string, fontStyle: string, fontDisplay: string, fontWeight: number, src: string, unicodeRange: string}}
 */
const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
/**
 * generate Material-ui Theme
 * @type {Theme}
 */
export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Raleway',
            '-apple-system',
        ].join(','),
        useNextVariants: true,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [raleway],
            },
        },
    },

    palette: {
        primary: {
            main: '#3b5998'
        },
        secondary: {
            main: '#6497b1',
            light: '#ffcc5c',
            dark: "#9c9c9c"

        },
        error: {
            main: '#ee453e'
        },
        common: {
            white: "#ffffff",
        },
        type: "light",
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
            }, button: {
                paddingRight: '0px',
                // hover menu item of sidebar
                '&:hover': {
                    backgroundColor: "#337ab786",
                    borderRadius: '5px 0 0 5px',
                    margin: 0,
                    width: '98%',
                },
            }
        }, MuiListItemText: {
            root: {
                padding: 0,
            }
        },
        //add by Mohsen
        MuiExpansionPanelSummary: {
            expandIcon: {
                right: 'auto',
                left: '8px',
            }
        },
        MuiExpansionPanel: {
            expanded: {
                backgroundColor: "inherit",
                color: "inherit",
            }
        },
        MuiTypography: {
            body1: {
                //text item in sidebar
                color: "grey[800]",
                fontSize: 11,
                fontWeight: 'bold'
            },
            body2: {
                color: "inherit",
                fontSize: "12px"
            }, subtitle1: {
                fontSize: '0.85rem',
                color: '#ffffff'
            }, h5: {
                color: 'inherit',
                fontSize: '1rem'
            }, h6: {
                color: '#fffafe',
                fontSize: '0.75rem',
                fontWeight: 'bold'
            }
        }, MuiTab: {
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
        }, MuiDrawer: {
            root: {
                position: 'absolute',
            },
            paperAnchorDockedRight: {
                width: 225
            },
            paper: {
                backgroundColor: '#18202c',
            },


        }, MuiTableCell: {
            root: {
                padding: '0 4px',
                textAlign:"center"
            },
            body: {
                fontSize: '0.7rem'
            },
            head: {
                fontSize: '0.7rem',
                height: 40
            },
        },
        MuiTablePagination:{
            caption:{
                fontSize:'0.65rem'
            }
        }
        , MuiIconButton: {
            root: {
                color: 'inherit',
                padding: 2,
                margin: '0 12px'
            },
        },
        // begin changed by Mohsen
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
                color: '#009ce6',
                borderColor: '#009ce6',
                backgroundColor: '#e6f5fc',
                '&:hover': {
                    backgroundColor: '#009ce6',
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
            label: {
                fontSize: 12,
            },
            sizeSmall: {
                padding: "0 4px",
                fontSize: 9
            },sizeLarge:{
                padding:'4px 12px'
            }
            // end changed by Mohsen
        }, MuiAvatar: {
            colorDefault: {
                backgroundColor: "#ffffff",
            },
        }, MuiDialog: {
            paper: {
                backgroundColor: "#ffffff00",
                overflowY: 'inherit'
            }, container: {
                backgroundColor: "#0000006b"
            }
        }, MuiDialogTitle: {
            root: {
                backgroundColor: grey[800],
                padding: "15px 15px 15px"
            }
        }, MuiDialogContent: {
            root: {
                backgroundColor: '#f8fafc',
                borderRadius: 4
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: 11
            }
        },
        MuiFab: {
            root:{
                boxShadow:'0'
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
                color: '#009ce6'
            }, action: {
                marginTop: 0
            }, avatar: {
                marginRight: "auto",
                marginLeft: 5,
            }
        },
        Pagination:{
            activeButton: {
                color: '#009ce6',
                backgroundColor: '#e6f5fc !important'
            }
        },
        MuiCardContent: {
            root: {
                padding: 0
            },
            Pager: {
                marginTop: '8px',
                justifyContent: 'center'

            },
        }, MuiTableSortLabel: {
            root: {
                color: "#009ce6"
            },
        }
        // begin change by Mohsen
        , MuiInputLabel: {
            shrink: {
                top: 0,
                padding: '0px 8px',
                color: "#666"
            },
            // add by Mohsen
            '&:outlined': {
                transform: 'translate(12px, 12px) scale(1)',
                color: "#666', // !important",
                fontSize: 11,
            },
            formControl: {
                top: -8,
            },
            focused: {
                color: '#009ce6 !important',
                fontSize: 11
            }
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
                    border: "1px solid !important",
                    borderColor: "#89d1f3 !important",
                },
                '&$focused $notchedOutline': {
                    borderColor: "#009ce6",
                    borderWidth: 1,
                    boxShadow: '0 0 8px #009ce680',
                }
            },
            inputAdornedEnd: {
                paddingRight: 8
            }

        },
        // end change by Mohsen
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
        }, MuiFormLabel: {
            root: {
                fontSize: '0.75rem',
                color: '#9c9c9c'
            },
            focused: {
                borderColor: "#009ce6",
                color: '#009ce6 !important'
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
            },select:{
                paddingRight:24
            },outlined:{
                width:'calc(100% - 32px)'
            }
        },
        MuiTableRow: {
            root: {
                height: 35
            },
            head: {
                height: 40,
                borderBottom: "1px solid #c7c7c7"
            }
        }
        //begin change by Mohsen
        , MuiInputBase: {
            root: {
                color: 'inherit',
                lineHeight: '0.85em',
            },
            disabled:{
                backgroundColor:"#dedede !important",
                color:'#333 !important',
                cursor:"no-drop"
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
            fullWidth:{
                width:'97%'
            }

        },
        //end change by Mohsen
        //add for menu by ehsan
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#009ce6'
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
        MuiFormControl:{
            fullWidth:{
                width:'98%'
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
        }
    }    

});
