import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/part/Header";
import Footer from "./components/part/Footer";
import Home from "./components/page/Home";
import About from "./components/page/About";
import OutlineWithFontSize from "./components/page/letter-and-words/OutlineWithFontSize";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ border: "1px solid #ccc" }}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/letter-and-words/outline-with-font-size"
          component={OutlineWithFontSize}
        />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
