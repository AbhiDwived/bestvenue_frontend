import React, { useState } from 'react';
import venue from "../../assets/Images/besthomeimage.jpg";
import { FaSearchengin } from "react-icons/fa";

const Searchpage = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className='flex justify-between items-center  border border-gray-800  mt-5'>
      {/* left div */}
      <div className='sm:w-full order-first sm:order-last flex md:w-6/12 bg-red-400 '>
        <div className="text-center ">
          <h2 className="text-xl font-bold">Everything you need to plan your event</h2>
          <p className="text-gray-600">Search over 77,000 local professionals with reviews, pricing, and more.</p>
          <div className="flex items-center w-full">
            <select className="w-1/2 mr-2 pl-2 py-1 " value={category} onChange={handleCategoryChange}>
              <option value="">Category</option>
              <option value="Photographer">Photographer</option>
              <option value="Venue">Venue</option>
              <option value="Caterer">Caterer</option>
            </select>
            <input className="w-1/2 pl-2 py-1 border rounded" type="text" value={location} onChange={handleLocationChange} placeholder="Location" />
            <button className="bg-red-500 hover:bg-red-700 text-red-100 px-2 py-1 rounded" type="submit">Find </button>
          </div>
        </div>
      </div>
      {/* right div */}
      <div className='sm:w-full order-first sm:order-last flex md:w-6/12 border border-gray-800'>
        <div className="bg-white p-3 rounded-3xl shadow-md">
          <img src={venue} alt="venue" className="img-fluid border rounded-full"  />
        </div>
      </div>
    </div>

  );
};

export default Searchpage;

