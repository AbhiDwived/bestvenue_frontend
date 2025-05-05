import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Simulating vendor login process
      // Here you would make an API request to authenticate the vendor

      if (form.email === "vendor@example.com" && form.password === "password") {
        // Simulate success
        navigate('/vendor-dashboard'); // Redirect to the vendor dashboard
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">Vendor Login</h2>

        {/* Error Message */}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700">
          Don’t have an account? <a href="/vendor-register" className="text-purple-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default VendorLogin;
