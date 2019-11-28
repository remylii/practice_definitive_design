import React from "react";
import Header from "../../part/Header";
import Footer from "../../part/Footer";
import MainTitle from "../../basic/MainTitle";

const OutlineWithFontSizeTemplate: React.FC = () => (
  <div>
    <Header />
    <main>
      <MainTitle title="フォントサイズで情報の階層を表現せよ" />
      <section>
        <h2>Good</h2>
      </section>
      <section>
        <h2>Bad</h2>
      </section>
    </main>
    <Footer />
  </div>
);

export default OutlineWithFontSizeTemplate;
