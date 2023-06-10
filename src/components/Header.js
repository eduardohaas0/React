import React from 'react';
import Logo from '../img/Logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <a href="index.html">
            <img id="Logo" src={Logo} alt="Logo Do Site" />
          </a>
          <ul>
            <li>Promoções</li>
            <li>Categorias</li>
            <li><a href="sobre.html">Sobre Nós</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;