import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import {Language} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import '../config/i18next';
import {useTranslation} from 'react-i18next';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const countries = [
  { code: "US",lang:"en", label: "United States", phone: "1", suggested: true },
  { code: "IR",lang:"fa", label: "Iran, Islamic Republic of", phone: "98",suggested: false },
  { code: "DE",lang:"ge", label: "Germany", phone: "49", suggested: false },
];

export default function ButtonLanguage(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleMenuItemClick = (e,nam) => {
  //     console.log('handleMenuItemClick',e,nam);      
  // }

  const { i18n } = useTranslation();
  // const handleChangeLanguage= (lang) => {
  //     i18n.changeLanguage(lang);
  // }

  return (
    <div>
        <IconButton 
            color="inherit"
            style={{marginLeft: '950px'}}
            onClick={handleClick}>
                  <Language/>
        </IconButton>
     
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      {
        countries.map(item => (
          <StyledMenuItem onClick={e=>{
              i18n.changeLanguage(item.lang);
          }}>
            <ListItemIcon>
                <SendIcon fontSize="small" />
            </ListItemIcon> 
            <ListItemText>{item.label}</ListItemText>
          </StyledMenuItem>
        ))
      }
      </StyledMenu>

    </div>
  );
}
