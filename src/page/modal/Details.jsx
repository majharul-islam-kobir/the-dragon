import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams ইমপোর্ট করতে হবে

const Details = () => {
  const { id } = useParams(); // URL থেকে আইডি নেওয়া
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNewsId, setExpandedNewsId] = useState(null); // Expanded news state

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await fetch(
          `https://openapi.programming-hero.com/api/news/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news details");
        }
        const data = await response.json();
        setNewsItem(data.data[0]); // ডেটা অ্যারে থেকে প্রথম আইটেম
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]); // id পরিবর্তন হলে আবার ফেচ হবে

  const handleSeeMore = () => {
    setExpandedNewsId(expandedNewsId === id ? null : id); // Toggle the expanded news
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!newsItem) return <p>No data found</p>;

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Dragon News</h1>
      </header>

      {/* Main Content and Sidebar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Article - Scrollable */}
        <div className="md:col-span-2 overflow-y-auto h-[80vh]">
          <div className="border rounded-lg p-4">
            <img
              src={newsItem.image_url || "https://via.placeholder.com/600x400"} // ডাইনামিক ইমেজ
              alt="Main News"
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{newsItem.title}</h2>
            <p className="text-gray-500 mb-4">
              {newsItem.author?.published_date || "Unknown Date"}
            </p>
            {/* Show details with "See more" */}
            <p className="text-xl text-gray-600">
              {expandedNewsId === id
                ? newsItem.details
                : `${newsItem.details.slice(0, 200)}...`}
              <span
                onClick={handleSeeMore}
                className="text-blue-500 cursor-pointer underline ml-2 "
              >
                {expandedNewsId === id ? "See less" : "See more"}
              </span>
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              All news in this category
            </button>
          </div>

          {/* Editors Insight */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Editors Insight</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <img
                  src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/a4c4/live/a7e4b060-c06f-11ef-a0f2-fd81ae5962f4.jpg.webp"
                  alt="Editor Insight"
                  className="w-full rounded mb-2"
                />
                <h4 className="text-lg font-semibold">
                  <a
                    href="https://www.bbc.com/bengali/articles/cvg61pypzddo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    How likely is another influx of Rohingya into Bangladesh?
                  </a>
                </h4>
                <p className="text-gray-500 text-sm">
                  {" "}
                  {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <img
                  src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/56c9/live/b38d1390-bf79-11ef-a2ca-e99d0c9a24e3.jpg.webp"
                  alt="Editor Insight"
                  className="w-full rounded mb-2"
                />
                <h4 className="text-lg font-semibold">
                  <a
                    href="https://www.bbc.com/bengali/articles/c0ewxr98782o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    What aspects are examined in police verification? How
                    realistic is the recommendation to abolish it?
                  </a>
                </h4>
                <p className="text-gray-500 text-sm">
                  {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <img
                  src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/c2b8/live/211de400-bfa9-11ef-aff0-072ce821b6ab.jpg.webp"
                  alt="Editor Insight"
                  className="w-full rounded mb-2"
                />
                <a
                  href="https://www.bbc.com/bengali/articles/c74xjrr9erlo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  আওয়ামী লীগের নির্বাচনে অংশ নেয়ার কতটা সুযোগ রয়েছে?
                </a>
                <p className="text-gray-500 text-sm">
                  {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <img
                  src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/295f/live/5d530cf0-86f8-11ef-bfa2-adeae0a2b0b1.jpg.webp"
                  alt="Editor Insight"
                  className="w-full rounded mb-2"
                />
                <a
                  href="https://www.bbc.com/bengali/articles/cp3w9yg03vzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  মহাকাশে সোভিয়েত প্রযুক্তি যেভাবে নাকানি চোবানি খাইয়েছিল
                  যুক্তরাষ্ট্রকে
                </a>
                <p className="text-gray-500 text-sm">Jan 4, 2022</p>
              </div>
              <div className="border rounded-lg p-4">
                <img
                  src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/ff32/live/bc397890-8bb1-11ef-8936-1185f9e7d044.jpg.webp"
                  alt="Editor Insight"
                  className="w-full rounded mb-2"
                />
                <a
                  href="https://www.bbc.com/bengali/articles/cn5zdwn369ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  হাথুরুসিংহে কেমন কোচ ছিলেন, তাকে নিয়ে এতো বিতর্ক কেন?
                </a>
                <p className="text-gray-500 text-sm">
                  {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Scrollable */}
        <div className="overflow-y-auto h-[80vh]">
          {/* Login Section */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-bold mb-4">Login With</h3>
            <button className="bg-blue-500 text-white w-full py-2 mb-2 rounded hover:bg-blue-600">
              Login with Google
            </button>
            <button className="bg-gray-800 text-white w-full py-2 rounded hover:bg-gray-900">
              Login with GitHub
            </button>
          </div>

          {/* Find Us On */}
          <div className="border rounded-lg p-4">
            <img
              src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/12/octocat-teacher.png?q=70&fit=crop&w=1100&h=618&dpr=1"
              alt="Editor Insight"
              className="w-full rounded mb-2"
            />
            <a
              href="https://www.howtogeek.com/want-to-contribute-to-open-source-software-heres-how-to-get-started/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Want to Contribute to Open Source Software? Here’s How to Get
              Started
            </a>
            <p className="text-gray-500 text-sm">
              {moment().format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>

          {/* Q-Zone */}
          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <img
                src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/801686/a-printing-press-printing-a-sheet-of-100-bills.jpg&w=2000&op=resize"
                alt="Q-Zone"
                className="rounded w-full"
              />
            <a
              href="https://www.fool.com/investing/2024/12/21/meet-the-supercharged-growth-stock-thats-1-of-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Meet the Supercharged Growth Stock That's One of This Year's
              Biggest Winners. The Company Could Hit $50 Trillion by 2034,
              According to 1 World-Renowned Analyst
            </a>
            </div>
            <div className="mb-4">
            <div className="mb-4">
              <img
                src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/12/22/638a6a7591b016bd2020fbe316f9eaa01734878950925394_original.jpeg?impolicy=abp_cdn&imwidth=1200&height=675"
                alt="Q-Zone"
                className="rounded w-full"
              />
            <a
              href="https://bengali.abplive.com/business/epfo-alert-pension-news-eps-know-details-of-the-update-1111718"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
             EPFO Alert:  পেনশন নিয়ে বড় খবর, EPFO বলল এটাই শেষ সুযোগ ! এরপর পাবেন না সুবিধা
            </a>
            </div>
            <div className="mb-4">
               <div className="mb-4">
              <img
                src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/801686/a-printing-press-printing-a-sheet-of-100-bills.jpg&w=2000&op=resize"
                alt="Q-Zone"
                className="rounded w-full"
              />
               <a
                    href="https://www.fool.com/investing/2024/12/21/meet-the-supercharged-growth-stock-thats-1-of-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                   Meet the Supercharged Growth Stock That's One of This Year's Biggest Winners. The Company Could Hit $50 Trillion by 2034, According to 1 World-Renowned Analyst
                  </a>
            </div>

            
            <div className="mb-4">
               <div className="mb-4">
              <img
                src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/12/22/b4efd0f39f363a6ae47a9715faf84b451734867281040338_original.jpg?impolicy=abp_cdn&imwidth=1200&height=675"
                alt="Q-Zone"
                className="rounded w-full"
              />
               <a
                    href="https://bengali.abplive.com/news/parliament-winter-session-productivity-ninth-lowest-1111688"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                   Parliament Winter Session: প্রতি মিনিটে ২.৫ লক্ষ টাকা খরচ, শীতকালীন অধিবেশনে নামমাত্র কাজ হল সংসদে
                  </a>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
