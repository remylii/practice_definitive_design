import React from "react";
import Header from "../part/Header";
import Footer from "../part/Footer";
import MainTitle from "../basic/MainTitle";

const AboutTemplate: React.FC = () => (
  <div>
    <Header />
    <main>
      <MainTitle title="About" />
      <p>about contents</p>
    </main>
    <Footer />
  </div>
);
export default AboutTemplate;
