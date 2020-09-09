import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Tune from "@material-ui/icons/Tune";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    padding: "16px"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));
/*
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
*/

const strVariant = "standard";

export default function ObieeApperance() {
  const [isDirectionRight, setIsDirectionRight] = React.useState(true);
  const [isThemeLight, setIsThemeLight] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [variant, setVariant] = React.useState("standard");

  const handleChangeVariant = (event, newAlignment) => {
    console.log(newAlignment);
    setVariant(newAlignment);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <Tune />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Appearance</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isDirectionRight}
                  onChange={(e) => setIsDirectionRight(!isDirectionRight)}
                  name="gilad"
                />
              }
              label={isDirectionRight ? "right" : "left"}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={isThemeLight}
                  onChange={(e) => setIsThemeLight(!isThemeLight)}
                  name="jason"
                />
              }
              label={isThemeLight ? "light" : "dark"}
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}

          <ToggleButtonGroup
            size="small"
            value={variant}
            exclusive
            onChange={handleChangeVariant}
          >
            <ToggleButton value="filled">filled</ToggleButton>
            <ToggleButton value="outlined">outlined</ToggleButton>
            <ToggleButton value="standard">standard</ToggleButton>
          </ToggleButtonGroup>

          {/* <Button 
        variant="contained" 
        color="primary" 
        size="small"
        onClick={handleClose}
        >Apply</Button> */}
        </FormControl>
      </StyledMenu>

      <br />
      <TextField variant={strVariant} />

      <br />

      {/* <Select variant={variant} value="0">
        <MenuItem value="0">zero</MenuItem>
        <MenuItem value="1">one</MenuItem>
        <MenuItem value="2">two</MenuItem>
        <MenuItem value="3">three</MenuItem>
      </Select> */}

      <br />
      <br />
    </div>
  );
}
