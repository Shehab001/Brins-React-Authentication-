import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className=" mx-10 my-5 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1666775821/Assignment%2011/logo1_dc5zgi.png"
              className="mr-3 h-6 sm:h-9"
              alt=" Logo"
            ></img>
          </a>
          <div className="flex items-center ">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-white hover:underline"
            >
              Logout
            </a>
            <a
              href="#"
              className="mr-6 text-sm font-medium text-white hover:underline"
            >
              Login
            </a>

            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-white hover:underline"
            >
              Theme
            </a>
          </div>
        </div>
      </nav>
      <nav className="mx-16 bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
