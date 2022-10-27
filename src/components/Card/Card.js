import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Card = () => {
  const data = useLoaderData();
  //console.log(data[0]);

  return (
    <>
      <div className="text-center mt-5 text-white">
        <h1 className="text-4xl font-bold underline">
          Welcome To {data[0].name} Course
        </h1>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 mx-auto mt-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </span>
      </div>
      <div className="pb-10 pt-5 block w-4/12			 mx-auto pl-5">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src={data[0].author.img}
            alt="banner"
          ></img>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data[0].name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data[0].title}
            </p>
            <div className="flex justify-between font-bold">
              <span>Rating : {data[0].rating.number}</span>
              <span>Badge : {data[0].rating.badge}</span>
            </div>
            <p className="font-bold">Author Name : {data[0].author.name}</p>
            <p className="font-bold">Duration : {data[0].author.Duration}</p>
            <p className="font-bold">Total Taken : {data[0].total_taken}</p>
            <p className="font-bold">Price : ${data[0].price}</p>

            <Link
              to="/cart"
              className="inline-flex items-center py-2 my-5 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Premium Access
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
