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
  }, [name]);

  return (
    <div className="shadow-lg fixed w-screen  bg-white p-4">
      <div className="flex justify-between items-center">
        <Link to={"/blogs"}>
          <div className="font-semibold flex text-xl items-center">
            <ImWink className="text-3xl" />
            <div className="mx-2 font-serif">BloggyBlogs</div>
          </div>
        </Link>
        <div className="flex items-center">
          <Link to={'/publish'}>
            <button
              type="button"
              className="text-white mr-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2"
            >
              Create New
            </button>
          </Link>
          {pr ? (
            <Link to={`/userblogs`}>
              <div className="flex items-center">
                {name !== "" ? (
                  <Avtar size="small" name={name} />
                ) : (
                  <ImWink className="mx-2" />
                )}
                <Link to={"/signin"} className="underline text-xs text-gray-500 ml-2">
                  <div
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    {name ? "Logout" : "Register/Login"}
                  </div>
                </Link>
              </div>
            </Link>
          ) : (
            <div className="flex items-center">
              {name !== "" ? (
                <Avtar size="small" name={name} />
              ) : (
                <ImWink className="mx-2" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
