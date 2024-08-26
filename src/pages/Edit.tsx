


import Appbar from "../component/Appbar";
import axios from 'axios';
import { BackendUrl } from '../config';
import { ChangeEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogid } from "../hooks";

const Edit = () => {
    const { id } = useParams();
    const { loading, blog } = useBlogid({ id: id || "" });

    const [title, setTitle] = useState(blog.title || "");
    const [content, setContent] = useState(blog.content || "");
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState(blog.Image || "");

    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setContent(blog.content);
            setImageUrl(blog.Image);
        }
    }, [blog]);

    const handleImageUpload = async () => {
        if (image) {
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "ImageRiya");
            data.append("cloud_name", "bloggingwebsite");

            const res = await fetch(`https://api.cloudinary.com/v1_1/bloggingwebsite/image/upload`, {
                method: "POST",
                body: data,
            });

            const result = await res.json();
            setImageUrl(result.url);
        }
    };

    const handleSaveChanges = async () => {
        await axios.patch(`${BackendUrl}/api/v1/blog/${id}`, {
            title,
            content,
            id,
            image: imageUrl
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        });

        navigate(`/usersblog/${id}`);
    };

    return (
        <div className='bg-[url("yellowbg.webp")] h-screen w-screen bg-cover bg-center flex flex-col items-center'>
            <Appbar pr={true} />
            <div className="flex justify-center w-full mt-10">
                <div className="max-w-screen-lg w-full bg-white p-8 rounded-lg shadow-lg">
                    {loading ? (
                        <div className="text-center text-gray-500">Loading...</div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                className="w-full p-4 mb-6 text-gray-900 bg-amber-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <TextEditor onChange={(e) => setContent(e.target.value)} content={content} />

                            <input
                                type="file"
                                accept="image/*"
                                className="mb-4 p-2 bg-gray-200 border border-gray-300 rounded-md cursor-pointer"
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            />

                            <div className="flex space-x-4">
                                <button
                                    className="px-5 py-2.5 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:ring-4 focus:ring-blue-200"
                                    onClick={handleImageUpload}
                                >
                                    Add Photo
                                </button>

                                <button
                                    className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200"
                                    onClick={handleSaveChanges}
                                >
                                    Save Changes
                                </button>
                            </div>

                            {imageUrl && (
                                <img className="w-full h-96 mt-4 rounded-lg shadow-md" src={imageUrl} alt="Uploaded" />
                            )} 
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

interface TextEditorProps {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    content: string;
}

function TextEditor({ onChange, content }: TextEditorProps) {
    return (
        <div className="mb-4">
            <div className="w-full border border-gray-200 rounded-lg bg-gray-100">
                <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
                    <div className="flex space-x-1">
                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                            </svg>
                            <span className="sr-only">Attach file</span>
                        </button>
                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                            <span className="sr-only">Embed map</span>
                        </button>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <textarea
                        onChange={onChange}
                        rows={8}
                        className="w-full p-2 text-sm text-gray-800 bg-gray-100 border-0 focus:ring-0 rounded-lg"
                        placeholder="Write an article..."
                        value={content}
                        required
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Edit;
