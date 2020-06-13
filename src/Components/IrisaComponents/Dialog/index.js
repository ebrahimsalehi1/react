import React,{memo} from 'react';
import Dialog from '@material-ui/core/Dialog';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
//import MuiDialogTitle from '@material-ui/core/DialogTitle';
//import MuiDialogContent from '@material-ui/core/DialogContent';
//import {styles} from '../../assets/jss/style'
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";
//import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

/*
const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        textAlign:'center',
        margin: 0,
        padding: 0,//theme.spacing.unit*2,
        backgroundColor:'#009ce6',
        height:'20px'
    },
    closeButton: {
        position: 'absolute',
        right: '-2px',//theme.spacing.unit,
        top: '-2px',//theme.spacing.unit*2,
        color: theme.palette.common.white,
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <Close />
            </IconButton>
        </MuiDialogTitle>
    );
});
*/

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

// const DialogContent = withStyles(theme => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing.unit * 2,
//     },
// }))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
    },
}))(MuiDialogActions);

const PaperDialogContent = withStyles(({
    root:{
        paddingTop:"16px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "16px",
        margin: 0,
        overflowX: 'auto',
        overflowY: 'auto',
        maxHeight: '600px'
    }
}))(Paper);

/*
const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: 5,
        fontSize:11
    },
}))(MuiDialogContent);

const styles = {
    title:{
        display:"flex",
        padding: "16px",
        alignItems:"center",
    },
    footer:{
        display:"flex",
        padding: "8px",
        alignItems:"flex-end",
    }
};
*/
function Transition(props) {
    return <Slide direction="left" {...props} />;
}

class IbxDialog extends React.Component {

    render() {
        const {classes, eventClose, maxWidth,
            openModal,title,children,fullScreen,
            TransitionComponent,actionBar,onKeyDown,useOwnDialog,...others} = this.props;

        return (
                <Dialog
                    onClose={eventClose}
                    onKeyDown={onKeyDown}
                    aria-labelledby="customized-dialog-title"
                    open={openModal}
                    fullScreen={fullScreen}
                    maxWidth={maxWidth}
                    TransitionComponent={TransitionComponent?Transition:null}
                    {...others}
                >

                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        <Typography gutterBottom variant={"h5"}>
                            {title}
                        </Typography>
                    </DialogTitle>

                    <PaperDialogContent>

                        <muiDialogContent>

                            {children}

                        </muiDialogContent>

                        <DialogActions>
                            {actionBar}
                        </DialogActions>

                    </PaperDialogContent>


                </Dialog>

        );
    }
}

IbxDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    eventClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    fullScreen:PropTypes.bool,
    TransitionComponent:PropTypes.bool,
    actionBar:PropTypes.node
};
export default IbxDialog;
//export default withStyles(styles)(IbxDialog);


