import React from "react";
import background from "./assets/images/background-img.jpg";
import Nav from "./Nav";
import "./index.css"; // Tailwind styles
import Info from "./Info";
import bulb from "./assets/images/bulb.jpg";
import car1 from "./assets/images/car1.jpg";
import market from "./assets/images/market.jpg";
import About from "./About";
import Form from "./Form";
import Footer from "./Footer";
import AnimateOnScroll from "./AnimateOnScroll";

const App = () => {
  return (
    <div>
      <Nav />
      <section id="home">
      <AnimateOnScroll>
        <h1 className="title-text bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
          <center>AutoMind: The Intelligent Car Price Oracle</center>
        </h1>

        <h3 className="title-subtext bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
          <center>
            Predict the future of your drive — instantly and intelligently.
          </center>
        </h3>
      </AnimateOnScroll>
      <div className="info-class">
        <AnimateOnScroll>
          <Info
            textTitle="Intelligent Price Prediction"
            textContent="Say goodbye to guesswork. AutoMind harnesses advanced ML models to provide precise price predictions for both new and used vehicles — using real-world market data, technical specs, and trend forecasting."
            imageSrc={bulb}
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Info
            textTitle="Valuation of Second-Hand Cars"
            textContent=" Evaluating a used car’s value is more than just checking mileage and age — it's about understanding its story. AutoMind dives deep into every aspect of a vehicle’s lifecycle to generate a valuation that reflects real-world worth, not just textbook depreciation."
            imageSrc={car1}
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Info
            textTitle="Dynamic Market Intelligence"
            textContent="Car prices don’t exist in a vacuum — they evolve with the market. At AutoMind, we understand that a car's value can fluctuate based on factors that go far beyond its specs. That's why our system is built to **continuously adapt to real-world market dynamics** in real time."
            imageSrc={market}
          />
        </AnimateOnScroll>
      </div>
      </section>
      <AnimateOnScroll>
       <section id="about"> <About /></section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <section id="form"><Form /></section>
    </AnimateOnScroll>
      <Footer />
    </div>
  );
};

export default App;
