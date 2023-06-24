import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Carousel from './components/Carousel';
import "./css/style.css";
import './css/Carousel.css';

const App = () => {
  const images = [
    './img/monitor.jpg',
    './img/processadorintel.png',
    './img/teclado e mouse.jpg',
    './img/celular.png'
  ];

  return (

    <div className="container">
      <Header />
      <Banner />
      <main className="container">
      
        <section className="products-container">
          
      <Carousel images={images} />
      
          <ProductCard />
        </section>
      </main>
      <Footer />
    </div>

  );
};

export default App;
