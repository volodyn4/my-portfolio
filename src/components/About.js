import React from 'react';

function About() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Обо мне</h2>
      <img src="photo.jpg" alt="Моё фото" width="150" />
      <p>
        Я — веб-разработчик с опытом более 3 лет. Образование: МГТУ, факультет ИТ. Люблю React,
        Node.js и UI-дизайн.
      </p>
    </div>
  );
}

export default About;