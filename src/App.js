import { RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Item from "./components/courses/Courses";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import router from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
