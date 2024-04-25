import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Forms/LoginForm"
import Pools from "./components/pools/page"
import PortfolioPage from "./components/portfolio/page"
import InvestmentOpportunity from "./components/investments/details/InvestmentDetails"



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
            {/* <Route path="/investment" element={<Investment/>}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
