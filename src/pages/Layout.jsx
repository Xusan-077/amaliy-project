import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Layout() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${top ? "top top--active" : "top"}`}>
        <button
          className="top__btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
