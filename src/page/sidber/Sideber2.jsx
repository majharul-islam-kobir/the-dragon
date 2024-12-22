import React from 'react'

function Sideber2() {
  return (
    <div>
        <h2 className="text-xl font-bold mb-4">Login With</h2>
<button className="mb-2 bg-blue-500 text-white py-1 px-4 rounded">
  Login with Google
</button>
<button className="bg-gray-800 text-white py-1 px-4 rounded">
  Login with Github
</button>

<div className="mt-4">
  <h3 className="text-lg font-bold">Find Us On</h3>
  <ul className="mt-2">
    <li className="mb-2 ">Facebook</li>
    <li className="mb-2 ">Twitter</li>
    <li className="mb-2 ">Instagram</li>
  </ul>
</div>

{/* Q-Zone Section */}
<div className="mt-4">
  <h3 className="text-lg font-bold">Q-Zone</h3>
  <ul className="mt-2">
    <li className="mb-2">Swimming</li>
    <li className="mb-2">Chess</li>
    <li className="mb-2">Play Ground</li>
  </ul>
</div>
    </div>
  )
}

export default Sideber2