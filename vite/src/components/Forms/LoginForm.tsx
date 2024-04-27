// import Gradient from "../../../components/common/gradient";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Authbuttons = [
  {
    name: "Google",
    icon: "/images/google.svg",
    link: "google",
  },
  {
    name: "Apple",
    icon: "/images/apple.svg",
    link: "apple",
  },
];

export default function Login() {
  const navigate=useNavigate()
  const [formValues, setFormValues] = useState({
    email: "",
    password:""
  });
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    console.log(formValues)
    navigate('/portfolio')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-md shadow-lg">
        <img src="/images/directEd-horizontal.png" width={'200px'} alt="DirectEd logo" className="mx-auto mb-6" />

        <h2 className="text-3xl font-bold text-center mb-4">Welcome to DirectEd Investment Platform</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Your email address"
            type="email"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />

          <input
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Password"
            type="password"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Sign in
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/signup" className="text-blue-500 hover:underline">New to DirectEd Investment Platform? Sign up</a>
        </div>

        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-gray-500 hover:underline">Forgot password?</a>
        </div>
      </div>
</div>

  );
}