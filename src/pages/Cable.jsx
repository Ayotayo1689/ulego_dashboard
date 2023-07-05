
import React, { useEffect, useState } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoadingModal from '../components/LoadingModal';
import SessionModal from '../components/SessionModal';

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


export default function Cable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [apiErr, setApiErr] = useState(false);

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    // window.location.href = `/wallets/details/id=${id}`;
    navigate(`/cable_subscription/details?id=${id}`);
  };
  const deviceKey = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
  const datatoken = localStorage.getItem("token")
  const token = `Bearer ${datatoken}`;





  useEffect(() => {
    const fetchCoinData = async () => {

      const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/transactions/cabletv';


      const headers = {
      'Authorization': token,
      'X-DeviceKey': deviceKey,
      };
      
      axios.get(url, { headers })
      .then(response => {
   
      setData(response.data.result);
       setLoading(false)
     
      })
      .catch(error => {
        setLoading(false)
        setApiErr(true)
      // console.error('GET request failed:', error);
      });
    
    };

    fetchCoinData();
  }, []);

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (

    <div className='dash'>
        {apiErr ? <SessionModal/> : ""}
    <DashNav />
    <div className="dash-big">
          <div className="title">
            <div className="head">
            Cable TV Subscription
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


          <table  border="0" width="100%" style={{background:'#fff',borderRadius:"10px", paddingTop:"0"}}>
  <tr>
   <td>
   <div className="table-data">
     <table width="100%" style={{ border:"0px",borderCollapse:"collapse",textAlign:"start", position:"relative"}}>
     <tr  style={{background:'#D6FFFD', height:"40px", border:"none",borderCollapse:"collapse", fontSize:"14px"}}> 
          <th style={{background:'#D6FFFD', border:"none",borderCollapse:"collapse",textAlign:"start",paddingLeft:"20px"}} >Service Description</th>
          <th style={{textAlign:"start"}}>Sender </th>
          <th style={{textAlign:"start"}}>Beneficiary Name </th>
          <th style={{textAlign:"start"}}>Smart Card Number</th>
          <th style={{textAlign:"start"}}>Satus</th>
          <th style={{textAlign:"start"}}>Amount</th>
          <th style={{textAlign:"start"}}>Date</th>
     </tr>
       {
        loading ? <LoadingModal/> : <> {currentItems.map((wallet, index )=> (
         
          <tr key={index} className="coin tableHover"onClick={() => handleRowClick(wallet.reference)} >
       <td style={{paddingLeft:"0px",paddingLeft:"0px",display:"flex",alignItems:"center",gap:"6px"}}><img src={wallet.service_logo} alt={"bundle logo"} width={"20px"} style={{borderRadius:"50%"}} />{wallet.service_description}</td>
      <td style={{paddingLeft:"0px"}}>{wallet.from_account_name}</td>
      <td style={{paddingLeft:"0px",marginLeft:"20px"}}>{wallet.beneficiary_name}</td>
      <td style={{paddingLeft:"0px",marginLeft:"20px"}}>{wallet.beneficiary_smart_card_number}</td>
      <td style={{paddingLeft:"0px",marginLeft:"20px"}}>{wallet.transaction_state_text}</td>
      <td style={{paddingLeft:"0px",marginLeft:"20px"}}>{wallet.amount}</td>
      <td style={{paddingLeft:"0px",marginLeft:"20px"}}>{wallet.date_text}</td>
    </tr>
    
      ))}</>
       }
      
      </table>
     </div>
    </td>
   </tr>
 </table>


        <div className="pagination" style={{fontWeight:"500"}}>
        
        <p>Page</p>
        <div className=""><span style={{border:"1px solid green", padding:"5px 30px", borderRadius:"3px"}}>{currentPage * itemsPerPage }</span> of {data.length}</div>
        
        <button className='next-prev' style={{display:"flex",justifyContent:"center",alignItems:"ceter",background:"#134E4A", border:"none",padding:"5px 0 5px 10px"}}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBackIosIcon style={{ color: 'white' }} />
        </button>
        
        <button className='next-prev' style={{display:"flex",justifyContent:"center",alignItems:"ceter",background:"#134E4A", border:"none",padding:"5px"}}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
        >
         <ArrowForwardIosIcon style={{ color: 'white' }} />
        </button>
        </div>
      </div>
    </div> 





      //   </div>
      // </div>










    
  );
}
