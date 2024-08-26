  



import axios from "axios";
import Appbar from "./Appbar";
import { Avtar } from "./Avtar";
import { BackendUrl } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog {
  content: string;
  id: string;
  title: string;
  author: { name: string };
  published: string;
  Image?: string;
}

const FullBlog = ({ blog, user }: { blog: Blog; user: Boolean }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Appbar pr={true} />
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-12 px-4 lg:px-24 w-full pt-20 max-w-screen-2xl">
          <div className="lg:col-span-8">
            <div className="text-3xl font-extrabold text-amber-600">
              {blog.title}
            </div>
            <div className="text-amber-600 pt-2">
              Posted on {blog.published.slice(0, 10)}
            </div>
            <div className="pt-4 text-black">{blog.content}</div>
          </div>
          <div className="lg:col-span-4 mt-8 mx-6 lg:mt-0">
            <div className="text-amber-600 text-lg">Author</div>
            <div className="flex w-full mt-2">
              <div className="pr-4 flex flex-col justify-center">
                <Avtar name={blog.author.name || "Anonymous"} size="small" />
              </div>
              <div>
                <div className="text-xl font-bold text-amber-600">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-amber-600">
                  Random catchy phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
            {user && (
              <div className="mt-5">
                <button
                  type="button"
                  onClick={async () => {
                    alert("Your Post is Deleting");
                    try {
                      await axios.delete(
                        `${BackendUrl}/api/v1/blog/delete/${blog.id}`,
                        {
                          headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                          },
                        }
                      );
                    } catch (e) {
                      console.log(e);
                    }
                    alert("Post has been deleted");
                    navigate("/userblogs");
                  }}
                  className="text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/edit/${blog.id}`)}
                  className="text-white w-28 bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {blog.Image && (
        <div className="flex justify-center mt-10 py-10">
          <img
            src={blog.Image}
            alt=""
            className="max-w-full max-h-80 object-contain rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default FullBlog;
