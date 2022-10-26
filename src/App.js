import "./App.css";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Signup></Signup>
      <Header></Header>
      <Item></Item>
    </div>
  );
}

export default App;
