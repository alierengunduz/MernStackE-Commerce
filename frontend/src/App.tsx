import { Routes, Route } from "react-router-dom";
import { CustomRouter } from "./router/CustomRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <Routes>
          {CustomRouter.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <div>
                  {!item.hideHeaderFooter && <Header />}
                  {item.element}
                  {!item.hideHeaderFooter && <Footer />}
                </div>
              }
            />
          ))}
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
