import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { FaBold, FaItalic, FaUnderline, FaHeading, FaShareAlt, FaUndo, FaRedo } from 'react-icons/fa';

const VenderBusinessInfo = () => {

  const editorRef = useRef(null);

  const formatText = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  const [formData, setFormData] = useState({
    contactPerson: '',
    email: '',
    phone: '',
    mobile: '',
    fax: '',
    website: '',
    whatsappNotifications: true,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
 
return (
    <>
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 space-y-4 border-b md:border-b-0 md:border-r bg-gray-50 bg-gradient-to-r from-[#C6E7FF] to-[#eceeefe8]">
        <nav className="mt-4 space-y-3 font-medium text-[13px] text-gray-700">
          <Link to="/business-details" className="flex items-center space-x-2 hover:text-red-600">
            <span>📄</span>
            <span>Business details</span>
          </Link>
          <Link to="/location-map" className="flex items-center space-x-2 hover:text-red-600">
            <span>🗺️</span>
            <span>Location and map</span>
          </Link>
          <Link to="/faq" className="flex items-center space-x-2 hover:text-red-600">
            <span>💬</span>
            <span>FAQ</span>
          </Link>
          <Link to="/promotions" className="flex items-center space-x-2 hover:text-red-600">
            <span>🎯</span>
            <span>Promotions</span>
          </Link>
          <Link to="/photos" className="flex items-center space-x-2 hover:text-red-600">
            <span>📷</span>
            <span>Photos</span>
          </Link>
          <Link to="/videos" className="flex items-center space-x-2 hover:text-red-600">
            <span>▶️</span>
            <span>Videos</span>
          </Link>
          <Link to="/real-weddings" className="flex items-center space-x-2 hover:text-red-600">
            <span>💍</span>
            <span>Real Weddings</span>
          </Link>
          <Link to="/menus" className="flex items-center space-x-2 hover:text-red-600">
            <span>🍴</span>
            <span className="font-semibold">Menus</span>
          </Link>
          <Link to="/availability" className="flex items-center space-x-2 hover:text-red-600">
            <span>📅</span>
            <span>Availability</span>
          </Link>
          <Link to="/events" className="flex items-center space-x-2 hover:text-red-600">
            <span>🗓️</span>
            <span>Events</span>
          </Link>
          <Link to="/vendors" className="flex items-center space-x-2 hover:text-red-600">
            <span>🧑‍🤝‍🧑</span>
            <span>Preferred vendors</span>
          </Link>
          <Link to="/team" className="flex items-center space-x-2 hover:text-red-600">
            <span>👥</span>
            <span>Meet the team</span>
          </Link>
          <Link to="/social" className="flex items-center space-x-2 hover:text-red-600">
            <span>🔗</span>
            <span>Social networks</span>
          </Link>
          <Link to="/weddingwire-button" className="flex items-center space-x-2 hover:text-red-600">
            <span>🖱️</span>
            <span>WeddingWire button</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 text-[13px]">
        <h2 className="text-xl font-semibold mb-4">Login information</h2>
        <div className="border rounded p-4 max-w-md">
          <label className="block font-bold mb-1 uppercase">Username *</label>
          <input
            type="text"
            value="dsybanquet"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            readOnly
          />
          <Link
            to="/change-password"
            className="text-blue-600 text-sm mt-2 inline-block hover:underline"
          >
            Change password
          </Link>
        </div>
        <div className="max-w-3xl mx-auto mt-8">
      <label className="block text-lg font-semibold mb-2">
        Your "About" section <span className="text-red-500">*</span>
      </label>
      <p className="text-sm text-gray-600 mb-3">
        Describe your business in a unique way to improve your ranking and win over more couples.
      </p>

      {/* Toolbar */}
      <div className="flex gap-3 mb-2 border rounded px-3 py-2 bg-gray-50">
        <button
          onClick={() => formatText('bold')}
          className="text-gray-600 hover:text-black"
        >
          <FaBold />
        </button>
        <button
          onClick={() => formatText('italic')}
          className="text-gray-600 hover:text-black"
        >
          <FaItalic />
        </button>
        <button
          onClick={() => formatText('underline')}
          className="text-gray-600 hover:text-black"
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => formatText('formatBlock', 'H2')}
          className="text-gray-600 hover:text-black"
        >
          <FaHeading />
        </button>
        <button
          onClick={() => formatText("undo")}
          className="text-gray-600 hover:text-black"
        >
          <FaUndo />
        </button>

        <button
          onClick={() => formatText("redo")}
          className="text-gray-600 hover:text-black"
        >
          <FaRedo />
        </button>
        
        <button
          onClick={() => alert("Sharing functionality coming soon...")}
          className="ml-auto text-gray-600 hover:text-black"
        >
          <FaShareAlt />
        </button>
      </div>

      {/* Editable content area */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[250px] border rounded p-4 bg-white text-sm focus:outline-none"
        placeholder="Start writing here..."
        suppressContentEditableWarning={true}
      >
        {/* Optional default content */}
        <section>
    <h1 className="text-2xl font-bold mb-4">Diamond Deep Banquet Hall</h1>
    <p className="text-sm leading-relaxed">
      Diamond Deep Banquet Hall is a wedding venue based out in the city of Delhi. This venue provides for all your needs under one roof. It is one of the perfect venues to host all kinds of ceremonies or celebrations. They will ensure to make your celebration eventful and worth remembering a lifetime. It is the best place for hosting any kind of nuptial ceremonies. Celebrate your occasion and make it memorable by booking a spot at Diamond Deep Banquet Hall today!
    </p>
  </section>

  {/* Facilities and Capacity */}
  <section>
    <h2 className="text-xl font-semibold mb-3 border-b pb-1">Facilities and Capacity</h2>
    <p className="text-sm leading-relaxed">
      Diamond Deep Banquet Hall offers you an indoor space that can easily accommodate a guest list of 350 people at a time without any hodge-podge. They provide facilities like basic electricity and lighting with a complete power backup to make sure there is no stoppage in your celebrations. Enjoy the biggest night of your life with full fervour and sit back without thinking about power cuts.
    </p>
    <p className="text-sm mt-2 leading-relaxed">
      Additionally, the venue offers ample parking space along with the benefit of on-spot valets. The in-house decoration and planning team ensures a beautifully adorned event area, and outside decorators are welcome to speed up the process if needed.
    </p>
  </section>

  {/* Services Offered */}
  <section>
    <h2 className="text-xl font-semibold mb-3 border-b pb-1">Services Offered</h2>
    <p className="text-sm mb-3 leading-relaxed">
      Diamond Deep Banquet Hall provides a wide variety of wedding planning services for all your wedding functions, ensuring the most memorable experience. Services include:
    </p>
    <ul className="list-disc pl-5 text-sm space-y-1">
      <li>Guest accommodation</li>
      <li>24*7 service staff</li>
      <li>Bridal dressing room</li>
      <li>Parking area with valet service</li>
      <li>In-house catering</li>
      <li>In-house decor and planning team</li>
      <li>In-house sound and DJ</li>
    </ul>
  </section>
      </div>
    </div>

        <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Contact details</h2>
      <p className="bg-blue-100 text-blue-700 p-3 rounded mb-6 text-sm">
        Lead notifications and updates from WeddingWire will be sent to this contact.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 gap-8 bg-white p-6 rounded-lg border"
      >
        {/* Left Side Form */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block font-medium text-sm mb-1">Contact Person *</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="+91 0000000000"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
            <label className="flex items-center mt-2 text-sm">
              <input
                type="checkbox"
                name="whatsappNotifications"
                checked={formData.whatsappNotifications}
                onChange={handleChange}
                className="mr-2"
              />
              Receive notifications for new messages on <span className="ml-1 font-medium">WhatsApp</span>
            </label>
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Fax</label>
            <input
              type="text"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Right Side Box */}
        <div className="bg-gray-50 border rounded p-6 text-center flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-4">📞</div>
            <p className="font-semibold mb-2">Do you want to make your phone number visible to couples?</p>
            <p className="text-sm text-gray-600 mb-4">
              This allows couples to contact you directly.
            </p>
            <button
              type="button"
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded"
            >
              Go Premium
            </button>
          </div>
        </div>
      </form>

      <div className="text-sm text-gray-500 mt-4">
        Published content is required to meet WeddingWire’s{' '}
        <a href="#" className="text-blue-600 underline">
          Terms of Use
        </a>.
      </div>

      <div className="mt-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-semibold"
        >
          Save
        </button>
      </div>
    </div>
          </div>
    </div>
      </>
  );
};

export default VenderBusinessInfo;
