import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Signin  from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish';
import Edit from './pages/Edit';
import "./App.css"
import UserBlogs from './pages/UserBlogs';
import SingleUser from './pages/SingleUser'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/usersblog/:id" element={<SingleUser/>} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/userblogs" element={<UserBlogs/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App