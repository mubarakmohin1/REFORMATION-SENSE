import './App.css';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom'
import Courses from './Courses/Courses';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element ={<Home></Home>} ></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
