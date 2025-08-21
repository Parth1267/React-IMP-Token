import logo from './logo.svg';
import './App.css';
import Index from './Components/Home/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import ComingSoon from './Components/ComingSoon';
import Locked from './Components/Dashboard/Locked';
import ReferralReward from './Components/Dashboard/ReferralReward';
import Claimed from './Components/Dashboard/Claimed';

function App() {
  return (
    <>
      {/* <Index /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/locked" element={<Locked />} />
        <Route path="/referral-reward" element={<ReferralReward />} />
        <Route path="/claimed" element={<Claimed />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
