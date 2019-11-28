import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/page/Home";
import About from "./components/page/About";
import OutlineWithFontSize from "./components/page/letter-and-words/OutlineWithFontSize";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/letter-and-words/outline-with-font-size"
        component={OutlineWithFontSize}
      />
    </BrowserRouter>
  );
};

export default App;
