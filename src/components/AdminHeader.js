import React from 'react';
import clsx from 'clsx'; 
import {
  makeStyles, AppBar, Toolbar, IconButton, Typography, MenuItem, ListItemText, 
} from '@material-ui/core'; 
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withTooltip } from '../Providers/MuiProvider';

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const AdminHeader = ({
  className, 
  title, 
  gitUrl, 
  menuClick, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);

  return (
    <AppBar className={classes.root} {...other}>
      <Toolbar>
        <Icon icon={<MenuIcon />} title="メニュー" edge="start" onClick={menuClick} />
        <Logo title={title} />
        <Spacer />
        <Icon icon={<GitHubIcon/>} title="Gitリポジトリ" edge="end" href={gitUrl}/>
      </Toolbar>
    </AppBar>
  )
}

export default AdminHeader;

const Icon = ({
  icon, 
  title, 
  ...other 
}) => {
  return withTooltip(title)(
    <IconButton color="inherit" {...other}>
      {icon}
    </IconButton>
  );
};
const Logo = ({
  title, 
  ...other 
}) => {
  return (
    <Typography {...other}>
      <MenuItem>
        {title}
      </MenuItem>
    </Typography>
  );
};
const Spacer = () => {
  return (
    <div style={{ flexGrow: 1 }} />
  );
};

