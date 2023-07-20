import React from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import "./DashApp.css";
import PieChartWithTooltip from '../components/PieChart';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
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
import ulegoImg from "../components/ulego.svg"



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


const tableData = [
  1,2,3,4,5,6,7,8,9,10
]
  

  const UserData = [
    {
      name: " ",
      student: 0,
      fees: 0,
    },
    {
      name: " Jan",
      student: 60,
      fees: 50,
    },
    {
      name: "Feb",
      student: 50,
      fees: 40,
    },
    {
      name: "Mar",
      student: 40,
      fees: 50,
    },
    {
      name: "April",
      student: 30,
      fees: 20,
    },
    {
      name: "May",
      student: 40,
      fees: 50,
    },
    {
      name: "June",
      student: 10,
      fees: 60,
    },
    {
      name: "July",
      student: 20,
      fees: 30,
    },
    {
      name: "Aug",
      student: 10,
      fees: 60,
    },
    {
      name: "Sept",
      student: 40,
      fees: 30,
    },
    {
      name: "Oct",
      student: 10,
      fees: 60,
    },
    {
      name: "Nov",
      student: 50,
      fees: 60,
    },
    {
      name: "Dec",
      student: 10,
      fees: 30,
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
          <div className="text-box"  style={{flexDirection:"column", alignItems:"flex-start"}}>
            <div style={{marginLeft:"8%", marginTop:"10px", marginBottom:"10px",fontWeight:"500", fontSize:"20px",broder:"2px solid red"}}>Financial Statistics</div>
            <ResponsiveContainer width="100%" aspect={"10%"} >
            <LineChart data={UserData} height={300}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis  height={350}/>
              <Line type="monotone" dataKey="student" stroke='red' />
              <Line type="monotone"  dataKey="fees" stroke='green' />
            </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-box-pie">
            <div style={{position:"absolute",width:"95%",top:"15px",left:"30px",fontWeight:"500",fontSize:"23px"}}>Savings</div>
            <div className="pie-amount" >
              <div className="circle">
                <div className="small">Total savings</div>
                <div className="amount">
                  {totalSavings}
                </div>
              </div>
            </div>
            <div style={{position:"absolute",width:"95%",display:"flex",bottom:"0"}}>
              <div style={{flex:"1",height:"40px"}} >
                <div style={{display:"flex",gap:"5px"}}>
                  <div style={{background:"#FFCC82",width:"5px",height:"15px"}}></div>
                  <div style={{fontSize:"14px",color:"#6D6969"}}>Fixed Savings</div>
                </div>
                <div>100,000</div>
              </div>
              <div style={{flex:"1",height:"40px"}} >
                <div style={{display:"flex",gap:"5px"}}>
                  <div style={{background:"#5EFF5E",width:"5px",height:"15px"}}></div>
                  <div style={{fontSize:"14px",color:"#6D6969"}}>Auto Savings</div>
                </div>
                <div>100,000</div>
              </div>
              <div style={{flex:"1",height:"40px"}} >
                <div style={{display:"flex",gap:"5px"}}>
                  <div style={{background:"#7777FF",width:"5px",height:"15px"}}></div>
                  <div style={{fontSize:"14px",color:"#6D6969"}}>Target Savings</div>
                </div>
                <div>100,000</div>
              </div>
            </div>
           <PieChartWithTooltip />
          </div>
        </div>

          <div className="title">
            <div className="head">
            Transactions
            </div>
            <Link style={{color:"#134E4A", fontWeight:"500"}} className="view-all" to={"/dashboard/transactions"}>View all</Link>
          </div>

          <div className='table-container'>

          <table  border="0" width="100%" style={{background:'#fff',borderRadius:"10px", paddingTop:"0"}}>
  <tr>
   <td>
   <div className="table-data">
     <table width="100%" style={{ border:"0px",borderCollapse:"collapse",textAlign:"start,", position:"relative"}}>
     <tr  style={{background:'#D6FFFD', height:"40px", border:"none",borderCollapse:"collapse", fontSize:"14px"}}> 
          <th style={{background:'#D6FFFD', border:"none",borderCollapse:"collapse",textAlign:"start",paddingLeft:"20px"}} >WALLET</th>
          <th style={{textAlign:"start"}}>Transaction Type  </th>
          <th style={{textAlign:"start"}}>Amount </th>
          <th style={{textAlign:"start"}}>Satus</th>
          <th style={{textAlign:"start"}}>Date</th>
          <th style={{textAlign:"start"}}>Reference</th>
     </tr>

     {tableData.map((data, index )=> (
         
         <tr key={index} className="coin tableHover" >
      <td style={{paddingLeft:"0px",paddingLeft:"0px",display:"flex",alignItems:"center",gap:"6px"}}><img src={ulegoImg} alt={"bundle logo"} width={"20px"} style={{borderRadius:"50%"}} />ULEGO - John Peters</td>
     <td style={{paddingLeft:"0px"}}>Airtime purchase</td>
     <td style={{paddingLeft:"0px",marginLeft:"20px"}}>1,500.00</td>
     <td style={{paddingLeft:"0px",marginLeft:"20px"}}>Completed</td>
     <td style={{paddingLeft:"0px",marginLeft:"20px"}}>12 April, 2023  02:45:55am </td>
     <td style={{paddingLeft:"0px",marginLeft:"20px"}}>Ulego-WOYZOFSKQCGGGBVJWKK</td>
   </tr>
   
     ))}
      </table>
     </div>
    </td>
   </tr>
 </table>
</div> 
      </div>
        
    </div>
  )
}

export default DashHome