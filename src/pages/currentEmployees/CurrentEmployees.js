import React from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";

const CurrentEmployees = () => {
  return (
    <div className="currentPage">
      <MainNav />
      <main>
        <h1>CURRENT EMPLOYEES</h1>
      </main>
      <Footer />
    </div>
  );
};

export default CurrentEmployees;
