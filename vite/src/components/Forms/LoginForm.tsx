import { useState } from "react";
import { Spinner } from "@radix-ui/themes";
import Gradient from "../../common/gradient";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { Separator } from "../../common/separator";
import { useGetUserMutation } from "../../hooks/useGetUserMutation";
import PasswordInput from "../../common/PasswordInput";
import { toast } from "react-toastify";
import { baseURL } from "../../api/api";

const AuthButtons = [
  {
    name: "Google",
    icon: "/images/google.svg",
    link: "google",
  },
];


async function auth() {
  const response = await fetch(`${baseURL}/request`, {
    method: "post",
  });

  const data = await response.json();
  console.log("data::", data);
  window.location.href = data.url;
  // navigate(data.url)
}

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const loginMutation = useGetUserMutation();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = formValues;
    if (!email || !password) {
      return;
    }
    const res = await loginMutation.mutateAsync({ email, password });
    if (res?.accessToken) {
      localStorage.setItem("vite-access-token", res.accessToken);
      navigate("/dashboard");
    }
  };

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);

  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    if (!forgotPasswordEmail) {
      toast.error("Please enter your email address.");
      return;
    }
  
    try {
      const response = await fetch(`${baseURL}/api/inv/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotPasswordEmail }),
      });

      const data = await response.json();
  
      if (response.ok) {
        toast.success("Password reset link has been sent to your email.");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  



  return (
    <div className="flex items-start w-full h-screen flex-col relative overflow-hidden">
      <Gradient className="dark:blur-[200px]" />
      <div className="py-6 px-8 sm:px-16 absolute top-0 left-0">
        <a href="/" className="font-bold md:text-2xl">
          <img
            src="/images/directEd-horizontal.png"
            width={"200px"}
            alt="DirectEd logo"
          />
        </a>
      </div>
      <div className="w-[100%] flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <div className="flex items-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                New to DirectEd Investment Platform?
              </p>
              <Button variant="link" size="sm" className="px-2">
                <Link to="/Sign-up">Sign up</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col gap-4 w-[90vw] sm:w-[400px]">
            <form
              onSubmit={handleSubmit}
              className="w-full flex items-center justify-center flex-col gap-4"
            >
              <Input
                placeholder="Your email address"
                type="email"
                value={formValues.email}
                onChange={(e) => {
                  setFormValues({ ...formValues, email: e.target.value });
                }}
              />
              <PasswordInput
                inputName={"password"}
                isPassVisible={isPassVisible}
                value={formValues.password}
                setIsPassVisible={setIsPassVisible}
                onChange={(e: { target: { value: any } }) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
                placeholder={"Your password"}
              />
              <Button className="w-full" type="submit">
                {loginMutation.isLoading ? (
                  <Spinner />
                ) : (
                  "Send a magic link"
                )}
              </Button>
            </form>
            <Button variant="link" size="sm" className="w-full" onClick={openModal}>
              Forgot password?
            </Button>

{isModalOpen && (
  <div className="modal">
    <div className="modal-content">
      <span className="close cursor-pointer" onClick={closeModal}>&times;</span>
      <form onSubmit={handleForgotPassword}>
        <Input
          placeholder="Enter your email address"
          type="email"
          value={forgotPasswordEmail}
          onChange={(e) => setForgotPasswordEmail(e.target.value)}
        />
        <Button className="my-2" type="submit">Send Reset Link</Button>
      </form>
    </div>
  </div>
)}
            <Separator />
            <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
              {AuthButtons.map((button, index) => (
                <Button
                  key={index + button.name}
                  variant="outline"
                  size="sm"
                  className="w-full py-5 px-12"
                  // onClick={() => ({ callbackUrl: "/" })}
                  onClick={() => {
                    auth();
                    toast.loading("Redirecting to Google!")
                  }}
                >
                  <img
                    src={button.icon}
                    width={20}
                    height={20}
                    alt={button.name}
                    className="filter-none dark:filter invert"
                  />
                <span className="ml-4"> Continue with Google</span> 
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
