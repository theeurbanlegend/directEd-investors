import { Link } from "react-router-dom";
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { Separator } from "../../common/separator";
import Gradient from "../../common/gradient";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., validation and API request
    console.log("Form submitted:", formValues);
  };

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
            <Input
              name="password"
              placeholder="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <Input
              name="confirmPassword"
              placeholder="Confirm password"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
            />
            <Button className="w-full" type="submit">
            <Link to="/Login">Sign up</Link>
            </Button>
          </form>

          <Separator />



        </div>
      </div>
    </div>
  );
};

export default Signup;
