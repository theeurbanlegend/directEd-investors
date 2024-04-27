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
    <div className="flex items-center justify-center h-screen">
  <div className="max-w-sm w-full sm:max-w-md bg-white p-8 rounded-lg shadow-lg">
    <div className="mb-8">
      <h2 className="text-3xl font-bold ">Welcome to DirectEd Investment Platform</h2>
      <p className="text-sm text-gray-600">New to DirectEd Investment Platform?</p>
      <a href="/signup" className="text-[#395241] hover:underline">Sign up</a>
    </div>
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        placeholder="Your email address"
        type="email"
        value={formValues.email}
        onChange={(e) => {
          setFormValues({ ...formValues, email: e.target.value });
        }}
        className="border rounded-md py-2 px-3"
      />
      <input
        placeholder="Password"
        type="password"
        value={formValues.password}
        onChange={(e) => {
          setFormValues({ ...formValues, password: e.target.value });
        }}
        className="border rounded-md py-2 px-3"
      />
      <button className="bg-[#395241] text-white py-2 rounded-md" type="submit">
        Send magic link
      </button>
    </form>
    <button className="text-[#395241] hover:underline">Forgot password?</button>
    <hr className="my-4 border-gray-300" />
    {/* <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
      {Authbuttons.map((button, index) => (
        <button
          key={index + button.name}
          className="w-full py-5 px-12"
        >
          <img
            src={button.icon}
            alt={button.name}
            className="filter-none invert"
            width={20}
            height={20}
          />
        </button>
      ))}
    </div> */}
  </div>
</div>

  );
}
