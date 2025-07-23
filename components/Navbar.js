import Link from "next/link";
import Profile from "@/components/Profile";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg px-8 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white hover:text-blue-400 transition duration-300">
          <Link href="/">Next.js Blog</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link>
          </li>
        </ul>

        

        {/* Auth Buttons & Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Register
          </Link>

          {/*show the profile  only after login*/}

          <Profile />
        </div>
      </div>
    </nav>
  );
}
