import React from "react";
import { Link } from "react-router-dom";
import VenderHeader from "../vendor/VenderHeader";
// import VenderEnquiryList from "../vendor/VenderEnquiryList";

const VendeRenquiries = () => {
  return (
    <>
    <VenderHeader/>
    <div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4">
  <h2 className="text-xs font-bold text-gray-500 mb-2 uppercase">Folders</h2>
  <ul className="text-sm space-y-2">
    <li>
      <Link to="/inbox" className="flex justify-between items-center font-semibold text-black hover:text-red-600">
        <span>📥 Inbox</span>
        <span>0</span>
      </Link>
    </li>
    <li>
      <Link to="/unread" className="flex justify-between items-center text-gray-700 hover:text-red-600">
        <span>📨 Unread</span>
        <span>0</span>
      </Link>
    </li>
    <li>
      <Link to="/read" className="flex justify-between items-center text-gray-700 hover:text-red-600">
        <span>📖 Read</span>
        <span>0</span>
      </Link>
    </li>
    <li>
      <Link to="/archived" className="flex justify-between items-center text-gray-700 hover:text-red-600">
        <span>🗂️ Archived</span>
        <span>0</span>
      </Link>
    </li>
  </ul>
</div>

      {/* Right Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Enquiries <span className="text-gray-400 text-lg">(0)</span>
          </h2>
          <div className="flex items-center space-x-3">
            <Link
              to="/get-more-enquiries"
              className="text-sm text-blue-600 hover:underline"
            >
              Get more enquiries
            </Link>
            <button className="bg-yellow-400 text-white text-sm font-semibold px-4 py-1.5 rounded">
              GO PREMIUM
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="border rounded-lg p-4 flex flex-wrap justify-between items-center max-w-4xl text-sm text-gray-600">
          <div className="flex items-center space-x-2 w-1/2 sm:w-auto mb-3 sm:mb-0">
            <span className="text-xl">✉️</span>
            <div>
              <div className="text-base text-black font-medium">0</div>
              <div>Replied</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-1/2 sm:w-auto mb-3 sm:mb-0">
            <span className="text-xl">✔️</span>
            <div>
              <div className="text-base text-black font-medium">0</div>
              <div>Booked</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-1/2 sm:w-auto mb-3 sm:mb-0">
            <span className="text-xl">❌</span>
            <div>
              <div className="text-base text-black font-medium">0</div>
              <div>Discarded</div>
            </div>
          </div>
          <div className="hidden sm:block h-10 border-l mx-4"></div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-xl">⏱️</span>
            <div>
              <div className="text-base text-black font-medium">-- : --</div>
              <div>average response time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <VenderEnquiryList/> */}
    </>
  );
};

export default VendeRenquiries;
