import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Industry from "./pages/Industry";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import ScrollToTop from "./helpers/ScrollToTop";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/industry/" element={<Industry />} />
        <Route path="/resources/" element={<Resources />} />
        <Route path="/blogdetails/" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
