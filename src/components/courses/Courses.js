import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  // console.log(news);
  //categories.map((data) => console.log(data));
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="container px-20 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-4 lg:w-1/5 lg:px-2 lg:space-y-4 mt-16">
              {categories.map((category) => (
                <Link
                  className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4"
                  key={category.id}
                  to={`/category/${category.id}`}
                >
                  <p className="text-white"> {category.name} </p>
                </Link>
              ))}
            </div>

            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p className="text-gray-500 font-bold dark:text-gray-300">
                  {categories.length} Items
                </p>
                <div className="flex items-center">
                  <p className="text-gray-500 dark:text-gray-300 mr-3">Sort</p>
                  <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option className="" value="#">
                      Recommended
                    </option>
                    <option className="text-gray" value="#">
                      Size
                    </option>
                    <option className="" value="#">
                      Price
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {news.map((data) => (
                  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg"
                      src={data.author.img}
                      alt="pic"
                    ></img>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.name}
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {data.title}
                      </p>
                      <p className="mb-5 text-gray-900">
                        <span className="mr-2 ">
                          Badge : {data.rating.badge}
                        </span>
                        <span className="ml-2 ">
                          Rating : {data.rating.number}
                        </span>
                      </p>
                      <Link
                        to="#"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add To Cart
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
