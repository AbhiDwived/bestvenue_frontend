import { Link } from "react-router-dom";
import AnalyticsChart from './VenderAnalyticsChart';
import MessagesPage from "./VenderMessages";
import CompletionCard from "./VenderCompletionCard";




export default function Dashboard() {
  return (
    <>
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8] w-full ">
      <div className="w-full col-span-2 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Analytics</h2>
        <AnalyticsChart />
        <div><MessagesPage/></div>
      </div>
      

      <div className="space-y-4">
        <CompletionCard />
        <div className="bg-white p-4 rounded shadow">
          <p className="font-semibold">FEATURE HIGHLIGHT</p>
          <p className="text-gray-800 text-lg font-bold">0.0 / 5.0</p>
          <p className="text-gray-600">
            Boost your credibility with reviews
          </p>
          <Link to="/request-reviews" className="text-red-500 mt-2 hover:underline">
  Request reviews
</Link>
        </div>

        <div className="bg-white p-4 rounded shadow">
      <p className="text-xs text-gray-500 flex items-center mb-1">
        💡 <span className="ml-1">TIP</span>
      </p>
      <h3 className="text-sm font-semibold text-gray-800 mb-1">
        Improve your response time
      </h3>
      <p className="text-sm text-gray-700 mb-3">
        Respond to leads within 24 hours to increase your booking opportunity!
      </p>
      <Link
        to="/leads"
        className="text-red-600 text-sm font-semibold hover:underline"
      >
        RESPOND TO LEADS &gt;
      </Link>
    </div>
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            GET MORE EXPOSURE
          </h2>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-medium">
              Show the Real Weddings you've worked on
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Ask the photographers you work with and past clients for Real Weddings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Upload Photos
            </button> */}
            <a 
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium 
                        underline underline-offset-4 self-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf" 
            alt="Wedding decoration" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74" 
            alt="Bride and groom" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde" 
            alt="Wedding venue" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf" 
            alt="Wedding ceremony" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
      </div>
    
      </div>
    </div>
    </>
  );
}
