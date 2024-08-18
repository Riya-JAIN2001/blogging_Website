import { Avtar } from "./Avtar";
import { Link } from 'react-router-dom';

interface blogCardProps {
  authorname: string;
  title: string;
  content: string;
  publishedAt: string;
  id: string;
  Image: string;
}

const BlogCard = ({ id, authorname, title, content, publishedAt, Image }: blogCardProps) => {
  return (
    <Link to={"/blog/" + id}>
      <div className='border border-gray-300 p-4 max-w-screen-md cursor-pointer bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md mb-4'>
        <div className="flex items-center mb-2">
          <Avtar name={authorname} size="small" />
          <div className="ml-2 text-sm text-gray-600 font-light">{authorname}</div>
          <div className="ml-2 text-gray-400 text-xs">{new Date(publishedAt).toLocaleDateString()}</div>
        </div>
        <div className="text-xl font-semibold text-gray-800">{title}</div>
        <div className="font-normal text-md text-gray-600 mt-2">{content.slice(0, 100) + "..."}</div>
        <div className="text-gray-500 font-normal text-sm mt-1">{Math.ceil(content.length / 100) + " minute(s) read"}</div>
        {Image && (
          <div className='flex justify-center mt-4'>
            <img src={Image} alt={title} className="max-h-64 w-full object-cover rounded-md" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default BlogCard;
