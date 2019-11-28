import React from "react";
import { Link } from "react-router-dom";
import MainTitle from "../basic/MainTitle";

const Home: React.FC = () => (
  <div>
    <MainTitle title="Home Dashboard" />
    <Link to="/about">このコンテンツについて</Link>
  </div>
);

export default Home;
