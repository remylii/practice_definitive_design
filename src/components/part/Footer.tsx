import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/letter-and-words/outline-with-font-size">
          フォントサイズで情報の階層を表現せよ
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
