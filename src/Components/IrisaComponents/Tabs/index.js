
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {
    Done,
    GroupWork,
    Cancel
} from '@material-ui/icons';
import Dialog from '@irisa/components-Boot-v.3/lib/Dialog';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import IconContactMail from '@material-ui/icons/ContactMail';
import IconRecentActors from '@material-ui/icons/RecentActors';
import IconCheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import IconEdit from '@material-ui/icons/Edit';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',//theme.palette.background.paper,
    },
    button:{
        margin: theme.spacing.unit,
        textAlign:'start',
        alignItems: 'flex-start',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 3,
        right: theme.spacing.unit * 3,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
    }
    }
    );

const MyTab = withStyles(({
    root:{
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },

        textTransform: 'initial',
        minWidth: 72,
        fontWeight: 4,
        marginRight: 4 * 4,
    },
    wrapper:{
        flexDirection: 'row',
        display: 'inline-block',
        width:'200px',
    },
    labelContainer:{
        //width:'70%',
        fontSize:'10px',
        padding: 0,
        margin: 0,
    }
}))(Tab);

export default function Tabs(){
    return (
            <Tabs
            value={value}
            onChange={handleChange}
            //indicatorColor="primary"
            //textColor="primary"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            >
            <MyTab label={"مغایرت کاربران" } icon={<IconContactMail />} />
            <MyTab label={"مغایرت شرح واحد" } icon={<IconRecentActors />}  />
            <MyTab label={"مغایرت شرح پست" } icon={<IconRecentActors />}  />
            <MyTab label={"مغایرت شرح شغل" } icon={<IconRecentActors />}  />
            </Tabs>
    )
}
