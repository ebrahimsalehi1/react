import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core'
import {useStyles} from './style'

function IrisaButton(props){

    const {classes,variant,label} = props

    return (<Button
            //className={classes}
            className={"irisabutton"}
            variant={variant}
            data-testid={"IRISA_BUTTON"}
        >{label}</Button>
    )
}

IrisaButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(IrisaButton);
