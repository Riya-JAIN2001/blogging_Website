



import { useState, useEffect } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import { Avtar } from "./Avtar";
import { FaSearch, FaUser, FaPen } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  _count: {
    posts: number;
  };
}

const UserSidebar = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios.get(`${BackendUrl}/api/v1/user/allUser`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
        console.log(res.data)
      setUsers(res.data);
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching users:", error);
      setLoading(false);
    });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <>
    <div className='h-screen flex items-center justify-center'>
          <div className='text-center'>
            <div role="status" className="animate-pulse">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="flex items-center justify-center mt-4">
                <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    </>;
  }

  return (
    <div className="w-80 bg-amber-100 fixed p-6 shadow-lg h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold text-amber-800 mb-4">Users</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute top-3 right-3 text-gray-400" />
      </div>
      <ul>
        {filteredUsers.map(user => (
           <li key={user.id} className="flex items-center mb-4 p-3 bg-white rounded-lg shadow hover:bg-amber-50 transition duration-200"  onClick={()=>(localStorage.setItem("id",user.id))}>
          <Avtar name={user.name?user.name:"Anonymous"} size="small" />
          <div className="ml-3 flex-grow">
            <div className="text-sm font-semibold text-gray-800">{user.name}</div>
            <div className="text-xs text-gray-600 flex items-center">
              <FaPen className="mr-1" /> {user._count.posts} Posts
            </div>
          </div>
          <FaUser className="text-amber-600" />
        </li>
          
        ))}
      </ul>
    </div>
  );
}

export default UserSidebar;
