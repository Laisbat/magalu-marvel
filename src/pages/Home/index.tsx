// componente home com a listagem dos heroes da marvel
import React from 'react';
import logo from '../../assets/icons/logo.svg';
import './styles.css';

const Home: React.FC = () => {

  return (
    <div className="home-container">
      <header className="app-header">
        <img
          data-testid="id-image"
          src={logo}
          width={400}
          height={100}
          alt="logo"
        />
        <h1 className="app-title">
          EXPLORE O UNIVERSO
        </h1>
        <p className="app-intro">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
      </header>
    </div>
  );
};

export default Home;