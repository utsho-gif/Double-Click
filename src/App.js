import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";
import CheckOut from "./pages/CheckOut/CheckOut";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
