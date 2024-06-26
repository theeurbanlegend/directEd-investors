import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Forms/LoginForm";
import Pools from "./components/pools/page";
import PortfolioPage from "./components/portfolio/page";
import InvestmentOpportunity from "./components/investments/details/InvestmentDetails";
import CheckoutPage from "./components/checkout/CheckoutPage";
import Dashboard from "./components/Dashboard/page";
import Profile from "./components/profile/page";
import Signup from "./components/Forms/SignUp";
import StudentProfileForm from "./components/Admin/Studentforms";
import CreatePoolPage from "./components/Admin/pool";
import Create from "./components/Create/page";
import StudentMoreDetails from "./components/students/StudentMoreDetails";
import { Bounce, ToastContainer } from "react-toastify";
import PoolPageCard from "./components/poolPages/PoolPageCard";
import CheckoutSuccess from "./components/checkout/CheckoutSuccess";
import CheckoutCancel from "./components/checkout/CheckoutCancel";
import ResetPassword from "./components/Forms/resetPasswordForm";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/student/:id" element={<StudentMoreDetails />} />
            <Route path="/pool/:id" element={<PoolPageCard />} />
            <Route path="/pool/:id/invest" element={<InvestmentOpportunity />} />
            <Route path="/pool/:id/invest/checkout" element={<CheckoutPage />} />
            <Route path="/pool/:id/invest/success" element={<CheckoutSuccess />} />
            <Route path="/pool/:id/invest/cancel" element={<CheckoutCancel />} />
            <Route path="/poolForm" element={<CreatePoolPage />} />
            <Route path="/Studentform" element={<StudentProfileForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
