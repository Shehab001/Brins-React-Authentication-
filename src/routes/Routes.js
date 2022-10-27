import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Blogs from "../components/Blogs/Blogs";
import Card from "../components/Card/Card";
import Courses from "../components/courses/Courses";
import Faq from "../components/faq/Faq";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";
import Success from "../Succesful/Success";

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
        path: "/purchase",
        element: <Success></Success>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: <Card></Card>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "*",
        element: <h1 className="text-6xl text-center m-20">404 Not Found</h1>,
      },
    ],
  },
]);

export default router;
