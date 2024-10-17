export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to MyWebsite</h1>
        <p className="text-gray-600 text-lg mb-8">Discover amazing opportunities and learn more about what we do.</p>
        <a href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More About Us
        </a>
      </div>
    </div>
  );
}
