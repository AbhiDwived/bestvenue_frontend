import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      // simulate login request
      localStorage.setItem('user', JSON.stringify(form));
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
  
      
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {error && <div className="text-red-600 mb-4 text-center">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">
              Login
            </button>
          </form>

          <p className="mt-4 text-center">
            Don’t have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
          </p>
        </div>
      </div>
  );
};

export default Login;
