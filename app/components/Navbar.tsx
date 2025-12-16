"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const mainLinks: { label: string; href: string }[] = [
  { label: "Startup", href: "#" },
  { label: "Registrations", href: "#" },
  { label: "Trademark", href: "#" },
  { label: "GST", href: "#" },
<<<<<<< HEAD
  { label: "Income Tax", href: "/incometax" },
=======
  { label: "Income Tax", href: "/income-tax" },
>>>>>>> menu-updated
  { label: "MCA", href: "/MCA" },
  { label: "Compliance", href: "/compliance" },
  { label: "Personal", href: "#" },
  { label: "Global", href: "#" },
  { label: "Cities", href: "#" },
  { label: "Guides", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <button
            className="flex lg:hidden items-center justify-center p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 text-gray-800" />
          </button>

          <Link href="/" aria-label="IndiaFilings Home">
            <div className="flex items-center space-x-3 bg-gray-900 px-4 py-2 rounded-md">
              <img src="/logo.png" alt="IndiaFilings" className="h-10" />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-900 ml-2">
            {mainLinks.map((item) => {
              const active =
                item.href !== "#" &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href)));
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative transition-colors duration-200 ${
                      active ? "text-blue-600" : "hover:text-blue-600"
                    } after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="#search"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Search"
          >
            <FiSearch size={18} />
          </Link>
          <Link
            href="#login"
            className="text-gray-700 text-sm font-medium relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0"
          >
            Login
          </Link>
          <Link
            href="#signup"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors duration-200"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h2 className="font-semibold text-gray-700">Menu</h2>
            <button
              className="p-2 rounded hover:bg-gray-100"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col p-4 gap-3 font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            {mainLinks.map((item) => {
              const active =
                item.href !== "#" &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href)));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={active ? "text-blue-600" : ""}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="#login"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                Login
              </Link>
              <Link
                href="#signup"
                onClick={() => setOpen(false)}
                className="px-3 py-2 border border-blue-600 rounded text-blue-600 text-sm font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
