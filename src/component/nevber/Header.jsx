import React from 'react';

function Header() {
  return (
    <div className="text-center ">
      {/* Header Title */}
      <h1 className="font-custom text-4xl md:text-6xl text-black">
        The Dragon News
      </h1>
      <p className="text-lg md:text-xl mt-2">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg md:text-2xl mt-1 font-semibold">
        Sunday, November 27, 2025
      </p>

      {/* News Marquee */}
      <div className="flex items-center bg-neutral-500 mt-4 overflow-hidden rounded-md">
        <span className="bg-red-600 py-3 px-4 text-white text-lg font-semibold z-10">
          Latest
        </span>
        <p className="py-3 px-4 text-gray-700 text-xl md:text-2xl leading-relaxed whitespace-nowrap animate-scroll">
          Match Highlights: Germany vs Spain - as it happened! Match Highlights:
          Germany vs Spain as...
        </p>
      </div>
    </div>
  );
}

export default Header;
