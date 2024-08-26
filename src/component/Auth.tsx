
import { SignupInput } from "@riyajain2950/medium-blog";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackendUrl } from '../config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ type }: { type: "signin" | "signup" }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });

  async function buttonHandler() {
    try {
      const res = await axios.post(`${BackendUrl}/api/v1/user/${type}`, postInputs);
      console.log(res.data);
      if (!res.data.user) {
        toast.error("Wrong Password or email");
        navigate("/signin");
        localStorage.clear();
      } else {
        const jwt = res.data.token;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }
    } catch (e) {
      console.log(e);
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-amber-50">
      <div className="lg:w-96 w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <div>
          <h1 className="text-3xl font-medium text-gray-800">
            {type === "signup" ? "Create " : "Login "}An Account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {type === "signup" ? "Already " : "Don't "}have an account? {type === "signup" ? <Link to="/signin" className="underline text-blue-500">Login</Link> : <Link className="underline text-blue-500" to="/signup">Register</Link>}
          </p>
        </div>
        {type === "signup" && (
          <div className="mt-6">
            <LabeledInputblock label="Name" type="text" id="name" placeholder="Enter the name" onchange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value
              });
            }} />
          </div>
        )}

        <div className="mt-4">
          <LabeledInputblock label="Email" type="text" id="email" placeholder="Enter the email" onchange={(e) => {
            setPostInputs({
              ...postInputs,
              email: e.target.value
            });
          }} />
        </div>

        <div className="mt-4 relative">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-600 dark:text-white">
            Password
          </label>
          <div className="flex">
            <input
              className="bg-gray-50 border relative border-gray-500 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              onChange={(e) => { setPostInputs({ ...postInputs, password: e.target.value }) }}
            />
            <button className="absolute inset-y-0 right-0 px-3 mt-10 flex items-center text-gray-600" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <button onClick={buttonHandler} type="button" className="text-white w-full bg-gradient-to-br bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
            {type === "signin" ? "Sign In" : "Sign Up"}
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

interface labelInput {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabeledInputblock({ label, type, id, onchange, placeholder }: labelInput) {
  return (
    <div className="mt-3">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-600 dark:text-white">
        {label}
      </label>
      <input type={type} id={id} onChange={onchange} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-600 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
    </div>
  );
}

export default Auth;
