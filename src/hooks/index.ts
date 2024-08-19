import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config";

export interface Blog{
    content:string,
    id:string,
    title:string,
    author:{name:string}
    published:string,
    Image:string
}
export const useUserBlog=()=>{
    const [loading, setLoading]=useState(true);  
    const [userblog, setUserBlog]= useState<Blog[]>([]); 
    useEffect(()=>{
        axios.get(`${BackendUrl}/api/v1/blog/bulk/userblog`,{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
        } }   
        ).then(response=>{
            setUserBlog(response.data.blogs);
            setLoading(false);
        })
        }, [])
       return {
           loading, userblog
       }
       
   }

export const useBlogid=({id}:{id:string})=>{
    
    const [loading, setLoading]=useState(true);  
    const [blog, setBlog]= useState<Blog>({
        title:"",
        content:"",
        Image:"",
        author:{name:""},
        published:"",
        id:"",
        
    });
     
    useEffect(()=>{

     const token = localStorage.getItem("token");
    
     axios.post(`${BackendUrl}/api/v1/blog/get/${id}`,{},
     {
        headers:{
            Authorization:"Bearer "+token
    }
    
 }   
    ).then(response=>{
        setBlog(response.data.blog);
        setLoading(false);
    })
}, [id])
    return {
        loading, blog
    }
    
}
 
export const useBlog=()=>{
    const [loading, setLoading]=useState(true);
    const [blogs, setBlogs]= useState<Blog[]>([]);
    useEffect(()=>{
    axios.get(`${BackendUrl}/api/v1/blog/bulk`,{
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
    } }   
    ).then(response=>{
        setBlogs(response.data.blog);
        console.log(blogs)

        setLoading(false);
    })
    }, [])
    return {
        loading, blogs
    }
}