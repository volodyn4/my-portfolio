import React from 'react';

function Header() {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <h1>Сергей Сергеев</h1>
      <p>Веб-разработчик</p>
      <nav>
        <a href="#about">Обо мне</a>{' | '}
        <a href="#skills">Навыки</a>{' | '}
        <a href="#experience">Опыт</a>{' | '}
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;
