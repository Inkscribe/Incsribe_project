import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import  AOS  from "aos";
import 'aos/dist/aos.css'
import Home from './pages/home/home.jsx';
import Navigation from './pages/navigation/header/Header';
import Footer from './pages/footer/footer.jsx';
import About from './pages/about/about.jsx'
import Services from './pages/services/services.jsx'
import Classes from "./pages/classes/classes.jsx";
import Blog from "./pages/blog/blog.jsx";
import Classes_1 from './pages/classes_2/classes.jsx'
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []); 
  return (
    <Router>  
      <MainContent  />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();  
  const isHomepage = location.pathname === '/';
  return (
    <div data-aos="fade-zoomIn"  className={`main-container ${isHomepage ? 'has-background' : ''}`} style={isHomepage ?  {backgroundImage: ''} : {}}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes_1" element={<Classes_1 />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;


