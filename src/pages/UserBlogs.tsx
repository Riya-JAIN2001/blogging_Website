



import UserblogCard from '../component/UserblogCard';
import { useUserBlog } from '../hooks/index';
import Appbar from './../component/Appbar';

const UserBlogs = () => {
  const { loading, userblog } = useUserBlog();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Appbar pr={true} />
      <div className="flex-1 mt-16 p-6">
        {loading ? (
          <div className="animate-pulse space-y-6">
            <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-48 bg-gray-300 rounded"></div>
          </div>
        ) : userblog.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-gray-700">
              <h1 className="text-3xl font-bold mb-4">No Blog Posts Yet</h1>
              <p className="text-lg">Check back later for updates.</p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto space-y-6">
            {userblog.map((b) => (
              <UserblogCard
                key={b.id}
                id={b.id}
                authorname={b.author.name || "Anonymous"}
                title={b.title}
                publishedAt={b.published}
                content={b.content}
                Image={b.Image || ""}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
