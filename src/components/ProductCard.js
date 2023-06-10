import React from 'react';
import Product from './product.js';
import Pc from "../img/pcpositivo.jpg"
import rtx from "../img/RTX.png"
import processador from "../img/ryzen.jpg"
import mmr from "../img/mmr.jpg"
import placamae from "../img/placamae1.jpg"
import nvme from "../img/nvme.jpg"


const ProductCard = () => {
  return (
    <section className="products-container">
      <Product
        title="Pc Positivo"
        description="Esse pc é muito Bom"
        price="5000,99"
        image={Pc}
        
      />
      <Product
        title="Rtx 4090 Ti"
        description="Rtx 4090"
        price="20000,99"
        image={rtx}
        
      />
      <Product
        title="Processador R9 5900X"
        description="12/24 clock base 3,7ghz (4.8ghz turbo)"
        price="2300,99"
        image={processador}
      />
      <Product
        title="Placa Mão Gigabyte Aorus"
        description="Socket AM4, micro ATX"
        price="876,99"
        image={placamae}
      />
      <Product
        title="Memória Ram Corsair"
        description="8GB (1x8GB), 3200MHz, DDR4, C16, Preto"
        price="264,99"
        image={mmr}
      />
      <Product
        title="Ssd Nvme 1TB kingston"
        description="Leitura: 7000MB/s e Gravação: 6000MB/s"
        price="669,99"
        image={nvme}
      />
    </section>
  );
};

export default ProductCard;
