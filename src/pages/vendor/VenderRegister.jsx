import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const VendorRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', businessName: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Replace with actual API call to register vendor
      // Assuming 'registerVendor' is the function to call your backend for vendor registration
      await registerVendor(form);
      
      // On success, redirect to vendor login page
      navigate('/vendor-login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl w-[90%] sm:w-[400px] text-center">
        <div className="text-6xl text-blue-800 mb-6">
          <i className="fas fa-store"></i>
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Vendor Registration</h2>

        {/* Vendor Registration Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Business Email"
            className="w-full mb-4 px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full mb-4 px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-600 mb-4 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-blue-900">
          Already have an account?{' '}
          <Link
            to="/vendor-login"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Vendor Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VendorRegister;
