export default function Job() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Job Opportunities</h2>
        <p className="text-gray-600 text-lg mb-8">
          We have amazing roles available. Discover your next career move with us.
        </p>
        <a href="/sign-up" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
          Sign Up to Apply
        </a>
      </div>
    </div>
  );
}
