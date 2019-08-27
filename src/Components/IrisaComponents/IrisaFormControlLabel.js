import Recat from 'recat';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function IrisaFormLabel(props){
    const { ...others } = props
    return (
        <FormControlLabel
        {...others}
        />
    )
}

export default IrisaFormLabel
