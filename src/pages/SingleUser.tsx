 




import Appbar from "../component/Appbar";
import FullBlog from "../component/FullBlog";
import { useBlogid } from "../hooks";
import { useParams } from "react-router-dom";

export const SingleUser = () => {
  const { id } = useParams();
  const { loading, blog } = useBlogid({ id: id || "" });

  if (loading) {
    return (
      <div className="h-screen bg-gray-100">
        <Appbar />
        <div className="mt-20 flex justify-center">
          <div>
            <div
              role="status"
              className="w-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse md:p-6"
            >
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pt-4"
                  >
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                  </div>
                ))}
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Appbar />
      <div className=" px-4 mt-10">
        {blog && <FullBlog blog={blog} user={true} />}
      </div>
    </div>
  );
};

export default SingleUser;
