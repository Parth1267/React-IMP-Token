import React from "react";
import Header from "../comman/Header";
import Footer from "../comman/Footer";
import Hero from "./Hero";
import Content from "./Content";
import ClientLog from "./ClientLog";
import BuyToke from "./BuyToke";
import Buy from "./Buy";
import Ecosystem from "./Ecosystem";
import Tokenomics from "./Tokenomics";
import Statistics from "./Statistics";
import HowtoJoin from "./HowtoJoin";
import FAQ from "./FAQ";
import Roadmap from "./Roadmap";
import About from "./About";
import Stake from "./Stake";
import Whitpaper from "./Whitpaper";
import GetImpresiveToken from "./GetImpresiveToken";

const Index = () => {
  return (
    <>
      <Header />
      <div className="offcanvas-info-backdrop"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Content />
            <HowtoJoin />
            <GetImpresiveToken/>
            {/* <Ecosystem /> */}
            <About />
            <Tokenomics />
            {/* <Statistics /> */}
            <Roadmap />
            <Whitpaper/>
            {/* <BuyToke /> */}
            <Stake />
            <ClientLog />
            {/* <Buy /> */}
            {/* <FAQ /> */}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
