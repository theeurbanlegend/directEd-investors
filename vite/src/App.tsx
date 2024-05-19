import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Forms/LoginForm"
import Pools from "./components/pools/page"
import PortfolioPage from "./components/portfolio/page"
import InvestmentOpportunity from "./components/investments/details/InvestmentDetails"
import CheckoutPage from "./components/workflow/checkout/payout/page"
import WEBDEV from "./components/poolPages/webDev"
import UIUIX from "./components/poolPages/UIUX"
import GenAI from "./components/poolPages/GenAI"
import Dashboard from "./components/Dashboard/page"
import Profile from "./components/profile/page"
import Signup from "./components/Forms/SignUp"
import StudentProfileForm from "./components/Admin/Studentforms"
import CreatePoolPage from "./components/Admin/pool"
import Create from "./components/Create/page"
import StudentMoreDetails from "./components/students/StudentMoreDetails"



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/investments" element={<InvestmentOpportunity/>}/>
            <Route path="/pools" element={<Pools/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/details/web" element={<WEBDEV/>}/>
            <Route path="/details/ui" element={<UIUIX/>}/>
            <Route path="/details/ai" element={<GenAI/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:id" element={<StudentMoreDetails/>}/>
            <Route path="/poolForm" element={<CreatePoolPage/>}/>
            <Route path="/Studentform" element={<StudentProfileForm/>}/>
            {/* <Route path="/investment" element={<Investment/>}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
