import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 text-lg mb-6">
        Welcome to Dragon News, your trusted source for the latest news and updates from around the world. Our mission is to provide accurate, unbiased, and timely news coverage, keeping you informed and engaged with global events.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-500">
            To become a leading platform for delivering quality journalism, fostering transparency, and empowering people with the information they need to make informed decisions.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <p className="text-gray-500">
            Our dedicated team of journalists, editors, and technical experts work tirelessly to bring you the stories that matter. We are committed to maintaining the highest standards of integrity and professionalism.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-500">
          Have questions, feedback, or news tips? Reach out to us via email at{' '}
          <a
            href="mailto:info@dragonnews.com"
            className="text-blue-500 underline"
          >
            info@dragonnews.com
          </a>
          . We'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
