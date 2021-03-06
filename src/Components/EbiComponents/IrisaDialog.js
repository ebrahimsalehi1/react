import React,{memo} from 'react';
import Dialog from '@material-ui/core/Dialog';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
//import {styles} from '../../assets/jss/style'
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import Divider from '@material-ui/core/Divider';

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

function Transition(props) {
    return <Slide direction="left" {...props} />;
}

class IrisaDialog extends React.Component {

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
                    <Card className={classes.title}>
                        <Typography gutterBottom variant={"h5"}>
                            {title}
                        </Typography>
                    </Card>


                    <DialogContent>
                        {children}

                        <Divider variant="middle" />
                        <Card className={classes.footer}>
                        <DialogActions className={classes.dialogAction}>
                            {actionBar}
                        </DialogActions>
                        </Card>

                    </DialogContent>

                </Dialog>

        );
    }
}

IrisaDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    eventClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    fullScreen:PropTypes.bool,
    TransitionComponent:PropTypes.bool,
    actionBar:PropTypes.node
};
export default withStyles(styles)(IrisaDialog);

// ------------------------------------------------------------------
// {(useOwnDialog===undefined || !useOwnDialog) &&
// <DialogTitle id="customized-dialog-title" onClose={eventClose}>
//     {title}
// </DialogTitle>
// }
// ------------------------------------------------------------------
// {actionBar!=null?
//     <DialogActions className={classes.dialogAction}>
//         {actionBar}
//     </DialogActions>:null}
// ------------------------------------------------------------------
