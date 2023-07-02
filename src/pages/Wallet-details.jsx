
import React, { useEffect, useState } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Lock from "../images/lock.svg"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  '&:hover': {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0.4px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


export default function WalletDetails() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const deviceKey = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
  const datatoken = localStorage.getItem("token")
  const token = `Bearer ${datatoken}`;







  useEffect(() => {


    const fetchCoinData = async () => {

        const searchParams = new URLSearchParams(window.location.search);
      const walletId = searchParams.get("id");

      const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/wallet/${walletId}`;
  
  
      const headers = {
      'Authorization': token,
      'X-DeviceKey': deviceKey,
      };
      
      axios.get(url, { headers })
      .then(response => {
      setData(response.data.result[0]);
      })
      .catch(error => {
      console.error('GET request failed:', error);
      });
    
    };
  
    fetchCoinData();

  

      



  }, []);


  return (

    <div className='dash'>
    <DashNav />
    <div className="dash-big">
          <div className="title">
            <div className="head">
            Wallets
            </div>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search User…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>

            <div className="wallet-details">
               <h2>Wallet Details</h2>
               <div className="data">
                <div className="data-info">
                Name:
                </div>
                <div className="data-label">
                {data.wallet_name}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Account Number:
                </div>
                <div className="data-label">
                {data.account_number}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Phone Number:
                </div>
                <div className="data-label">
                {data.phone_number}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Email address:
                </div>
                <div className="data-label">
                {data.user_email}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                BVN Number:
                </div>
                <div className="data-label">
                {data.bvn}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Date of Birth:
                </div>
                <div className="data-label">
                {data.birth_date}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Available Balance:
                </div>
                <div className="data-label">
                {data.balance}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Book Balance:
                </div>
                <div className="data-label">
                {data.book_balance}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Status:
                </div>
                <div className="data-label">
                {data.on_hold_text}
                </div>
               </div>

               <button style={{width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"16px",gap:"10px",padding:"13px 20px",color:"white",background:"#BA4444",borderRadius:"8px",border:"none"}} >
                    <img src={Lock} alt="" /> Deactivate Account
               </button>

            </div>



          </div>
    </div> 












    
  );
}
