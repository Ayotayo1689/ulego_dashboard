
import React, { useEffect, useState } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
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


export default function TransferDetails() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const deviceKey = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
  const datatoken = localStorage.getItem("token")
  const token = `Bearer ${datatoken}`;


  useEffect(() => {
    const fetchCoinData = async () => {

      const searchParams = new URLSearchParams(window.location.search);
    const reference = searchParams.get("id");

    const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/transactions/transfer/${reference}`;


    const headers = {
    'Authorization': token,
    'X-DeviceKey': deviceKey,
    };
    
    axios.get(url, { headers })
    .then(response => {
    console.log('GET request successful!');
    console.log(response.data.result[0])
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
            Transfers
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
               <h2>Transaction Details</h2>
               <div className="data">
                <div className="data-info">
                Sender Name:
                </div>
                <div className="data-label">
                {data.sender_account_name}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Sender Bank:
                </div>
                <div className="data-label">
                {data.sender_bank}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Sender Account:
                </div>
                <div className="data-label">
                {data.sender_account_number}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Beneficiary Name:
                </div>
                <div className="data-label">
               {data.beneficiary_name}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Beneficiary Bank:
                </div>
                <div className="data-label">
               {data.beneficiary_bank_name}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Beneficiary Account:
                </div>
                <div className="data-label">
                {data.beneficiary_account_number}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Amount:
                </div>
                <div className="data-label">
                {data.amount}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Transaction type:
                </div>
                <div className="data-label">
                {data.debit_or_credit_text}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Status:
                </div>
                <div className="data-label">
               {data.transaction_state == 1 ? "Completed":"Failed"}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Date:
                </div>
                <div className="data-label">
                {data.date_created}
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Reference:
                </div>
                <div className="data-label">
                {data.reference}
                </div>
               </div>

               {/* <button style={{width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"16px",gap:"10px",padding:"13px 20px",color:"white",background:"#BA4444",borderRadius:"8px",border:"none"}} >
                    <img src={Lock} alt="" /> Deactivate Account
               </button> */}

            </div>



          </div>
    </div> 












    
  );
}
