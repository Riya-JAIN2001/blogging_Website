




import Appbar from "../component/Appbar";
import axios from 'axios';
import { BackendUrl } from '../config';
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | undefined>();
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleImageUpload = async () => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "ImageRiya");
      data.append("cloud_name", "bloggingwebsite");

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/bloggingwebsite/image/upload`, {
          method: "POST",
          body: data,
        });
        const result = await res.json();
        setImageUrl(result.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handlePublish = async () => {
    try {
      const res = await axios.post(`${BackendUrl}/api/v1/blog/create`, {
        title,
        content,
        image: imageUrl,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });

      if (res.data.id) {
        navigate(`/blog/${res.data.id}`);
      } else {
        toast.error("An error occurred while publishing the blog.");
        navigate(`/blogs`);
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
      toast.error("An error occurred while publishing the blog.");
    }
  };

  return (
    <div className=" w-screen h-screen  flex flex-col">
      <Appbar pr={true} />
      <div className="flex flex-col items-center justify-center mt-10 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-2xl font-bold mb-4">Publish Your Blog</h1>
          <textarea
            id="title"
            className="block p-2.5 w-full text-lg text-gray-900 bg-gray-100 rounded-lg border border-gray-300 mb-4"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextEditor onChange={(e) => setContent(e.target.value)} />

          <div className="flex flex-col md:flex-row items-center justify-between mt-4">
            <input
              type="file"
              accept="image/*"
              className="border-none bg-gray-200 rounded-md mb-4 md:mb-0"
              onChange={(e) => setImage(e.target.files?.[0])}
            />
            <button
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:ring-4 focus:ring-blue-200"
              onClick={handleImageUpload}
            >
              Add Photo
            </button>
          </div>

          {imageUrl && (
            <div className="mt-4 flex justify-center">
              <img className="w-96 h-96 rounded-lg shadow-md" src={imageUrl} alt="Uploaded" />
            </div>
          )}

          <button
            className="mt-6 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:ring-4 focus:ring-blue-200"
            onClick={handlePublish}
          >
            Publish Post
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div className="mt-4">
      <textarea
        id="editor"
        onChange={onChange}
        rows={8}
        className="block w-full px-3 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your content here..."
        required
      />
    </div>
  );
}

export default Publish;
