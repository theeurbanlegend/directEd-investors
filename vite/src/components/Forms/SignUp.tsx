import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { Separator } from "../../common/separator";
import Gradient from "../../common/gradient";
import PasswordInput from "../../common/PasswordInput";
import { useAddUserMutation } from "../../hooks/useAddUserMutation";
import { Spinner } from "@radix-ui/themes";

const AuthButtons = [
  {
    name: "Google",
    icon: "/images/google.svg",
    link: "google",
  },
];

async function auth() {
  const response = await fetch("http://127.0.0.1:8080/request", {
    method: "post",
  });

  const data = await response.json();
  console.log("data::", data);
  window.location.href = data.url;
}

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const addUserMutation = useAddUserMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formValues;
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      console.log("Requirements not met!");
      return;
    }
    const res = await addUserMutation.mutateAsync({
      name: username,
      email,
      password,
    });
    if (res?.accessToken) {
      localStorage.setItem("vite-access-token", res.accessToken);
      navigate("/dashboard");
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
            <h2 className="text-3xl font-bold">Create an account</h2>
            <div className="flex items-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Already have an account?
              </p>
              <Button variant="link" size="sm" className="px-2">
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center justify-center flex-col gap-4"
          >
            <Input
              name="username"
              placeholder="Username"
              type="text"
              value={formValues.username}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              placeholder="Email address"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <PasswordInput
              inputName={"password"}
              isPassVisible={isPassVisible}
              value={formValues.password}
              setIsPassVisible={setIsPassVisible}
              onChange={handleInputChange}
              placeholder={"Password"}
            />

            <PasswordInput
              inputName={"confirmPassword"}
              isPassVisible={isPassVisible}
              value={formValues.confirmPassword}
              setIsPassVisible={setIsPassVisible}
              onChange={handleInputChange}
              placeholder={"Confirm password"}
            />
            <Button className="w-full" type="submit">
              {
                addUserMutation.isLoading ? (
                  <Spinner />
                ) : (
                  "Sign up"
                )
              }
            </Button>
          </form>

          <Separator />
          <p>Or</p>
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
            {AuthButtons.map((button, index) => (
              <Button
                key={index + button.name}
                variant="outline"
                size="sm"
                className="w-full py-5 px-12"
                onClick={() => {
                  auth();
                }}
              >
                <img
                  src={button.icon}
                  width={20}
                  height={20}
                  alt={button.name}
                  className="filter-none dark:filter invert"
                />
                               <span className="ml-4"> Sign In with Google</span> 

              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
