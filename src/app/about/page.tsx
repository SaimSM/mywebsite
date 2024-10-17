export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          We are a team dedicated to delivering the best experience for our users. We value creativity, innovation, and commitment to excellence.
        </p>
        <a href="/job" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
          See Our Job Openings
        </a>
      </div>
    </div>
  );
}
