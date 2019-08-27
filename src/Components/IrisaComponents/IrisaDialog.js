import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
//import {styles} from '../../assets/jss/style'
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";
//import DialogActions from "@material-ui/core/DialogActions";
import {DialogTitle,DialogContent,DialogActions} from '@material-ui/core';

function IrisaDialog(props) {

        const {classes, eventClose, maxWidth,
            openModal,title,children,fullScreen,
            TransitionComponent,actionBar} = props;
        return (
            <div>
                <Dialog
                    onClose={eventClose}
                    aria-labelledby="customized-dialog-title"
                    open={openModal}
                    fullScreen={fullScreen}
                    maxWidth={maxWidth}
                    //TransitionComponent={TransitionComponent?Transition:null}
                >
                    <DialogTitle id="customized-dialog-title" onClose={eventClose}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        {children}
                        {actionBar!=null?
                            <DialogActions className={classes.dialogAction}>
                                {actionBar}
                            </DialogActions>:null}
                    </DialogContent>

                </Dialog>
            </div>

        );    
}

IrisaDialog.propTypes = {
    //classes: PropTypes.object.isRequired,
    eventClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    fullScreen:PropTypes.bool,
    TransitionComponent:PropTypes.bool,
    actionBar:PropTypes.node
};
//export default withStyles(styles)(IbxDialog);
export default (IrisaDialog);
