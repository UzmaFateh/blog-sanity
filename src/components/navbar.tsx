
"use client"

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          Blogs.
        </a>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center space-x-6">
          <a
            href="#section1"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Motivational
          </a>
          <a
            href="#section1"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Lifestyle
          </a>
          <a
            href="#section1"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Travelling
          </a>
          <a
            href="#section1"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Beauty
          </a>
          <a
            href="#comment1"
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Add A Comment
          </a>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-14 left-0 w-full bg-white shadow-md md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-2 p-4 mx-auto">
            <li>
              <a
                href="#section1"
                className="block w-full text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Motivational
              </a>
            </li>
            <li>
              <a
                href="#section1"
                className="block w-full text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#section1"
                className="block w-full text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Travelling
              </a>
            </li>
            <li>
              <a
                href="#section1"
                className="block w-full text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Beauty
              </a>
            </li>
            <li>
              <a
                href="#comment1"
                className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 w-full text-center"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Add A Comment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
