
import { useState, useEffect } from "react";
import { Avtar } from "./Avtar";
import { Link } from 'react-router-dom';
import { BackendUrl } from "../config";
import axios from "axios";
import { ImWink } from "react-icons/im";

const Appbar = ({ pr }: { pr?: boolean }) => {
  const [name, setName] = useState("");
  

  useEffect(() => {
    axios.get(`${BackendUrl}/api/v1/user/profile`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      setName(res.data.res.name);
    });
  }, []);

  return (
    <div className="shadow-lg fixed top-0 w-full bg-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/blogs"} className="flex items-center text-2xl font-extrabold">
          <ImWink className="text-3xl font-extrabold  text-amber-700  hover:text-amber-800" />
          <div className="ml-2 text-amber-700 hover:text-amber-800 font-serif">BloggyBlogs</div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to={'/publish'}>
            <button
              type="button"
              className="bg-amber-600 text-white hover:bg-amber-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-transform transform hover:scale-105"
            >
              Create New
            </button>
          </Link>
          {pr ? (
            <Link to={`/userblogs`} className="flex items-center space-x-2">
              {name ? (
                <Avtar size="small"   name={name} />
              ) : (
                <ImWink className="text-2xl text-amber-600" />
              )}
              <Link to={"/signin"} className="text-amber-600 hover:text-amber-800 font-medium">
                <div
                  onClick={() => {
                    localStorage.clear();
                  }}
                  className="underline text-xs"
                >
                  {name ? "Logout" : "Register/Login"}
                </div>
              </Link>
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              {name ? (
                <Avtar size="small" name={name} />
              ) : (
                <ImWink className="text-2xl text-amber-600" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
