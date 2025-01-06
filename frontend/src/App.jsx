import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Work from "./pages/Work/Work";
import Loader from "./helpers/Loader";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import WorkPort from "./pages/Work/WorkPort";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Test from "./pages/Testimonial/Test";
import ServiceAll from "./pages/Service/ServiceAll";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ToastContainer closeOnClick={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work-port" element={<WorkPort />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/test" element={<Test />} />
            <Route path="/serviceAll" element={<ServiceAll />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
