import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../Cart/Cart";
import Blogs from "../components/Blogs/Blogs";
import Card from "../components/Card/Card";
import Courses from "../components/courses/Courses";
import Faq from "../components/faq/Faq";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/category/:id",
        element: <Card></Card>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);

export default router;
