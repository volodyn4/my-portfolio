import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <header style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <h1>Иван Иванов</h1>
      <p>Веб-разработчик</p>
      <nav>
        <Link to="/" style={navStyle}>Обо мне</Link>
        <Link to="/skills" style={navStyle}>Навыки</Link>
        <Link to="/experience" style={navStyle}>Опыт</Link>
        <Link to="/contact" style={navStyle}>Контакты</Link>
      </nav>
    </header>
  );
}

export default Header;
