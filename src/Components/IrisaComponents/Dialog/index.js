import React,{useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogAction from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

function IrisaDialog(props){

    const {title,openModal,maxWidth,TransitionComponent,eventClose,children} = props;

    return(
        <div>
        {openModal && 
        <Dialog 
        open={true}
        //TransitionComponent={TransitionComponent}
        onClose={eventClose}
        maxWidth={maxWidth}
        >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>    
        </Dialog>
        }
        </div>
    )
}

export default IrisaDialog