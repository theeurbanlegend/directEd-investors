// import Gradient from "../../../components/common/gradient";

import { useState } from "react";

const Authbuttons = [
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

  return (
    <div className="flex items-start w-full h-screen flex-col relative overflow-hidden">
      {/* <Gradient className="dark:blur-[200px]" /> */}
      <div className="py-6 px-8 sm:px-16 absolute top-0 left-0">
        <h2 className="text-2xl font-bold">Boilerbay.</h2>
      </div>
      <div className="w-[100%] flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <div className="flex items-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                New to Indie-kit?
              </p>
              <button  className="px-2">
                <a href="/signup">Sign up</a>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col gap-4 w-[90vw] sm:w-[400px]">
            <form className="w-full flex items-center justify-center flex-col gap-4">
              <input
                placeholder="Your email address"
                type="email"
                value={formValues.email}
                onChange={(e) => {
                  setFormValues({ ...formValues, email: e.target.value });
                }}
              />
              <button className="w-full" type="submit">
                Send magic link
              </button>
            </form>
            <button  className="w-full">
              Forgot password?
            </button>
            <hr />
            <div className="flex items-center justify-center gap-4 flex-col sm:flex-row w-full">
              {Authbuttons.map((button, index) => (
                <button
                  key={index + button.name}
                  
           
                  className="w-full py-5 px-12"
                >
                  <img
                    src={button.icon}
                    alt={button.name}
                    className="filter-none dark:filter invert"
                    width={20}
                    height={20}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
