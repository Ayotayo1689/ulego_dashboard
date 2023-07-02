
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import LoginSignup from './pages/LoginSignup';
import DashHome from './pages/DashHome';
import Transactions from './pages/Transactions';
import TransactionDetail from './pages/TransactionDetail';
import Wallets from './pages/Wallet';
import WalletDetails from './pages/Wallet-details';
import Transfer from './pages/Transfer';
import TransferDetails from './pages/TransferDetails';
import DataBundle from './pages/Databundle';
import DataBundleDetails from './pages/DataDetails';
import Airtime from './pages/Airtime';
import AirtimeDetail from './pages/AirtimeDetails';
import Cable from './pages/Cable';
import CableDetail from './pages/CableDetail';
import Electricity from './pages/Electricity';
import ElectricityDetail from './pages/ElectricityDetail';
import Savings from './pages/Savings';
import SavingsDetail from './pages/SavingsDetails';


const  App = ()=> {
  
  return (
    <div className="App">
      <Routes>
     
        <Route path="/" element={<LoginSignup />} />
        <Route path="/wallets/details" element={<WalletDetails />} />
        <Route path="dashboard" element={<DashHome />} />
        <Route path="data_bundle" element={<DataBundle />} />
        <Route path="data_bundle/details" element={<DataBundleDetails />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="/transfer/details" element={<TransferDetails />} />
        <Route path="wallets" element={<Wallets/>} />
        <Route path="dashboard/transactions" element={<Transactions />} />
        <Route path="airtime_recharge" element={<Airtime />} />
        <Route path="airtime_recharge/details" element={<AirtimeDetail />} />
        <Route path="cable_subscription" element={<Cable />} />
        <Route path="cable_subscription/details" element={<CableDetail />} />
        <Route path="electricity" element={<Electricity />} />
        <Route path="electricity/details" element={<ElectricityDetail />} />
        <Route path="savings" element={<Savings />} />
        <Route path="savings/details" element={<SavingsDetail />} />
        <Route path="dashboard/transactions/details" element={<TransactionDetail/>} />
      </Routes>
    </div>
  );
}

export default App;