import { Link } from "react-router-dom";
import React, { useState } from "react";
import VenderHeader from "../vendor/VenderHeader";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaCheck } from "react-icons/fa";



const VenderReviews = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [showClientPicker, setShowClientPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const clients = [
    { name: "Gaurav Dixit", email: "gauravdixit939@gmail.com", date: "30/04/25" },
    { name: "Darshi Saxena", email: "darshisaxena@gmail.com", date: "23/04/25" },
    { name: "Pooja Prakash", email: "poojaprakash818@gmail.com", date: "23/04/25" },
    { name: "Aditya Singh", email: "singhaditya123my@gmail.com", date: "23/04/25" },
    { name: "Neeraj", email: "nonu2000k@gmail.com", date: "23/04/25" },
    { name: "Dhrity", email: "dhrity09@gmail.com", date: "23/04/25" },
    { name: "Aditya Gupta", email: "aditya.gupta100366@gmail.com", date: "23/04/25" },
    { name: "Dheeraj Kumar", email: "dheerajbittu70@gmail.com", date: "20/04/25" },
    { name: "Archana", email: "archanasingh22agust@gmail.com", date: "14/04/25" },
    { name: "Ashish Dutta", email: "ashishdutta6@hotmail.com", date: "23/03/25" }
  ];

  const handleAddRecipient = () => {
    if (username && email) {
      setRecipients([...recipients, { name: username, email }]);
      setUsername("");
      setEmail("");
    }
  };

  const handleAddFromClient = (client) => {
    setRecipients([...recipients, { name: client.name, email: client.email }]);
    setShowClientPicker(false);
  };
  
  // const handleAddRecipient = () => {
  //   if (username && email && !recipients.some(r => r.email === email)) {
  //     setRecipients([...recipients, { name: username, email }]);
  //     setUsername("");
  //     setEmail("");
  //   }
  // };

  // const handleAddFromClient = (client) => {
  //   if (!recipients.some(r => r.email === client.email)) {
  //     setRecipients([...recipients, { name: client.name, email: client.email }]);
  //   }
  //   setShowClientPicker(false);
  // };
  
const [saveTemplate, setSaveTemplate] = useState(false);
const [templateName, setTemplateName] = useState("");
const [isDefault, setIsDefault] = useState(false);

  const reviewUrl = "https://mybestvenue.com/";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(reviewUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  //  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [message, setMessage] = useState(`Hi [Name],

It was a pleasure to be part of your event! If you have a few moments, could you provide a review of our services on WeddingWire?

Thank you in advance for your feedback. We greatly appreciate your help!

Best,
Diamond Deep Banquet Hall`);


  return (
    <>
 <VenderHeader/>
    <div className="flex flex-col md:flex-row min-h-screen bg-white bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4  py-8 space-y-6">
        <nav>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link
                to="/review-collector"
                className="flex items-center space-x-2 text-black font-semibold"
              >
                <span>⚙️</span>
                <span>Review collector</span>
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="flex items-center space-x-2 text-gray-700 hover:text-black"
              >
                <span>📝</span>
                <span>Reviews</span>
              </Link>
            </li>
            <li>
              <Link
                to="/weddingwire-rated"
                className="flex items-center space-x-2 text-gray-700 hover:text-black"
              >
                <span>🖥️</span>
                <span>WeddingWire Rated<sup>™</sup></span>
              </Link>
            </li>
            <li>
              <Link
                to="/reviews-widget"
                className="flex items-center space-x-2 text-gray-700 hover:text-black"
              >
                <span>⚙️</span>
                <span>Reviews widget</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
  <h1 className="text-2xl font-bold mb-4">Review Collector</h1>

  {/* Stats Summary */}
  <section className="bg-gray-100 p-6 rounded-lg mb-6">
    <div className="flex items-center space-x-4">
      <span className="text-3xl">⭐</span>
      <div>
        <h2 className="font-semibold text-lg">You have received 0 reviews</h2>
        <div className="text-sm text-gray-600 space-x-3 mt-1">
          <span>🔄 0 requests sent</span>
          <span>⏱️ 0 not replied to</span>
          <span>❔ 0 without a profile photo</span>
        </div>
      </div>
    </div>
  </section>

  {/* Info Note */}
  <section className="bg-blue-50 p-4 rounded-md text-sm text-gray-700 mb-6">
    Edit and send this message to request reviews from your clients. Once sent, you will also receive a copy of the email.
  </section>

  {/* Review Request Form */}
  <section className="max-w-4xl mx-auto p-6 border rounded-md shadow bg-white space-y-6">
    {/* Recipients */}
    <div className="space-y-4">
    {recipients.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">To:</p>
          <ul className="list-disc list-inside text-sm text-gray-800">
            {recipients.map((r, i) => (
              <li key={i}>
                <strong>{r.name}</strong> ({r.email})
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Username"
          className="border rounded px-3 py-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto"
          onClick={handleAddRecipient}
        >
          Add
        </button>
      </div>

         <button
        className="text-red-600 text-sm font-medium flex items-center gap-1"
        onClick={() => setShowClientPicker(!showClientPicker)}
      >
        <span>📎</span> Add clients
      </button>

      {showClientPicker && (
        <div className="mt-2 border rounded p-4 bg-gray-50 space-y-3 max-h-[70vh] overflow-y-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <div className="space-y-2">
            {clients
              .filter(client =>
                client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                client.email.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((client, index) => (
                <div
                  key={index}
                  className="bg-white border rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                >
                  <div className="w-full">
                    <p className="font-medium break-words">{client.name}</p>
                    <p className="text-sm text-gray-600 break-words">{client.email}</p>
                    <p className="text-xs text-gray-500">Wedding: {client.date}</p>
                  </div>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 w-full sm:w-auto"
                    onClick={() => handleAddFromClient(client)}
                  >
                    Add
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      <p className="text-sm text-gray-600">CC: dsyhospitality@gmail.com</p>
    </div>


  
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">Message</label>
        <button className="text-sm text-gray-500 hover:text-gray-800">Template ⌄</button>
      </div>
      <textarea
        rows={6}
        className="w-full border rounded p-3 text-sm resize-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p className="text-xs text-gray-500">
        Note: a link to write a review directly on your Storefront will be included in the email. [Link]
      </p>
    </div>

<div className="flex flex-col gap-4">
  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      className="w-4 h-4"
      checked={saveTemplate}
      onChange={(e) => setSaveTemplate(e.target.checked)}
    />
    Save as template
  </label>

  {saveTemplate && (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Template name"
        className="border rounded px-3 py-2 w-full"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
      />
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={isDefault}
          onChange={(e) => setIsDefault(e.target.checked)}
        />
        Set as default
      </label>
    </div>
  )}

  <button
    className="bg-gray-300 text-gray-600 px-6 py-2 rounded cursor-not-allowed"
    disabled
  >
    Send
  </button>
</div>

  </section>

  <section className="max-w-4xl mx-auto p-6 border rounded-md shadow bg-white space-y-6  mt-8">
      <h2 className="text-lg font-semibold">Share your personalised review URL</h2>
      <p className="text-sm text-gray-600">
        Send this personalised URL to your past clients for a quick way to collect wedding reviews for your services.
      </p>

      <div className="bg-gray-50 p-3 rounded-md flex items-center justify-between">
        <span className="text-sm text-gray-800 truncate">{reviewUrl}</span>
        <button
          onClick={handleCopy}
          className="text-red-600 font-medium ml-4"
        >
          {copied ? (
            <span className="flex items-center gap-1 text-green-600">
              <FaCheck className="text-sm" /> Copied
            </span>
          ) : (
            "COPY"
          )}
        </button>
      </div>

      <div className="flex space-x-3 pt-1">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(reviewUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-xl"
        >
          <FaFacebookF />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(reviewUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-600 text-xl"
        >
          <FaTwitter />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(reviewUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 text-xl"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
</main>

          </div>
    </>
  );
};

export default VenderReviews;
