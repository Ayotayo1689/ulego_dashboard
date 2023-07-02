import{ useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { NavLink, useNavigate } from 'react-router-dom';
import "./nav.css"
import Logo from "../images/sidebarlogo.svg"
import LogoutIcons from "../images/logoutIcon.svg"

import SideBarLink from "./sidebar"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  padding: "10px 20px",
  bgcolor: 'background.paper',
//   border: 'none',
display:"flex",
flexDirection:"column",
gap:"20px",
  borderRadius:"8px",
  boxShadow: 24,
  p: 4,
};

const DashNav = () => {

  const navigate = useNavigate()

  const logOut = ()=>{
    navigate('/')
  }
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [navOpened, setNavOpened] = useState(false)
    const navOpen =()=>{
        setNavOpened(!navOpened)
    }
  return (
   <>
    <div className={"dash-nav"} style={{flex:"1",height:"100vh"}} >
        <img src={Logo} alt="" />
     {SideBarLink.map((item, index)=>{
      return(
        <NavLink 
        className={"inactive"}
        key={index}
         activeClassName="active"
          to={item.path} 
         style={{
          // height:"15px",
          fontSize:"16px",
          display:"flex",
          // justifyContent:"center",
          // alignItems:"center",
          gap:"10px"}}>
             <img src={item.icon} alt="" /> {item.title}
             </NavLink>
      )
     })}
      <div style={{fontSize:"16px",width:"90%"}} className="Link" onClick={handleOpen}> <img src={LogoutIcons} alt="" /> Logout</div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are you sure you want to log out?
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ m: "auto" }}>
          <Button onClick={logOut} >YES</Button>
          <Button keepMounted
        open={open}
        onClick={handleClose}>NO</Button>
          </Typography>
        </Box>
      </Modal>
    {/* </div> */}
    </div>
    <div className="dash-ham" onClick={navOpen}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>    
    </div></>
  )
}

export default DashNav