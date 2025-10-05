

import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Left: Logo + Links with blue background */}
        <div className="flex items-center">
          <div className="flex items-center space-x-8 bg-gray-900 px-4 py-2 rounded-md">
            <img src="/logo.png" alt="IndiaFilings" className="h-10" />
            </div>

            <div className="flex items-center space-x-8 px-4 py-2 rounded-md">
            {/* Nav Links */}
            <ul className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-900">
              {[
                "Startup",
                "Registrations",
                "Trademark",
                "GST",
                "Income Tax",
                "MCA",
                "Compliance",
                "Personal",
                "Global",
                "Cities",
                "Guides",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Search + Login + Sign Up */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <FiSearch size={18} />
          </button>
          <button className="text-gray-700 text-sm font-medium relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}


