import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./componentss/Home"
import Login from "./componentss/Forms/LoginForm"
import Pools from "./componentss/pools/page"
// import Navbar from "./componentss/Navbar"
// import Footer from "./componentss/Footer"



function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Navbar /> */}
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/investment" element={<Investment/>}/> */}
            <Route path="/pools" element={<Pools/>}/>
            {/* <Route path="/investment" element={<Investment/>}/> */}
          </Route>
          {/* <Footer /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
