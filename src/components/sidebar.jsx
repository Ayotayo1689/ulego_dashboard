import DashIcon from "../images/dashboardicon.svg";
import wallet from "../images/wallet.svg";
import transfer from "../images/transfericon.svg";
import savings from "../images/savingsicon.svg";
import data from "../images/dadaicon.svg";
import airtime from "../images/airtimeicon.svg";
import cable from "../images/cable.svg";
import electricity from "../images/electricity.svg";


 const SideBarLink = [
   {
    icon:DashIcon,
    title:"Dashboard",
    path:"/dashboard"
   },
   {
    icon:wallet,
    title:"Wallets",
    path:"/wallets"
   },
   {
    icon:transfer,
    title:"Transfers",
    path:"/transfer"
   },
   {
    icon:savings,
    title:"Savings",
    path:"/savings"
   },
   {
    icon:data,
    title:"Data Bundle ",
    path:"/data_bundle"
   },
   {
    icon:airtime,
    title:"Airtime Recharge ",
    path:"/airtime_recharge"
   }, 
   {
    icon:cable,
    title:" Cable subscription ",
    path:"/cable_subscription"
   },
   {
    icon:electricity,
    title:"Electricity Bills ",
    path:"/electricity"
   }
];

export default SideBarLink;