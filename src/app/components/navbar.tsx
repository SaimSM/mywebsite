// import Link from "next/link"
// export default function navbar() {
//   return (
//     <div>
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/job">Job</Link>
//         <Link href="/job"></Link>

  
      
//     </div>
//   )
// }
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link>
          <Link href="/job" className="text-gray-300 hover:text-white transition duration-300">Job</Link>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <Link href="/login" className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition duration-300">
            Login
          </Link>
          <Link href="/sign-up" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
