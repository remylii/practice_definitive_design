import React from "react";
import { Link } from "react-router-dom";
import Header from "../part/Header";
import Footer from "../part/Footer";
import MainTitle from "../basic/MainTitle";

const HomeTemplate: React.FC = () => (
  <div>
    <Header />
    <main>
      <MainTitle title="Home Dashbord" />
      <div>
        <Link to="/about">このコンテンツについて</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default HomeTemplate;
