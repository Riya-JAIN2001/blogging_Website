

import { useState } from 'react';
import BlogCard from '../component/BlogCard';
import { useBlog } from '../hooks/index';
import Appbar from './../component/Appbar';
import UserSidebar from "./../component/Sidebar";
import { FaBars } from 'react-icons/fa';

const Blogs = () => {
  const { loading, blogs } = useBlog();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return (
      <div className='bg-gray-100 h-screen'>
        <Appbar pr={true} />
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
      </div>
    );
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Appbar pr={true} />
      <div className=' grid grid-cols-1 lg:grid-cols-3'>
        <div className={`col-span-1 mt-16 fixed z-20 md:relative ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <UserSidebar />
        </div>
        <div className='col-span-2 mt-10 flex-1 flex flex-col items-center justify-center'>
          <button className='md:hidden fixed top-16 left-4 z-30 p-2 bg-amber-600 text-white rounded-full shadow-md' onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className='w-full max-w-4xl  p-4 mt-10'>
            {blogs?.map((b) => (
              <div key={b.id} className="mb-4">
                <BlogCard
                  id={b.id}
                  authorname={b.author.name || "Anonymous"}
                  title={b.title}
                  publishedAt={b.published}
                  content={b.content}
                  Image={b.Image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

