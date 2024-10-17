import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login to Your Account</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black-950 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-black-950 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Do not have an account? <Link href="/sign-up" className="text-green-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
