import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sideber from "../sidber/Sideber";
import Sideber2 from "../sidber/Sideber2";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNewsId, setExpandedNewsId] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/news/category/01"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const data = await response.json();
        setNews(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSeeMore = (id) => {
    setExpandedNewsId(expandedNewsId === id ? null : id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col md:flex-row h-screen mt-30 container mx-auto">
      <div className=" hidden md:block md:w-1/5 bg-gray-100 p-4 h-screen overflow-y-scroll sticky top-0 ">
        <Sideber />
      </div>

      <div className="w-full md:w-3/5 bg-white p-4 overflow-y-auto h-screen">
        <h1 className="text-2xl font-bold my-20">Dragon News Home</h1>
        {news.map((item) => (
          <div key={item._id} className="mb-4 border-b pb-4 relative">
            <Link to={`/details/${item._id}`} state={item}>
              <div className="absolute top-2 right-2 flex items-center space-x-2">
                <button className="text-gray-500 hover:text-blue-500 text-xl">
                  <i className="fas fa-share-alt"></i>
                </button>
                <button className="text-gray-500 text-xl hover:text-blue-500">
                  <i className="fas fa-bookmark mx-5"></i>
                </button>
              </div>

              <div className="flex items-center mb-2">
                <img
                  src={item.author?.img || "https://via.placeholder.com/40"}
                  alt="author"
                  className="rounded-full mr-2 w-10 h-10"
                />
                <div>
                  <p className="font-semibold">
                    {item.author?.name || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.author?.published_date || "Unknown Date"}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <img
                src={item.image_url}
                alt="news"
                className="w-full h-auto mb-2 rounded"
              />
            </Link>
            <p className="text-md text-gray-600">
              {expandedNewsId === item._id
                ? item.details
                : `${item.details.slice(0, 200)}...`}
              <span
                onClick={() => handleSeeMore(item._id)}
                className="text-blue-500 cursor-pointer underline ml-2"
              >
                {expandedNewsId === item._id ? "See less" : "See more"}
              </span>
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${
                      index < Math.floor(item.rating?.number || 0)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  ></i>
                ))}
                <span className="text-gray-600 ml-2">
                  {item.rating?.number || "0.0"}
                </span>
              </div>
              <div className="flex items-center text-gray-500">
                <i className="fas fa-eye mr-2"></i> {item.total_view || 0}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" hidden md:block md:w-1/5 bg-gray-100 p-4 h-screen overflow-y-scroll sticky top-0">
        <Sideber2 />
      </div>
    </div>
  );
};

export default Home;
