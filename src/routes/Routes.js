import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Courses from "../components/courses/Courses";
import Faq from "../components/faq/Faq";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
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
    ],
  },
]);

export default router;
