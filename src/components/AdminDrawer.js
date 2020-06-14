import React from 'react';
import {
  makeStyles,
  Drawer,
  Toolbar, 
  Divider,
  List,
  MenuItem,
  ListItemIcon,
  ListItemText, 
} from '@material-ui/core';
import clsx from 'clsx'; 
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import { withTooltip } from '../Providers/MuiProvider';

const defaultItems = [
  {icon: <AddToHomeScreenIcon /> , title: 'スマートフォン', text: 'スマフォ', }, 
  {icon: <DesktopMacIcon />      , title: 'デスクトップ（Mac）', text: 'Mac', }, 
  {icon: <DesktopWindowsIcon />  , title: 'デスクトップ（Windows）', text: 'Windows', }, 
];

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[5], 
  }, 
}));


const AdminDrawer = ({
  className, 
  items = defaultItems, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);

  return (
    <Drawer 
      className={classes.root} 
      classes={{
        paper: classes.root, 
      }}
      open 
      variant="persistent"
      {...other}
    >
      <Toolbar />
      <Divider />

      <Items items={items} />

    </Drawer>
  )
}

export default AdminDrawer;

const Items = ({
  items, 
}) => {
  return (
    <List>
      {items.map((props, index) => (
        <Item key={index} {...props} />
      ))}
    </List>
  );
};
const Item = ({
  icon, 
  title, 
  text, 
}) => {
  return (
    <MenuItem>
      {withTooltip(title)(
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText>
        {text || title}
      </ListItemText>
    </MenuItem>
  );
};