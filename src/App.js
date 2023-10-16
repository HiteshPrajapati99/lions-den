import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Register from "./pages/register/Register";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Privacy_Policy from "./pages/register/Privacy_Policy";
import Rules from "./pages/register/Rules";
import Terms from "./pages/register/Terms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-out-sine",
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/term_and_conditions" element={<Terms />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
