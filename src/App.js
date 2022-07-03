import './App.css';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom'
import Courses from './Courses/Courses';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer'
import Login from './Account/Login';
import Register from './Account/Register';
import Profile from './Shared/Profile';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element ={<Home></Home>} ></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
