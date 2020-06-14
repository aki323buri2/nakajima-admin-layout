import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader'; 
import AdminDrawer from '../components/AdminDrawer'; 
import AdminFooter from '../components/AdminFooter';
import {
  makeStyles, 
} from '@material-ui/core'; 


const useStyles = makeStyles(theme => {
  const headerHeight = theme.mixins.toolbar.minHeight;
  const drawerWidth = open => open ? 200 : theme.spacing(7); 
  const transition = theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp, 
    duration: theme.transitions.duration.enterScreen, 
  });
  
  return {
    header: {
      transition, 
      width: open => `calc(100vw - ${drawerWidth(open)}px)`, 
    }, 
    drawer: {
      transition, 
      width: open => drawerWidth(open), 
      whiteSpace: 'wordwrap', 
      overflowY: 'hidden', 
    }, 
    footer: {}, 
    main: {
      transition, 
      marginTop: headerHeight, 
      marginLeft: open => drawerWidth(open), 
      padding: theme.spacing(1), 
      minHeight: `calc(100vh - ${headerHeight * 2}px)`, 
    }, 
  };
});

const AdminLayout = ({
  title, 
  children, 
  gitUrl, 
}) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles(open);
  const toggleOpen = () => {
    setOpen(!open);
  };
  
  return (
    <div>

      <AdminHeader 
        className={classes.header} 
        title={title} 
        menuClick={toggleOpen} gitUrl={gitUrl}
      />

      <AdminDrawer className={classes.drawer} />
      
      <main className={classes.main}>
        {children}
      </main>
      
      <AdminFooter className={classes.footer} />
    
    </div>
  )
}

export default AdminLayout
