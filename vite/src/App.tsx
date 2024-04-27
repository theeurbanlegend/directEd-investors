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



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/investments" element={<InvestmentOpportunity/>}/>
            <Route path="/pools" element={<Pools/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/pay" element={<CheckoutPage/>}/>
            <Route path="/details/web" element={<WEBDEV/>}/>
            <Route path="/details/ui" element={<UIUIX/>}/>
            <Route path="/details/ai" element={<GenAI/>}/>
            {/* <Route path="/investment" element={<Investment/>}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
