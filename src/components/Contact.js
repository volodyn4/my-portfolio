import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '30px' }}>
      <h2>Контакты</h2>
      <form>
        <input type="text" placeholder="Ваше имя" required style={inputStyle} />
        <input type="email" placeholder="Email" required style={inputStyle} />
        <textarea placeholder="Сообщение" rows="4" style={inputStyle}></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
  padding: '8px'
};

export default Contact;
