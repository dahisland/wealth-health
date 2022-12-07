import React from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import logo from "../../assets/logo-HRnet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div className="currentPage">
      <MainNav />
      <main className="homepage_main">
        <h1>Human Ressources support to optimize your business management</h1>
        <div className="icon-tool">
          <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        </div>
        <img src={logo} alt="logo" />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
