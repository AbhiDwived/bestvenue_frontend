import React from "react";
const MessagesPage = () => {
    const recentMessages = [
      {
        name: "Jaiswal Kumar",
        date: "02/05/2025 at 14:07",
        status: "Pending",
        content: "I'd like to receive further information"
      },
      {
        name: "Nath",
        date: "22/04/2025 at 17:28",
        status: "Pending",
        content: "Hi there - we found you on WeddingWire and would love more information about your venue!"
      },
      {
        name: "Ayan Chatterjee",
        date: "20/04/2025 at 20:51",
        status: "Pending",
        content: "Hi there - we found you on WeddingWire and would love more information about your venue!"
      },
      {
        name: "Akanksha",
        date: "18/04/2025 at 12:05",
        status: "Pending",
        content: "Hey there! We are interested in potentially hosting our wedding at your venue. Could you send through information on your packages? Thanks!"
      }
    ];
  
    const unreadMessages = [
      "100-200 guests",
      "22 Nov 2025",
      "December 2025",
      "6 Dec 2025",
      "18 May 2025 Flexible"
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Recent messages</h1>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {recentMessages.map((message, index) => (
              <div key={index} className={`p-6 ${index < recentMessages.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="font-semibold text-gray-800">{message.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{message.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {message.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">New unread messages</h2>
          <ul className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-3">
            {unreadMessages.map((message, index) => (
              <li key={index} className="text-gray-700 list-disc list-inside">
                {message.split(' - ').map((part, i) => (
                  <span key={i} className={i === 0 ? "font-semibold" : ""}>
                    {part}{i === 0 ? " - " : ""}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default MessagesPage;