"use client";


import { useState } from "react";
import Gradient from "../../common/gradient";
import { Link } from "react-router-dom";
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { Separator } from "../../common/separator";

const AuthButtons = [
  {
    name: "Google",
    icon: "/images/google.svg",
    link: "google",
  },
  {
    name: "Github",
    icon: "/images/github.svg",
    link: "github",
  },
  {
    name: "Apple",
    icon: "/images/apple.svg",
    link: "apple",
  },
];

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
  });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");


  return (
    <div className="flex items-start w-full h-screen flex-col relative overflow-hidden">
      <Gradient className="dark:blur-[200px]" />
      <div className="py-6 px-8 sm:px-16 absolute top-0 left-0">
        <a href="/" className="font-bold md:text-2xl">
          <img src="/images/directEd-horizontal.png"
            width={'200px'} alt="DirectEd logo" />
        </a>
      </div>
      <div className="w-[100%] flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <div className="flex items-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                New to Indie-kit?
              </p>
              <Button variant="link" size="sm" className="px-2">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col gap-4 w-[90vw] sm:w-[400px]">
            <form
              // onSubmit={handleLogin}
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
              <Button className="w-full" type="submit">
              <Link to="/dashboard">Send magic link</Link>
              </Button>
            </form>
            <Button variant="link" size="sm" className="w-full">
              Forgot password?
            </Button>
            <Separator />
            <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
              {AuthButtons.map((button, index) => (
                <Button
                  key={index + button.name}
                  variant="outline"
                  size="sm"
                  className="w-full py-5 px-12"
                  onClick={() => ({ callbackUrl: "/" })}
                >
                  <img
                    src={button.icon}
                    width={20}
                    height={20}
                    alt={button.name}
                    className="filter-none dark:filter invert"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
</div>

  );
}
