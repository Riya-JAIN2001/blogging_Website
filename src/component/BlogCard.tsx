
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
      <div className='border border-gray-300 p-6 w-full max-w-screen-xl md:max-w-screen-2xl lg:max-w-screen-3xl cursor-pointer bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md mb-6 mx-auto'>
        <div className="flex items-center mb-4">
          <Avtar name={authorname} size="small" />
          <div className="ml-2 text-sm text-amber-600 font-light">{authorname}</div>
          <div className="ml-2 text-amber-600 text-xs">{new Date(publishedAt).toLocaleDateString()}</div>
        </div>
        <div className="text-2xl font-semibold text-amber-700 mb-2">{title}</div>
        <div className="font-normal text-lg text-black mb-2">{content.slice(0, 150) + "..."}</div>
        <div className="text-black font-normal text-sm mb-4">{Math.ceil(content.length / 100) + " minute(s) read"}</div>
        {Image && (
          <div className='flex justify-center mt-4'>
            <img src={Image} alt={title} className="w-full h-auto max-h-80 object-cover rounded-md" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default BlogCard;
