import React from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";

const Error404 = () => {
  return (
    <div className="currentPage">
      <MainNav />
      <main className="pageError_main">
        <h1>ERROR 404</h1>
        <p>Sorry ! The page you looking for doesn't exist...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
