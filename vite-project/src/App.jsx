import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Home/NavbarComponent';
import FrontPage from './Home/FrontPage';
import About from './About/About';
import CartItem from './Store/CartItem';
import Contact from './contact/Contact';
import ProductMoviePage from './About/ProductMoviePage';
import Ragister from './loginpage/Ragister'; 
import Profile from './loginpage/Profile';
import Login from './loginpage/Login';
import { ToastContainer } from 'react-bootstrap'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavbarComponent />
                <FrontPage />
              </div>
            }
          />
          <Route
            path="/store"
            element={
              <div>
                <NavbarComponent />
                <CartItem />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <NavbarComponent />
                <About />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <NavbarComponent />
                <Contact />
              </div>
            }
          />
          <Route
            path="/product/:movieId"
            element={
              <div>
                <NavbarComponent />
                <ProductMoviePage />
              </div>
            }
          />
          <Route path="/ragister" element={<Ragister />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <div>
                <NavbarComponent />
                <Profile />
              </div>
            }
          />
        </Routes>
        <ToastContainer /> 
      </div>
    </Router>
  );
};

export default App;