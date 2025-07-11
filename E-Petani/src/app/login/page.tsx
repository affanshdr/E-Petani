"use client"; // <--- Add this line at the very top!

import { useState } from 'react';
import Head from 'next/head'; // For Pages Router, or use <title> directly in App Router
import { useRouter } from 'next/navigation'; // For App Router: useRouter from 'next/navigation'
// import { useRouter } from 'next/router'; // For Pages Router: useRouter from 'next/router'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', { // Endpoint is still /api/auth/login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed.');
        return;
      }

      console.log('Login successful:', data.user);
      // In a real app, you'd store tokens/session info and then redirect.
      router.push('/dashboard'); // Redirect to a dashboard or home page
    } catch (err) {
      console.error('Client-side login error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      {/* For App Router, <Head> equivalent is built-in metadata, 
          but if you are mixing, keep <Head> from 'next/head' */}
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page for the application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 mb-4 text-sm">{error}</p>
          )}
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}