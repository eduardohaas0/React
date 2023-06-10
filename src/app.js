import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./css/style.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <main className="container">
        <section className="products-container">
          <ProductCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
