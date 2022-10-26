import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftNav from "../leftNav/LeftNav";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  //categories.map((data) => console.log(data));
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="container px-20 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
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

              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
