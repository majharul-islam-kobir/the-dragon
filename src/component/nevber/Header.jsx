import { useState, useEffect } from "react";
import moment from "moment";

function Header() {
  const [currentDate, setCurrentDate] = useState(
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center sticky top-0 container mx-auto z-20">
      {/* Header Title */}
      <h1 className="font-custom text-4xl md:text-6xl text-black">
        The Dragon News
      </h1>
      <p className="text-lg md:text-xl mt-1">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg md:text-2xl mt-1 font-semibold">{currentDate}</p>

      {/* News Marquee */}
      <div className="flex items-center bg-neutral-500 mt-2 overflow-hidden rounded-md">
        <span className="bg-red-600 py-2 px-3 text-white text-lg font-semibold z-10">
          Latest
        </span>
        <p className="py-2 px-3 text-gray-700 text-xl md:text-2xl leading-relaxed whitespace-nowrap animate-scroll">
          Match Highlights: Germany vs Spain - as it happened! Match Highlights:
          Germany vs Spain as...
        </p>
      </div>
    </div>
  );
}

export default Header;
