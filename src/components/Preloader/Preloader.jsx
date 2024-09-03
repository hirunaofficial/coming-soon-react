import React, { useEffect } from "react";
import "./Preloader.css";

function Preloader() {
  useEffect(() => {
    const preload = document.querySelector(".preloader");

    const hidePreloader = () => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    };

    const timeoutId = setTimeout(hidePreloader, 3000);

    // Cleanup the timeout in case the component unmounts before it's complete
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="preloader">
      <div className="spinner_wrap">
        <div className="spinner" />
      </div>
    </div>
  );
}

export default Preloader;
