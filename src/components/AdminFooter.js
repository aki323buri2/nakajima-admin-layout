import React, { useState } from 'react';
import {
  makeStyles, BottomNavigation, BottomNavigationAction, 
} from '@material-ui/core'; 
import clsx from 'clsx'; 
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky', 
    bottom: 0, 
    boxShadow: theme.shadows[5], 
    width: 600, 
    margin: '0 auto', 
    zIndex: theme.zIndex.snackbar, 
  }, 
}));

const AdminFooter = ({
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);
  const [value, setValue] = useState();

  return (
    <BottomNavigation 
      className={classes.root} 
      showLabels 
      value={value}
      onChange={(e, value) => setValue(value)}
      {...other}
    >
      <BottomNavigationAction icon={<RestoreIcon/>} label="Restore" />
      <BottomNavigationAction icon={<FavoriteIcon/>} label="Favorite" />
      <BottomNavigationAction icon={<BookmarkIcon/>} label="Bookmark" />
      <BottomNavigationAction icon={<ThumbUpIcon/>} label="ThumbUp" />
      <BottomNavigationAction icon={<LocationOnIcon/>} label="LocationOn" />
    </BottomNavigation>
  )
}

export default AdminFooter
