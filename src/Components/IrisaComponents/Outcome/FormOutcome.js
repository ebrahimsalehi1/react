import React from 'react'
import {Clear,Done} from '@material-ui/icons'
import IrisaOutcome from './IrisaOutcome'
import {useStyles} from './style'

export default function FormOutcome(props){

    const classes = useStyles()
    console.log('FormOutcome',classes)

    return (
        <div>
            Here you can see IrisaOutcome component ...
            <br />
            <hr />
            <IrisaOutcome className={classes.outComeAccept}
            onClick={()=>{console.log('click on fab')}}
            >
                 <Done  className={classes.fabIcon}/> Test
            </IrisaOutcome>

            <p onClick={()=>{
                console.log('onClick here is active !!!')
            }}>Test is comming</p>

        </div>
    )
}
