import React from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";

const Error404 = () => {
  return (
    <div className="currentPage">
      <MainNav />
      <main>
        <h1>ERROR 404</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
