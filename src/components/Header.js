import React from 'react';

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
<a href="#about" style={navStyle}>Обо мне</a>
<a href="#skills" style={navStyle}>Навыки</a>
<a href="#experience" style={navStyle}>Опыт</a>
<a href="#contact" style={navStyle}>Контакты</a>
</nav>
</header>
);
}

export default Header;