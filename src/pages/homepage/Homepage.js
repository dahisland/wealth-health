import React from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import logo from "../../assets/favicon.png";

const Homepage = () => {
  return (
    <div className="currentPage">
      <MainNav />
      <main className="homepage_main">
        <h1>Human Resources support to optimize your business management</h1>
        <img src={logo} alt="logo" width="192px" height="192px" />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
