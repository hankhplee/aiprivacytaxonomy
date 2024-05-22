import * as React from 'react';
import './navbar.css'; // Assuming you have a separate CSS file for styling the navbar
import { Link } from 'react-router-dom';
import SideBar from './taxonomy_pages/sidebar'
import SideBarMobile from './taxonomy_pages/sidebar_mobile'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





const NavbarSidebar = () => {
    const [open, setOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <div>
    <div className="navbar">
      <div className="left">
        {isMobile && 
        <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: 'white' }}/>
        </IconButton>
        }
        <Link to="/aiprivacytaxonomy" className="title-link">
          <div className="brand">AI Privacy Taxonomy</div>
        </Link>
      </div>
      <div className="right">
        <Link to="/aiprivacytaxonomy" className="link">Home</Link>
        <Link to="/methods" className="link">Methods</Link>
        <Link to="/publication" className="link">Publication</Link>
      </div>
    </div>
    
    <Drawer open={open} onClose={toggleDrawer(false)}>
        <SideBarMobile/>
    </Drawer>
    
    </div>
  );
}

export default NavbarSidebar;