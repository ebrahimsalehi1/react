import {createStyles} from '@material-ui/core/styles'

export const useStyles = createStyles(theme=>({
    outCome: {
        margin: '0 5px',
        fontSize: 11,
    }, 
    outComeAccept: {
        backgroundColor: "#f1fbe8",
        color: "#7fd41b",
        border: "1px solid #7fd41b",
        '&:hover': {
            backgroundColor: "#f1fbe8",
            boxShadow: "0 0 8px #7fd41b"
        },
    }, 
    outComeReject: {
        color: "#ffba1d",
        border: "1px solid #ffba1d",
        backgroundColor: "#f9f0dc",
        '&:hover': {
            backgroundColor: "#f9f0dc",
            boxShadow: "0 0 8px #ffba1d"
        },
    }, 
    fabIcon: {
        //marginDense: theme.spacing.unit,
    },     
  }))

