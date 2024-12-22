import React from 'react';

const Career = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Career Opportunities</h1>
      <p className="text-gray-600 text-lg mb-6">
        Join our team at Dragon News and be a part of a dynamic, innovative, and professional environment. We are always looking for talented and passionate individuals who are ready to make a difference in the world of journalism.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Why Work With Us?</h2>
          <p className="text-gray-500">
            At Dragon News, we value creativity, dedication, and teamwork. We provide opportunities to grow, learn, and contribute to meaningful stories that impact millions of lives.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Current Openings</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Journalist - Full Time</li>
            <li>Content Editor - Full Time</li>
            <li>Social Media Manager - Part Time</li>
            <li>Web Developer - Contract</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <p className="text-gray-500">
          If you are interested in joining our team, send your resume and a cover letter to{' '}
          <a
            href="mailto:careers@dragonnews.com"
            className="text-blue-500 underline"
          >
            careers@dragonnews.com
          </a>
          . Please include the position you are applying for in the subject line.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Internship Program</h2>
        <p className="text-gray-500">
          We also offer internship opportunities for students and fresh graduates. Gain hands-on experience in journalism, editing, and digital media. For more details, email us at{' '}
          <a
            href="mailto:internships@dragonnews.com"
            className="text-blue-500 underline"
          >
            internships@dragonnews.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Career;
