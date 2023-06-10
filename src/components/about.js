import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h4>
        A loja online <strong>SucoXoX</strong> Store é especializada em produtos de hardware para computadores. O
        proprietário é um jovem empreendedor dedicado a oferecer produtos de qualidade para seus clientes. Com uma ampla
        variedade de produtos e um site de fácil navegação, a TechStore rapidamente se tornou um sucesso entre os
        entusiastas de tecnologia e usuários de computadores em todo o país. A loja é conhecida por sua excelente atenção
        ao cliente, envio rápido e preços competitivos.
      </h4>
      <div className="image-container">
        <figure>
          <img src="img/fachada.jpg" alt="Exterior da Loja" />
          <figcaption>Exterior da Loja</figcaption>
        </figure>
        <figure>
          <img src="img/interior.jpg" alt="Interior da Loja" />
          <figcaption>Interior da Loja</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default About;