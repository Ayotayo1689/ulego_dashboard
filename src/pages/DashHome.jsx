import React from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import "./DashApp.css";
import PieChartWithTooltip from '../components/PieChart';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid,  Tooltip} from "recharts";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';



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








const DashHome = () => {
  const [coinData, setCoinData] = useState([]);
  const [totalWallet, setTotalWallet] = useState("Loading...");
  const [totalBookBal, setTotalBookBal] = useState("998,643");
  const [totalAvailBal, setTotalAvailBal] = useState("Loading...");
  const [totalPoolBal, setTotalPoolBal] = useState("Loading...");
  const [totalSavings, setTotalSavings] = useState("538,690");

  const navigate = useNavigate();
 
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logOut = ()=>{
    localStorage.removeItem("token")
    navigate('/')
  }


  useEffect(() => {

    const deviceKey = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
const datatoken = localStorage.getItem("token")
const token = `Bearer ${datatoken}`;

    const fetchCoinData = async () => {

      const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/transactions/transfer';


      const headers = {
      'Authorization': token,
      'X-DeviceKey': deviceKey,
      };
      
      axios.get(url, { headers })
      .then(response => {
      console.log('GET request successful!');
      console.log(response)
      // setLoading(false)
      // setData(response.data.result);
      })
      .catch(error => {
        console.log(`this is error: ${error}`);
      //  setApiErr(true)
      });
    
    };

    fetchCoinData();



    const getTotalWallet = async ()=>{
  

  const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/reports/dashboard/total-wallet-count';


const headers = {
'Authorization': token,
'X-DeviceKey': deviceKey,
};

axios.get(url, { headers })
.then(response => {
// console.log('GET request successful!');
// console.log(response.data.result[0].wallet_count)
setTotalWallet(response.data.result[0].wallet_count);
})
.catch(error => {
setOpen(true)
});
}

getTotalWallet()



// const getTotalBookBal = async ()=>{
  

//   const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/reports/dashboard/total-wallet-count';


// const headers = {
// 'Authorization': token,
// 'X-DeviceKey': deviceKey,
// };

// axios.get(url, { headers })
// .then(response => {
// console.log('GET request successful!');
// // console.log(response.data.result[0].wallet_count)
// setTotalBookBal(response.data.result[0].wallet_count);
// })
// .catch(error => {
// console.error('GET request failed:', error);
// });
// }

// getTotalBookBal()


const getTotalAvailBal = async ()=>{
  

  const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/reports/dashboard/total-available-balance';


const headers = {
'Authorization': token,
'X-DeviceKey': deviceKey,
};

axios.get(url, { headers })
.then(response => {
// console.log('GET request successful!');
// console.log(response)
setTotalAvailBal(response.data.result[0].balance);
})
.catch(error => {
console.error('GET request failed:', error);
});
}

getTotalAvailBal()

const getTotalPoolBal = async ()=>{
  

  const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/reports/dashboard/pool-account-balance';


const headers = {
'Authorization': token,
'X-DeviceKey': deviceKey,
};

axios.get(url, { headers })
.then(response => {
// console.log('GET request successful!');
// console.log(response)
setTotalPoolBal(response.data.result[0].balance);
})
.catch(error => {
console.error('GET request failed:', error);
});
}

getTotalPoolBal()

  }, []);

  // const navigate = useNavigate();

  // const loggedIn = localStorage.getItem("userData")

  // useEffect(() => {
  //   if(!loggedIn){
  //   navigate('/login')

  // }else{
  //   console.log(loggedIn);
  // }
  // }, []);



  

  const UserData = [
    {
      name: "python",
      student: 13,
      fees: 10,
    },
    {
      name: "javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "php",
      student: 5,
      fees: 10,
    },
    {
      name: "java",
      student: 10,
      fees: 7,
    },
    {
      name: "c#",
      student: 9,
      fees: 4,
    },
    {
      name: "c++",
      student: 10,
      fees: 8,
    },
  ];


  return ( 
    <div className='dash'>
        <Modal
        keepMounted
        open={open}
        
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Session Expired
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ m: "auto" }}>
          <Button onClick={logOut} >Ok</Button>
          
          </Typography>
        </Box>
      </Modal>
      <DashNav />
      {/* <div className="" style={{display:"none"}}>
        <Card />
      </div> */}
      <div className="dash-big">
     
        <Dashtopnav />
        <div className="parent-box">
          <div className="user-box">
            <div className="user-num">
            Total Wallets
            </div>
            <div className="box-title">{totalWallet}</div>
          </div>
          <div className="user-box">
            <div className="user-num">
            Total Book Balance
            </div>
            <div className="box-title">{totalBookBal}</div>
          </div>
          <div className="user-box">
            <div className="user-num">
            Total Available Balance
            </div>
            <div className="box-title">{totalAvailBal}</div>
          </div>
          <div className="user-box">
            <div className="user-num">
            Total Pool Balance
            </div>
            <div className="box-title">{totalPoolBal}</div>
          </div>
        </div>
        <div className="parent-box">
          <div className="text-box">
            <ResponsiveContainer width="100%" aspect={2.9} >
            <LineChart data={UserData} height={300}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis  height={300}/>
              <Tooltip contentStyle={{background:"rgb(43, 228, 213)"}} />
              <Line type="monotone" dataKey="student" stroke='red' activeDot={{ r: 8}}/>
              <Line type="monotone" dataKey="fees" stroke='green' activeDot={{ r: 8}} />
            </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-box-pie">
            <div className="pie-amount">
              <div className="circle">
                <div className="small">Total savings</div>
                <div className="amount">
                  {totalSavings}
                </div>
              </div>
            </div>
           <PieChartWithTooltip />
          </div>
        </div>

          <div className="title">
            <div className="head">
            Transactions
            </div>
            <Link className="view-all" to={"/dashboard/transactions"}>View all</Link>
          </div>
          <table  border="0" width="100%" style={{background:'#fff',borderRadius:"10px", paddingTop:"0"}}>
  <tr>
   <td>
    <div className="table-data">
     <table width="100%" style={{ border:"0px",borderCollapse:"collapse",textAlign:"start"}}>
     <tr  style={{background:'#D6FFFD', height:"40px", border:"none",borderCollapse:"collapse"}}> 
          <th style={{background:'#D6FFFD', border:"none",borderCollapse:"collapse",textAlign:"start", padding:"20px"}} >Logo</th>
          <th style={{textAlign:"start", padding:"20px"}}>Name</th>
          <th style={{textAlign:"start", padding:"20px"}}>Symbol</th>
          <th style={{textAlign:"start", padding:"20px"}}>Price</th>
     </tr>
        {coinData.slice(0,6).map(coin => (
          <tr key={coin.id} className="coin">
              <td style={{paddingLeft:"20px"}}><img src={coin.image} alt={coin.symbol} className="coin-img" /></td>
              <td style={{paddingLeft:"20px"}}>{coin.name}</td>
              <td style={{paddingLeft:"20px"}}>{coin.symbol}</td>
              <td style={{paddingLeft:"20px"}}>{coin.current_price}</td>
            </tr>
          ))}
      
      </table>
     </div>
    </td>
   </tr>
 </table>

      </div>
        
    </div>
  )
}

export default DashHome